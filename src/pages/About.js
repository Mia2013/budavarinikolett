import Box from "@mui/material/Box";


export default function About(){
    return(
        <>About
                 <Box sx={{ my: 10 }}>
              {[...new Array(15)]
                .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                )
                .join("\n")}
            </Box>
        </>
    )
}