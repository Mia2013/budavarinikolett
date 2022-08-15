import {
    Typography,

  } from "@mui/material";

export default function PageTitle({title, id}){
    return(
        <Typography
        variant="h1"
        sx={{
         my: 5,
         fontFamily: "Mrs Saint Delafield, cursive",
         textAlign: "center",
         height: "160px",
       
        }}
        className="title"
        id={id}
      >
        {title}
      </Typography>
    )
}