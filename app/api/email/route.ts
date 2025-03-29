import { render } from "@react-email/render";
import HenryMore from "../../../emails/HenryMore";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request, res: Response) {
  const { email } = await request.json();

  const htmlContent = await render(HenryMore());

  if (typeof htmlContent !== "string") {
    return Response.json({ error: "The `html` field must be a `string`." });
  }
  const { data, error } = await resend.emails.send({
    from: "Name <Name@resend.dev>", //example email
    to: [email],
    subject: "Elevate Your Sound & Mix in 2025!",
    html: htmlContent,
  });

  if (error) {
    return Response.json(error);
  }
  return Response.json({ message: "Email sent successfully!" });
}
