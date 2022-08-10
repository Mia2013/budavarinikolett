import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { yellow } from "@mui/material/colors";

export default function Home() {
  return (
    <Grid container sx={{mt: 15}}>
      <Grid item container xs={12} sm={6} >
        <Grid item xs={12} sx={{display: "flex", alignItems: "flex-end"}}>
          <Typography
            variant="h3"
        color="white"
            sx={{ bgcolor: yellow[600], px: 3, py: 0.5, borderRadius: "6px"}}
          >
            Hello
          </Typography>
      
          <Typography variant="h5" sx={{mx: 5, py: 1}}>I'm</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h1"   sx={{
            
              fontFamily: "Playfair Display SC",
              
            }}>Nikolett</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2" sx={{fontWeight: "bolder"}} >Web <span>Developer</span></Typography>
        </Grid>
        <Grid item xs={6}>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box sx={{display: "flex", justifyContent: {xs: "center", sm: "flex-end"}}}>
      <Typography
          component="img"
          sx={{
            width: {xs: "50%", md: "70%"},
          }}
          src={`${process.env.PUBLIC_URL}/me.png`}
        ></Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
