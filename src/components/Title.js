import {
    Typography,

  } from "@mui/material";

export default function Title({title}){
    return(
        <Typography
        variant="h1"
        sx={{
         mb: 5,
         fontFamily: "Mrs Saint Delafield, cursive",
         textAlign: "center"
        }}
        className="title"
      >
        {title}
      </Typography>
    )
}