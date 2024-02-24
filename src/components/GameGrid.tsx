import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { loading, games, error } = useGames();

  if (loading)
    return (
      <Stack alignItems="center" justifyContent="center" height="400px">
        <CircularProgress />;
      </Stack>
    );

  if (error)
    return (
      <Typography variant="h6" color="red">
        {error}
      </Typography>
    );

  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        xs: "1fr",
        sm: "1fr 1fr",
        md: "1fr 1fr 1fr",
      }}
      gap={2}
    >
      {games.map((game) => (
        <Box key={game.id} bgcolor="green">
          {game.name}
        </Box>
      ))}
    </Box>
  );
};

export default GameGrid;
