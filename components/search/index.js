import { useState } from "react"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import InputBase from "@mui/material/InputBase"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"
import List from "@/components/list"

const Search = () => {
  const [value, setValue] = useState("")
  const [items, setItems] = useState([])

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch(`api/movies?term=${encodeURIComponent(value)}`)
      const { Search } = await response.json()

      Search ? setItems(Search) : setItems([])
    } catch (error) {
      console.error("unable to fetch movies")
      console.error(error)

      setItems([])
    }
  }

  return (
    <>
      <Box sx={{ my: 4 }}>
        <Paper component="form" sx={{ p: "2px 4px", display: "flex", alignItems: "center" }} onSubmit={handleSubmit}>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search for movies"
            onChange={handleChange}
            inputProps={{ "aria-label": "search for movies" }}
          />

          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton type="submit" aria-label="search for movies" sx={{ p: "10px" }}>
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>

      <Box sx={{ my: 4 }}>
        <List items={items} />
      </Box>
    </>
  )
}

export default Search
