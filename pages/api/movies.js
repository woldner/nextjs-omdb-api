const { API_KEY } = process.env

const handler = async ({ body }, res) => {
  const { title } = body

  try {
    const response = await fetch(`http://omdbapi.com/?apikey=${API_KEY}&t=${title}`)
    const result = await response.json()

    res.status(200).json(result)
  } catch (error) {
    console.error("unable to fetch movies")
    console.error(error)

    return res.status(500)
  }
}

export default handler
