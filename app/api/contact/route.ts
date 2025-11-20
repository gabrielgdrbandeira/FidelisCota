import { Resend } from 'resend'
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

    // Verifica se a API key está configurada
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Configuração de email não encontrada. Por favor, entre em contato pelo WhatsApp.' },
        { status: 500 }
      )
    }

    // Inicializa o Resend apenas quando necessário
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Envia o email usando Resend
    const { data, error } = await resend.emails.send({
      from: 'Fidelis & Cota <onboarding@resend.dev>', // Você precisa verificar seu domínio no Resend
      to: ['fideliscota@gmail.com'],
      replyTo: email,
      subject: `Contato do Site: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1B2A49;">Nova mensagem do site Fidelis & Cota</h2>
          <div style="background-color: #F5EDE3; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            ${phone ? `<p><strong>Telefone:</strong> ${phone}</p>` : ''}
            <p><strong>Assunto:</strong> ${subject}</p>
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #1B2A49;">Mensagem:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
        </div>
      `,
      text: `
Nova mensagem do site Fidelis & Cota

Nome: ${name}
E-mail: ${email}
${phone ? `Telefone: ${phone}` : ''}
Assunto: ${subject}

Mensagem:
${message}
      `,
    })

    if (error) {
      console.error('Erro ao enviar email:', error)
      return NextResponse.json(
        { error: 'Erro ao enviar mensagem. Por favor, tente novamente.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Mensagem enviada com sucesso!', data },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erro na API:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor. Por favor, tente novamente.' },
      { status: 500 }
    )
  }
}

