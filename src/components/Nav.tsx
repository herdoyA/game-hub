import { Box, Stack } from "@mui/material";
import logo from "../assets/logo.webp";
import ToggleTheme from "./ToggleTheme";

const Nav = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      py={3}
    >
      <Box component="img" src={logo} width={60} />
      <ToggleTheme />
    </Stack>
  );
};

export default Nav;
