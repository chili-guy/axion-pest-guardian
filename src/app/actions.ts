'use server';
import { Resend } from 'resend';

// Initialize Resend with your API Key
// In production, this should be in process.env.RESEND_API_KEY
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitQuoteAction(formData: FormData) {
  const name = formData.get('name') as string;
  const phone = formData.get('phone') as string;
  const local = formData.get('local') as string;
  const problem = formData.get('problem') as string;

  // Basic validation
  if (!name || !phone || !local || !problem) {
    return { success: false, message: "Campos obrigatórios ausentes." };
  }

  try {
    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Axion Site <onboarding@resend.dev>', // After domain verification, change to comercial@axionenviromental.com.br
      to: ['comercial@axionenviromental.com.br'],
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

    if (error) {
      console.error("Resend Error:", error);
      return { 
        success: false, 
        message: "Erro ao enviar e-mail. Por favor, tente novamente mais tarde." 
      };
    }

    console.log("E-mail enviado com sucesso:", data);
    
    return { 
      success: true, 
      message: "Solicitação enviada com sucesso! Logo entraremos em contato." 
    };
  } catch (error) {
    console.error("Erro ao processar formulário:", error);
    return { 
      success: false, 
      message: "Ocorreu um erro ao enviar sua solicitação." 
    };
  }
}
