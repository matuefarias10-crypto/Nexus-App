// Safe debug endpoint — DO NOT return secret values.
// Use to verify the server is running and ANTHROPIC_API_KEY presence (boolean only).
export default function handler(req, res) {
  try {
    const hasKey = !!process.env.ANTHROPIC_API_KEY;
    res.status(200).json({ ok: true, anthropic_key_set: hasKey, node_version: process.version });
  } catch (err) {
    console.error('[debug api] error', err);
    res.status(500).json({ ok: false, error: String(err) });
  }
}
