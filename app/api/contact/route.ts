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

    // Usando Resend - serviço confiável e popular com Next.js/Vercel
    // Requer API key: crie em https://resend.com e adicione como variável de ambiente RESEND_API_KEY
    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      console.warn('RESEND_API_KEY não configurada. Usando fallback.')
      // Fallback: retorna sucesso mas loga os dados (para desenvolvimento)
      // Em produção, configure a API key do Resend
      console.log('📧 Email que seria enviado:')
      console.log('Para: fideliscota@gmail.com')
      console.log('Assunto:', `Contato do Site: ${subject.trim()}`)
      console.log('Dados:', { name, email, phone, subject, message })
      
      // Retorna sucesso para não quebrar o fluxo do usuário
      // Mas você deve configurar o Resend para produção
      return NextResponse.json(
        { 
          message: 'Mensagem recebida! Entraremos em contato em breve. ' +
                   '(Nota: Configure RESEND_API_KEY para envio real de emails)'
        },
        { status: 200 }
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

    console.log('Enviando email via Resend para:', 'fideliscota@gmail.com')

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Site Fidelis & Cota <onboarding@resend.dev>', // Use domínio verificado ou onboarding@resend.dev para testes
        to: ['fideliscota@gmail.com'],
        reply_to: email.trim(),
        subject: `Contato do Site: ${subject.trim()}`,
        html: emailHtml,
        text: emailText,
      }),
    })

    console.log('Status da resposta Resend:', response.status, response.statusText)

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Erro desconhecido' }))
      console.error('Erro do Resend:', errorData)
      throw new Error(errorData.message || `Erro ao enviar email. Status: ${response.status}`)
    }

    const result = await response.json()
    console.log('Email enviado com sucesso via Resend:', result.id)

    return NextResponse.json(
      { message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    
    // Mensagem de erro mais específica
    const errorMessage = error instanceof Error 
      ? error.message 
      : 'Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato pelo WhatsApp.'
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}
