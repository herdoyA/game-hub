import { Box, Typography } from "@mui/material";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

interface Games {
  id: string;
  name: string;
}

interface ResponseData {
  count: number;
  results: Games[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<ResponseData>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);

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
