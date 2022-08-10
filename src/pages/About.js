import {
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { lightGreen } from "@mui/material/colors";

import Title from "../components/Title";

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
    "MongoDB",
    "Express.js",
    "Node.js",
  ];
  return (
    <Grid container sx={{ my: 5, width: "85%", mx: "auto" }}>
      <Grid item xs={12}>
        <Title title="About"/>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">
          {" "}
          I finished a JavaScript heavy bootcamp with Green Fox and learned to
          use modern web development technologies. I'm highly motivated, very
          passionate about programming and seeking a position where I can
          continue to learn and build my career.
        </Typography>

        <Typography variant="body1">
          I find writing codes very exciting. I enjoy it when I have a complex
          problem and I need to figure out a strategy to solve it with logical
          thinking. I like the sense of accomplishment after finishing a task in
          time or fixing a bug or just seeing that all of the tests are passing.
          Programming offers great career opportunities with various paths and
          continuous learning. Knowing that I am progressing and I can use my
          creativity during my work is also very important for me.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Playfair Display SC",

            my: 3,
          }}
        >
          Skills
        </Typography>
      </Grid>

      {skills.map((item) => (
        <Grid item xs={6} sm={3} key={item}>
          <ListItem data-aos="fade-up" sx={{ my: 1 }}>
            <ListItemIcon >
              <CheckIcon sx={{color: lightGreen[500] }} />
            </ListItemIcon>
            <ListItemText primary={item} sx={{ textTransform: "uppercase" }} />
          </ListItem>
        </Grid>
      ))}
    </Grid>
  );
}
