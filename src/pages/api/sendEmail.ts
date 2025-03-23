import type { APIRoute } from "astro";
import { Resend } from "resend";
import ContactFormResponse from "../../emails/ContactFormResponse";
import ContactFormNotification from "../../emails/ContactFormNotification";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const { email, name, phone, subject, message } = await request.json();

  const resend = new Resend(import.meta.env.RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: "Berlan Paniagua <no-reply@lafortunalaw.com>",
      to: [email, "luiscr1104@gmail.com"], // envía copia al despacho
      subject: "Thank you for contacting Berlan Paniagua Law Office",
      react: ContactFormResponse({ name }),
    });

    // Correo al despacho con todos los datos del formulario
    await resend.emails.send({
      from: "Berlan Paniagua <no-reply@lafortunalaw.com>",
      to: ["berlanpaniagua@gmail.com"],
      subject: `New Contact Form Submission: ${subject}`,
      react: ContactFormNotification({ name, email, phone, subject, message }), // <-- aquí usas tu nuevo componente
    });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
};
