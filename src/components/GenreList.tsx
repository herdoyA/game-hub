import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import useGenres from "../hooks/useGenres";
import { Typography } from "@mui/material";

const GenreList = () => {
  const { genres, error } = useGenres();

  if (error)
    return (
      <Typography variant="subtitle1" color="red">
        {error}
      </Typography>
    );

  return (
    <List dense>
      {genres.map((genre) => (
        <ListItem key={genre.id} sx={{ padding: "5px 0px", cursor: "pointer" }}>
          <ListItemAvatar>
            <Avatar src={genre.image_background} variant="rounded" sizes="" />
          </ListItemAvatar>
          <ListItemText primary={genre.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
