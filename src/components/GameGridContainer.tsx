import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

const GameGridContainer = ({ children }: PropsWithChildren) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        xs: "1fr",
        sm: "1fr 1fr",
        md: "1fr 1fr",
        lg: "1fr 1fr 1fr",
      }}
      gap={3}
    >
      {children}
    </Box>
  );
};

export default GameGridContainer;
