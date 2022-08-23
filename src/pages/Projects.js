import { Toolbar, Grid, Typography } from "@mui/material";
import PageTitle from "../components/PageTitle";
import QuiltedImageList from "../components/QuiltedImageList";
import { szilviSutivilagaImages } from "../components/projectImagesList";

export default function Projects() {
  return (
    <Grid container sx={{  my: {xs: 3, md: 8}, mx: "auto" }}>
            <Toolbar id="projects" />

      <Grid item xs={12}>
        <PageTitle title="Projects" />
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "center", mb: 4 }} data-aos="fade-up">
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
    </Grid>
  );
}
