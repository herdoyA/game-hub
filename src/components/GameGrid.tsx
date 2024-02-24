import { Typography } from "@mui/material";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameGridContainer from "./GameGridContainer";
import GamesLoading from "./GamesLoading";

const GameGrid = () => {
  const { loading, games, error } = useGames();

  if (loading) return <GamesLoading />;

  if (error)
    return (
      <Typography variant="h6" color="red">
        {error}
      </Typography>
    );

  return (
    <GameGridContainer>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </GameGridContainer>
  );
};

export default GameGrid;
