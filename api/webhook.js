export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  const body = req.body;

  const allowedPrograms = [
    'Fg6PaFpoGXkYsidMpWxTWqvEgfPj6r2EXZ1DqQdfJ6eR',  // Pump.fun
    'Bonk11111111111111111111111111111111111111111' // LetsBonk
  ];

  if (allowedPrograms.includes(body.program)) {
    console.log("✅ New token buy detected!");
    console.log(JSON.stringify(body, null, 2));
  }

  return res.status(200).json({ success: true });
}
