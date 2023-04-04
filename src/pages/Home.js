import React, { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { yellow } from "@mui/material/colors";
import TypeIt from "typeit-react";

export default function Home() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const initalHeight = windowHeight > 600 ? windowHeight : 600;

  useEffect(() => {
    function handleResize() {
      setWindowHeight(window.innerHeight);
    }

    function delayedResize() {
      setTimeout(handleResize, 2500);
    }

    window.addEventListener("resize", delayedResize);

    return () => {
      window.removeEventListener("resize", delayedResize);
    };
  }, []);

  return (
    <Grid
      container
      sx={{
        height: initalHeight,
        m: 0,
        p: 0,
        display: "flex",
        justifyContent: { xs: "center", md: "space-between" },
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: {xs: "center", md: "space-evenly"},
          alignItems: {xs: "center", md: "flex-start"},
          alignContent: "stretch",
          gap: {xs: 8, md: 0}
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: {xs: "center", md: "flex-start"},
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            color="white"
            sx={{
              bgcolor: yellow[600],
              px: 3,
              py: 0.5,
              borderRadius: "6px",
            }}
            className="home"
          >
            Hello
          </Typography>

          <Typography variant="h5" sx={{ mx: 5, py: 1 }}>
            I'm
          </Typography>
        </Box>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Playfair Display SC",
            fontWeight: "bolder",
            fontSize: { xs: "4rem", md: "6rem" },
          }}
        >
          <TypeIt
            options={{
              speed: 250,
              afterComplete: function (instance) {
                instance.destroy();
              },
            }}
          >
            Nikolett
          </TypeIt>
        </Typography>

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
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: { xs: "none", md: "flex" },

          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Typography
          component="img"
          sx={{
            filter: "drop-shadow(10px 0px 8px rgba(0,0,0,.415))",
            height: "90%",
          }}
          src={`${process.env.PUBLIC_URL}/me.png`}
        ></Typography>
      </Grid>
    </Grid>
  );
}
