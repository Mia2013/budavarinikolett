import React from "react";
import {
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Toolbar,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { lightGreen } from "@mui/material/colors";

import PageTitle from "../components/PageTitle";

export default function About() {
  const skills = [
    "HTML",
    "Css",
    "Sass",
    "Bootstrap",
    "Material UI",
    "Javascript",
    "React",
    "Git",
    "GitHub",
    "JEST",
    "JIRA",
    "firebase",
    "Mongo DB",
    "Express.js",
    "Node.js",
    "Docker",
  ];
  return (
    <Grid container sx={{ my: {xs: 3, md: 8}, mx: "auto" }}>
      <Toolbar id="about" />

      <Grid item xs={12}>
        <PageTitle title="About" />
      </Grid>
      <Grid item xs={12} data-aos="fade-up">
        <Typography variant="body1" sx={{ lineHeight: "2.5rem", mb: 3 }}>
          My name's Nikolett. I finished a JavaScript heavy bootcamp course with
          Green Fox in 2022, and learned to use modern web development
          technologies, responsive design. I am interested in both Frontend and
          Backend development. I find writing codes very exciting, and I love to
          create beautiful and performant products with delightful user
          experiences. I can use my creativity during my work is also very
          important for me. I'm highly motivated, very passionate about
          programming. I'm looking for a job where I can continue to learn and
          build my career.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Playfair Display SC",
            mt: 5,
            mb: 3,
          }}
        >
          Skills
        </Typography>
      </Grid>

      {skills.map((item) => (
        <Grid item xs={6} sm={3} key={item}>
          <ListItem sx={{ my: 1, textAlign: "center" }}>
            <ListItemIcon sx={{ minWidth: "35px", textAlign: "center" }}>
              <CheckIcon sx={{ color: lightGreen[500] }} />
            </ListItemIcon>
            <ListItemText
              data-aos="fade-up"
              primary={item}
              sx={{ textTransform: "uppercase", fontWeight: "bolder" }}
            />
          </ListItem>
        </Grid>
      ))}
    </Grid>
  );
}
