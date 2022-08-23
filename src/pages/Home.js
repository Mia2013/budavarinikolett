import { Box, Typography, Grid } from "@mui/material";

import { yellow } from "@mui/material/colors";

export default function Home() {
  return (
    <Grid container sx={{  my: {xs: 3, md: 10, xl: 11} }}>
    
      <Grid
        item
        container
        xs={12}
        md={6}
        sx={{ textAlign: { xs: "center", md: "left" } }}
        data-aos="fade-left"
      >
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: { xs: "center", md: "flex-start" },
            mb: 0,
          }}
        >
          <Typography
            variant="h3"
            color="white"
            sx={{ bgcolor: yellow[600], px: 3, py: 0.5, borderRadius: "6px" }}
            className="home"
          >
            Hello
          </Typography>

          <Typography variant="h5" sx={{ mx: 5, py: 1 }}>
            I'm
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            my: { xs: 3, md: "auto" },
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },

            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              alignItems: "flex-end",
              fontFamily: "Playfair Display SC",
              fontWeight: "bolder",
              fontSize: { xs: "4rem", md: "6rem" },
            }}
          >
            Nikolett
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            my: { xs: 3, md: 0 },
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },

            alignItems: "flex-start",
          }}
        >
          {" "}
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bolder",
              fontSize: { xs: "3rem", md: "3.75rem" },
            }}
            className="web-developer-title"
          >
            Web <span>Developer</span>
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            borderBottom: {xs: "3px solid #ff4081", md: "none"},
            width: {xs: "80%", md: "100%"},
            mx: "auto"
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
