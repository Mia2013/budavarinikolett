import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { yellow } from "@mui/material/colors";

export default function Home() {
  return (
    <Grid container sx={{ my: 10 }}>
      <Grid item container xs={12} sm={6} sx={{ my: 5, textAlign: {xs: "center", sm: "left"} }} data-aos="fade-left">
        <Grid
          item
          xs={12}
          sx={{ display: "flex", alignItems: "flex-end", justifyContent: {xs: "center", sm: "flex-start" }, mb: {xs: 0, sm: 3} }}
        >
          <Typography
            variant="h3"
            color="white"
            sx={{ bgcolor: yellow[600], px: 3, py: 0.5, borderRadius: "6px" }}
    
          >
            Hello
          </Typography>

          <Typography variant="h5" sx={{ mx: 5, py: 1 }}>
            I'm
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h1"
            sx={{
              my: { xs: 3, sm: "auto" },
              alignItems: "flex-end",
              fontFamily: "Playfair Display SC",
              fontWeight: "bolder",
              fontSize: { xs: "4rem", sm: "6rem" },
            }}
          >
            Nikolett
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bolder",
              alignItems: "flex-end",
              fontSize: { xs: "3rem", sm: "3.75rem" },
            }}
            className="web-developer-title"
          >
            Web <span>Developer</span>
          </Typography>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "flex-end" },
          }}
        >
          <Typography
            component="img"
            sx={{
              width: { xs: "30%", md: "70%" },
              filter: "drop-shadow(10px 0px 8px rgba(0,0,0,.415))",
            }}
            src={`${process.env.PUBLIC_URL}/me.png`}
          ></Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
