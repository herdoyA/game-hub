import { Box, Hidden } from "@mui/material";
import Nav from "./components/Nav";

const App = () => {
  return (
    <Box
      display="grid"
      gridTemplateAreas={{
        xs: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
      }}
    >
      <Box gridArea="nav">
        <Nav />
      </Box>
      <Hidden mdDown children={<Box gridArea="aside">aside</Box>} />
      <Box gridArea="main">main</Box>
    </Box>
  );
};

export default App;
