export default async function handler(req, res) {
  const timeReq = await fetch("http://localhost:8080/");
  const { time } = await timeReq.json();

  res.status(200).json({ timeFromAPI: time });
}
