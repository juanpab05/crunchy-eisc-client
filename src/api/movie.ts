const API  = "http://localhost:3000";

export async function fetchApiJson() {
  const res = await fetch(`${API}/api/movies/getAll`);
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`API error ${res.status}: ${text}`);
  }
  return res.json();
}