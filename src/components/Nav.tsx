import { Box, Stack } from "@mui/material";
import logo from "../assets/logo.webp";

const Nav = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      py={2}
    >
      <Box component="img" src={logo} width={60} />
    </Stack>
  );
};

export default Nav;
