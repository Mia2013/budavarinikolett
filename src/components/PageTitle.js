import {
    Typography,

  } from "@mui/material";

export default function PageTitle({title}){
    return(
        <Typography
        variant="h1"
        sx={{
         mb: 5,
         fontFamily: "Mrs Saint Delafield, cursive",
         textAlign: "center",
         height: "160px"
        }}
        className="title"
      >
        {title}
      </Typography>
    )
}