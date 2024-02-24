import { Skeleton, Stack } from "@mui/material";

const GenreListLoading = () => {
  return (
    <Stack>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <Stack direction="row" alignItems="center" key={i} gap={2}>
          <Skeleton height={65} width={45} />
          <Skeleton width={70} />
        </Stack>
      ))}
    </Stack>
  );
};

export default GenreListLoading;
