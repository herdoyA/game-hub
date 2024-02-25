import { Card, CardContent, Skeleton, Stack } from "@mui/material";
import GameGridContainer from "./GameGridContainer";

const GamesLoading = () => {
  return (
    <GameGridContainer>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Card key={i} sx={{ borderRadius: "15px", overflow: "hidden" }}>
          <Skeleton variant="rectangular" height={200} />
          <CardContent>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Skeleton height={28} width="70%" />
              <Skeleton height={28} width="40px" />
            </Stack>
            <Skeleton height={38} width="100%" />
          </CardContent>
        </Card>
      ))}
    </GameGridContainer>
  );
};

export default GamesLoading;
