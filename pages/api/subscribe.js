export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { email } = req.body || {};
  if (!email) return res.status(400).json({ error: "Email required" });

  // TODO: integrate with Mailchimp / SendGrid / ConvertKit / Supabase
  // For now, respond ok — and log server side (in dev)
  console.log("New early-access signup:", email);

  // In production, save to DB or mailing provider
  res.writeHead(302, { Location: "/" });
  res.end();
}
