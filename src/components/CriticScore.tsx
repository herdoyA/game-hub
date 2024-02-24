import { Chip } from "@mui/material";

interface Porps {
  score: number;
}
const CriticScore = ({ score }: Porps) => {
  const color = score > 75 ? "success" : score > 60 ? "warning" : "default";
  return (
    <Chip
      label={`+ ${score}`}
      color={color}
      variant="outlined"
      sx={{ borderRadius: "5px", fontWeight: "600" }}
      size="small"
    />
  );
};

export default CriticScore;
