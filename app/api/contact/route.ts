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

    // FormSubmit - IMPORTANTE: O email fideliscota@gmail.com precisa ser confirmado
    // Acesse https://formsubmit.co e confirme o email para ativar o serviço
    const formData = new URLSearchParams()
    formData.append('name', name.trim())
    formData.append('email', email.trim())
    formData.append('phone', (phone || '').trim())
    formData.append('subject', subject.trim())
    formData.append('message', message.trim())
    formData.append('_to', 'fideliscota@gmail.com')
    formData.append('_subject', `Contato do Site: ${subject.trim()}`)
    formData.append('_template', 'box')
    formData.append('_captcha', 'false')
    // Campo _url ajuda a evitar bloqueios
    formData.append('_url', process.env.NEXT_PUBLIC_SITE_URL || 'https://fidelis-cota.vercel.app')
    // Campo _next para redirecionamento (não usado em API, mas ajuda na validação)
    formData.append('_next', process.env.NEXT_PUBLIC_SITE_URL || 'https://fidelis-cota.vercel.app')

    console.log('Enviando email via FormSubmit para:', 'fideliscota@gmail.com')
    console.log('Dados do formulário:', { name, email, phone, subject, message: message.substring(0, 50) + '...' })
    
    const response = await fetch('https://formsubmit.co/ajax/fideliscota@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      },
      body: formData.toString(),
    })

    console.log('Status da resposta FormSubmit:', response.status, response.statusText)

    // Tratamento específico para erro 403
    if (response.status === 403) {
      const errorText = await response.text().catch(() => '')
      console.error('Erro 403 do FormSubmit:', errorText)
      throw new Error(
        'O serviço de email está bloqueando a requisição. ' +
        'Por favor, verifique se o email fideliscota@gmail.com foi confirmado no FormSubmit. ' +
        'Acesse sua caixa de entrada e confirme o email de ativação do FormSubmit.'
      )
    }

    // Verifica se a resposta é JSON válido
    const contentType = response.headers.get('content-type')
    let result: any
    
    if (!contentType || !contentType.includes('application/json')) {
      const textResponse = await response.text()
      console.error('Resposta não-JSON do FormSubmit:', textResponse)
      console.error('Content-Type recebido:', contentType)
      
      // Tenta fazer parse mesmo assim
      try {
        result = JSON.parse(textResponse)
      } catch {
        throw new Error(`Resposta inválida do serviço de email. Status: ${response.status}`)
      }
    } else {
      result = await response.json()
    }

    console.log('Resultado do FormSubmit:', result)

    // Verifica se há erro na resposta
    if (result.error || result.message?.toLowerCase().includes('error') || result.success === false) {
      console.error('Erro na resposta do FormSubmit:', result)
      throw new Error(result.message || result.error || 'Erro ao enviar mensagem via FormSubmit')
    }

    // Verifica status HTTP
    if (!response.ok) {
      console.error('Status HTTP não OK:', response.status, result)
      throw new Error(result.message || `Erro HTTP ${response.status} ao enviar mensagem`)
    }

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
