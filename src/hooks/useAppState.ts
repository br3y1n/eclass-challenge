import { Theme, useMediaQuery } from "@mui/material";

const useAppState = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return { isMobile };
};

export { useAppState };
