const { API_KEY } = process.env

const handler = async ({ query }, res) => {
  const { term } = query

  const response = await fetch(`http://omdbapi.com?apikey=${API_KEY}&s=${term}`)
  const result = await response.json()

  res.status(200).json(result)
}

export default handler
