import { Grid, Typography, Box } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { pink } from "@mui/material/colors";
import PageTitle from "../components/PageTitle";

export default function Contact() {
  return (
    <Grid container sx={{ my: 8, mx: "auto" }}>
      <Grid item xs={12}>
        <PageTitle title="Contact" />
      </Grid>

      <Grid item xs={12} md={4}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 4
          }}
          data-aos="flip-left"
        >
          <LocalPhoneIcon sx={{ color: pink["A200"], fontSize: "3rem" }} />
          <Typography
            color="text.primary"
            sx={{
              textDecoration: "none",
              fontFamily: "Playfair Display SC",
              color: pink["A200"],
              my: 2,
            }}
            component="a"
            variant="h6"
            href="tel:+3620-408-4236"
          >
            Phone:
          </Typography>
          <Typography
            color="text.primary"
            sx={{
              textDecoration: "none",
              fontFamily: "Playfair Display SC",

            }}
            component="a"
            variant="h6"
            href="tel:+3620-408-4236"
          >
            +36 20 408 4236
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 4

          }}
          data-aos="flip-left"
        >
          <EmailIcon sx={{ color: pink["A200"], fontSize: "3rem" }} />
          <Typography
            color="text.primary"
            sx={{
              textDecoration: "none",

              fontFamily: "Playfair Display SC",
              color: pink["A200"],
              my: 2,
            }}
            component="a"
            variant="h6"
            href="mailto:                 komlosnikolett@gmail.com
                "
          >
            E-mail:
          </Typography>
          <Typography
            color="text.primary"
            sx={{
              textDecoration: "none",
              fontFamily: "Playfair Display SC",

            }}
            component="a"
            variant="h6"
            href="mailto: komlosnikolett@gmail.com"
          >
            komlosnikolett@gmail.com
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 4

          }}
          data-aos="flip-left"
        >
          <FmdGoodIcon sx={{ color: pink["A200"], fontSize: "3rem" }} />

          <Typography
            variant="h6"
            sx={{
              fontFamily: "Playfair Display SC",
              color: pink["A200"],
              my: 2,
            }}
          >
            Location
          </Typography>
          <Typography variant="h6"  sx={{
              fontFamily: "Playfair Display SC",}}>Budapest, Hungary</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
