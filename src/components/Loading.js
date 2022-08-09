import { Typography, Grid } from "@mui/material";
import PacmanLoader from "react-spinners/PacmanLoader";
import { pink } from "@mui/material/colors";

export default function Loading() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item >
        <Typography variant="h3" color={pink["A200"]}>
          Loading...
          <PacmanLoader variant="h2" color="rgba(255, 68, 132, 1)" size={40} />
        </Typography>
       </Grid>
    </Grid>
  );
}
