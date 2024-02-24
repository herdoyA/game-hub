import { Box, Hidden } from "@mui/material";
import Nav from "./components/Nav";
import GameGrid from "./components/GameGrid";

const App = () => {
  return (
    <Box
      display="grid"
      gridTemplateAreas={{
        xs: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
      }}
      gridTemplateColumns={{
        xs: "1fr",
        md: "250px 1fr",
      }}
    >
      <Box gridArea="nav">
        <Nav />
      </Box>
      <Hidden mdDown children={<Box gridArea="aside">aside</Box>} />
      <Box gridArea="main">
        <GameGrid />
      </Box>
    </Box>
  );
};

export default App;
