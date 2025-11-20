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

    // FormSubmit - serviço gratuito que não precisa de chaves
    // Apenas envia para o email especificado
    const formData = new URLSearchParams()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('phone', phone || '')
    formData.append('subject', subject)
    formData.append('message', message)
    formData.append('_to', 'fideliscota@gmail.com')
    formData.append('_subject', `Contato do Site: ${subject}`)
    formData.append('_template', 'box')
    formData.append('_captcha', 'false')

    // Envia via FormSubmit
    const response = await fetch('https://formsubmit.co/ajax/fideliscota@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      },
      body: formData.toString(),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error('Erro ao enviar mensagem')
    }

    return NextResponse.json(
      { message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    return NextResponse.json(
      { error: 'Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato pelo WhatsApp.' },
      { status: 500 }
    )
  }
}
