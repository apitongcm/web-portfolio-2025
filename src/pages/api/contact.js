import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, message, captcha } = req.body;
  if (!captcha) return res.status(400).json({ success: false, msg: "Captcha missing" });

  // Verify reCAPTCHA
  const verifyRes = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
    { method: "POST" }
  );
  const verification = await verifyRes.json();

  if (!verification.success) {
    return res.status(400).json({ success: false, msg: "Captcha failed" });
  }

  // Send Email
  const transporter = nodemailer.createTransport({
    service: "gmail", // or use a custom SMTP
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"My Web App" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_RECEIVER,
      subject: "New Contact Message",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
}
