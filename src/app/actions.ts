'use server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.titan.email',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function submitQuoteAction(formData: FormData) {
  const name = formData.get('name') as string;
  const phone = formData.get('phone') as string;
  const local = formData.get('local') as string;
  const problem = formData.get('problem') as string;

  if (!name || !phone || !local || !problem) {
    return { success: false, message: "Campos obrigatórios ausentes." };
  }

  try {
    await transporter.sendMail({
      from: `"Axion Site" <${process.env.SMTP_USER}>`,
      to: 'comercial@axionenviromental.com.br',
      subject: `Novo Orçamento: ${name} (${local})`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #26326b; border-bottom: 2px solid #4a6bb1; padding-bottom: 10px;">Nova Solicitação de Orçamento</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Telefone/WhatsApp:</strong> ${phone}</p>
          <p><strong>Local:</strong> ${local}</p>
          <p><strong>Problema relatado:</strong> ${problem}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #888;">Este e-mail foi enviado automaticamente pelo formulário do site Axion Environmental.</p>
        </div>
      `,
    });

    return {
      success: true,
      message: "Solicitação enviada com sucesso! Logo entraremos em contato.",
    };
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return {
      success: false,
      message: "Erro ao enviar sua solicitação. Por favor, tente novamente.",
    };
  }
}
