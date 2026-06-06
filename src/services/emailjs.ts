export type EnquiryPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  pageSource: string;
};

const EMAILJS_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send';

const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

export const isEmailJsConfigured = Boolean(
  emailJsConfig.serviceId && emailJsConfig.templateId && emailJsConfig.publicKey,
);

export const sendEnquiryEmail = async (payload: EnquiryPayload) => {
  if (!isEmailJsConfigured) {
    throw new Error('EmailJS is not configured. Add your service ID, template ID, and public key to the Vite env file.');
  }

  const response = await fetch(EMAILJS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      service_id: emailJsConfig.serviceId,
      template_id: emailJsConfig.templateId,
      user_id: emailJsConfig.publicKey,
      template_params: {
        from_name: payload.name,
        company_name: payload.company || 'Not provided',
        from_email: payload.email,
        phone_number: payload.phone,
        subject: payload.subject,
        message: payload.message,
        page_source: payload.pageSource,
        reply_to: payload.email,
        to_email: 'fareastcalibration@gmail.com',
      },
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(details || 'EmailJS could not send the message.');
  }
};
