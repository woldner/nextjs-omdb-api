const { API_KEY } = process.env

export default function handler(req, res) {
  console.log("api key =>", API_KEY)
  res.status(200).json({ name: "John Doe" })
}
