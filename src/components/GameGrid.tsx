import { Box } from "@mui/material";

const GameGrid = () => {
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
      <Box bgcolor="green">card</Box>
      <Box bgcolor="green">card</Box>
      <Box bgcolor="green">card</Box>
      <Box bgcolor="green">card</Box>
      <Box bgcolor="green">card</Box>
      <Box bgcolor="green">card</Box>
      <Box bgcolor="green">card</Box>
    </Box>
  );
};

export default GameGrid;
