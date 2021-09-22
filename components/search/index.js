import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import OutlinedInput from "@mui/material/OutlinedInput"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"

const Search = () => {
  return (
    <>
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="search-term">Search</InputLabel>
        <OutlinedInput
          id="search-term"
          type="text"
          // value={values.password}
          // onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="search movies"
                onClick={() => console.log("clicked")}
                // onMouseDown={handleMouseDownPassword}
                edge="end"
              >
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
