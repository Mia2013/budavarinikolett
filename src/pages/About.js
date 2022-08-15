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
    <Grid container sx={{ my: 8, mx: "auto" }}>
      <Grid item xs={12}>
        <PageTitle title="About" />
      </Grid>
      <Grid item xs={12} data-aos="fade-up">
        <Typography variant="body1" sx={{ lineHeight: "2.5rem", mb: 3 }}>
          {/* {" "}
          I finished a JavaScript heavy bootcamp with Green Fox and learned to
          use modern web development technologies, responsive design. I'm highly motivated, very
          passionate about programming and seeking a position where I can
          continue to learn and build my career. */}
          My name's Nikolett. I finished a JavaScript heavy bootcamp with Green Fox in 2022, and learned to
          use modern web development technologies, responsive design.  My interests are in
          Frontend and Backend development. I love to create beautiful and performant
          products with delightful user experiences. I'm highly motivated, very
          passionate about programming. I'm looking for a job where I can
          continue to learn and build my career.
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: "2.5rem" }}>
          {/* I find writing codes very exciting. I enjoy it when I have a complex
          problem and I need to figure out a strategy to solve it with logical
          thinking. I like the sense of accomplishment after finishing a task in
          time or fixing a bug or just seeing that all of the tests are passing.
          Programming offers great career opportunities with various paths and
          continuous learning. Knowing that I am progressing and I can use my
          creativity during my work is also very important for me. */}
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

      <Toolbar id="projects" />
    </Grid>
  );
}
