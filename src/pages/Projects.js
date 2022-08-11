import { Toolbar, Grid, Typography } from "@mui/material";
import PageTitle from "../components/PageTitle";
import QuiltedImageList from "../components/QuiltedImageList";
import { szilviSutivilagaImages } from "../components/projectImagesList";

export default function Projects() {
  return (
    <Grid container sx={{ my: 8, mx: "auto" }}>
      <Grid item xs={12}>
        <PageTitle title="Projects" />
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          color="text.primary"
          sx={{
            textDecoration: "none",
            fontFamily: "Playfair Display SC",
          }}
          target="_blank"
          component="a"
          variant="h5"
          href="https://www.szilvisutivilaga.hu"
        >
          www.szilvisutivilaga.hu
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <QuiltedImageList images={szilviSutivilagaImages} />
      </Grid>
      <Toolbar id="contact" />
    </Grid>
  );
}
