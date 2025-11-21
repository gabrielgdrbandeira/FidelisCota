import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validação básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Campos obrigatórios não preenchidos' },
        { status: 400 }
      )
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Usando Web3Forms - serviço gratuito que não requer verificação de domínio
    // Mais simples e confiável que Resend para este caso
    // Acesse https://web3forms.com para obter sua access key gratuita
    const web3formsApiKey = process.env.WEB3FORMS_ACCESS_KEY

    if (!web3formsApiKey) {
      console.warn('WEB3FORMS_ACCESS_KEY não configurada.')
      console.log('📧 Email que seria enviado:')
      console.log('Para: fideliscota@gmail.com')
      console.log('Assunto:', `Contato do Site: ${subject.trim()}`)
      console.log('Dados:', { name, email, phone, subject, message })
      
      return NextResponse.json(
        { 
          error: 'Serviço de email não configurado. Por favor, entre em contato diretamente pelo WhatsApp: (31) 99104-7474'
        },
        { status: 500 }
      )
    }

    // Formata o email em HTML
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #1B2A49; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 20px; margin-top: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1B2A49; }
            .message { background-color: white; padding: 15px; border-left: 4px solid #1B2A49; margin-top: 15px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Nova Mensagem de Contato</h2>
              <p>Site Fidelis & Cota</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Nome:</span> ${name.trim()}
              </div>
              <div class="field">
                <span class="label">Email:</span> ${email.trim()}
              </div>
              <div class="field">
                <span class="label">Telefone:</span> ${phone?.trim() || 'Não informado'}
              </div>
              <div class="field">
                <span class="label">Assunto:</span> ${subject.trim()}
              </div>
              <div class="message">
                <span class="label">Mensagem:</span><br>
                ${message.trim().replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    const emailText = `
Nova mensagem de contato do site Fidelis & Cota

Nome: ${name.trim()}
Email: ${email.trim()}
Telefone: ${phone?.trim() || 'Não informado'}

Assunto: ${subject.trim()}

Mensagem:
${message.trim()}

---
Esta mensagem foi enviada através do formulário de contato do site.
`

    console.log('Enviando email via Web3Forms para:', 'fideliscota@gmail.com')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: web3formsApiKey,
        subject: `Contato do Site: ${subject.trim()}`,
        from_name: name.trim(),
        from_email: email.trim(),
        phone: phone?.trim() || '',
        message: emailText,
        to: 'fideliscota@gmail.com',
      }),
    })

    console.log('Status da resposta Web3Forms:', response.status, response.statusText)

    if (!response.ok) {
      const errorData = await response.json().catch(async () => {
        const text = await response.text().catch(() => 'Erro desconhecido')
        return { message: text }
      })
      console.error('Erro completo do Web3Forms:', JSON.stringify(errorData, null, 2))
      throw new Error('Erro ao enviar mensagem via Web3Forms')
    }

    const result = await response.json()
    console.log('Resultado do Web3Forms:', result)

    if (!result.success) {
      console.error('Web3Forms retornou sucesso=false:', result)
      throw new Error(result.message || 'Erro ao enviar mensagem')
    }

    console.log('✅ Email enviado com sucesso via Web3Forms')

    return NextResponse.json(
      { message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    
    // Mensagem de erro amigável e consistente
    let errorMessage = 'Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato pelo WhatsApp: (31) 99104-7474'
    
    if (error instanceof Error) {
      // Se já tiver uma mensagem amigável, usa ela
      if (error.message.includes('WhatsApp') || error.message.includes('tente novamente')) {
        errorMessage = error.message
      } else if (error.message.includes('Todas as tentativas')) {
        // Erro de configuração - todos os domínios falharam
        errorMessage = 'Erro de configuração do serviço de email. Por favor, entre em contato diretamente pelo WhatsApp: (31) 99104-7474'
      } else {
        // Caso contrário, usa mensagem padrão amigável
        errorMessage = 'Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato pelo WhatsApp: (31) 99104-7474'
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}
