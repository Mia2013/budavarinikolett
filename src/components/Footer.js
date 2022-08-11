import * as React from "react";

import { Grid, Container, Box, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { amber } from "@mui/material/colors";

export default function FixedBottomNavigation() {
  return (
    <footer>
      <CssBaseline />
      <Box
        px={{ xs: 3, sm: 5 }}
        py={{ xs: 5, sm: 5 }}
        bgcolor={amber[500]}
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Box borderBottom={1} sx={{ mb: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Playfair Display SC",
                  }}
                >
                  Profile
                </Typography>
              </Box>
              <Box sx={{my: 2}}>
                <Typography
                  color="text.primary"
                  sx={{
                    textDecoration: "none",
                    fontFamily: "Playfair Display SC",
                  }}
                  target="_blank"
                  component="a"
                  variant="body1"
                  href="https://github.com/Mia2013"
                >
                  Github: Mia2013
                </Typography>
              </Box>
              <Box>
                <Typography
                  color="text.primary"
                  sx={{
                    textDecoration: "none",
                    fontFamily: "Playfair Display SC",
                  }}
                  target="_blank"
                  component="a"
                  variant="body1"
                  href="https://www.linkedin.com/in/budavarinikolett"
               className="footer-linkedin"
               >
                  Linked <span>in</span>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box borderBottom={1} sx={{ mb: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Playfair Display SC",
                  }}
                >
                  Contact
                </Typography>
              </Box>
              <Box sx={{my: 2}}>
                <Typography
                  color="text.primary"
                  sx={{
                    textDecoration: "none",
                    fontFamily: "Playfair Display SC",
                  }}
                  component="a"
                  variant="body1"
                  href="tel:+3620-408-4236"
                >
                  <LocalPhoneIcon sx={{ pt: 1 }} color="white" />
                  Phone: +36 20 408 4236
                </Typography>
              </Box>
              <Box>
                <Typography
                  color="text.primary"
                  sx={{
                    textDecoration: "none",
                    fontFamily: "Playfair Display SC",
                  }}
                  component="a"
                  variant="body1"
                  href="mailto: komlosnikolett@gmail.com"
                >
                  <EmailIcon sx={{ pt: 1.2 }} color="white" />
                  E-mail: komlosnikolett@gmail.com
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}
