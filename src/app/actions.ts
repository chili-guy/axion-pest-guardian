'use server';

/**
 * Server Action to handle project lead submissions.
 * This can be connected to any email service like Resend, SendGrid, or Formspree.
 * 
 * To use with Formspree (easiest for landing pages):
 * 1. Create a form at formspree.io
 * 2. Get your form ID
 * 3. Replace the placeholder below
 */
export async function submitQuoteAction(formData: FormData) {
  const name = formData.get('name') as string;
  const phone = formData.get('phone') as string;
  const local = formData.get('local') as string;
  const problem = formData.get('problem') as string;

  // Basic validation (fallback)
  if (!name || !phone || !local || !problem) {
    return { success: false, message: "Campos obrigatórios ausentes." };
  }

  try {
    // Encaminhar leads para: comercial@axionenviromental.com.br
    
    // Option A: Using Formspree (Recommended for simple landing pages)
    // Replace 'YOUR_FORMSPREE_ID' with the actual ID from your client
    const FORMSPREE_ID = "YOUR_FORMSPREEE_ID_HERE"; // e.g. "mjvnojrz"
    
    // For now, we'll log it and simulate a successful response.
    // In production, uncomment the fetch below:
    
    /*
    const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name,
        phone,
        local,
        problem,
        _subject: `Novo Orçamento: ${name} - ${local}`
      })
    });

    if (!response.ok) {
      throw new Error('Falha ao enviar formulário');
    }
    */

    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 800));

    console.log("Formulário recebido no servidor:", { name, phone, local, problem });
    
    return { 
      success: true, 
      message: "Solicitação enviada com sucesso! Logo entraremos em contato." 
    };
  } catch (error) {
    console.error("Erro ao processar formulário:", error);
    return { 
      success: false, 
      message: "Ocorreu um erro ao enviar sua solicitação. Por favor, tente novamente." 
    };
  }
}
