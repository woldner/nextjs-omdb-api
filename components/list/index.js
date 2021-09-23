import PropTypes from "prop-types"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

const List = ({ items }) => {
  return (
    <>
      <Grid container spacing={2}>
        {items.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia component="img" height="140" image={item.Poster} />
              <CardContent sx={{ minHeight: "160px" }}>
                <Typography gutterBottom variant="h5" component="div">
                  {item.Title} ({item.Year})
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

List.propTypes = {
  items: PropTypes.array,
}

export default List
