import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/imageUrl";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card sx={{ borderRadius: "15px", overflow: "hidden" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          src={getCroppedImageUrl(game.background_image)}
          height="200px"
          alt={game.name}
        />
      </CardActionArea>
      <CardContent>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </Stack>
        <Typography variant="h3" fontSize={20} fontWeight="600">
          {game.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GameCard;
