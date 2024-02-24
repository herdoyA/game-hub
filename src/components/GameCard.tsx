import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card sx={{ borderRadius: "15px", overflow: "hidden" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          src={game.background_image}
          height="220px"
          alt={game.name}
        />
      </CardActionArea>
      <CardContent>
        <Typography variant="h3" fontSize={20} fontWeight="600">
          {game.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GameCard;
