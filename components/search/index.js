import { useState } from "react"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import OutlinedInput from "@mui/material/OutlinedInput"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"

const Search = () => {
  const [value, setValue] = useState()

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleClick = async () => {
    const response = await fetch(`/api/movies?term=${value}`)

    console.log({ response })
  }

  return (
    <>
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="search-term">Search</InputLabel>
        <OutlinedInput
          id="search-term"
          type="text"
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="search for movies" onClick={handleClick} edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          label="Search"
        />
      </FormControl>
    </>
  )
}

export default Search
