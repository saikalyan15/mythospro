export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "method_not_allowed" });
  }

  return res.status(410).json({
    error: "payments_disabled",
    message: "Payments are disabled. Use BYOK with your own OpenAI API key.",
  });
}
