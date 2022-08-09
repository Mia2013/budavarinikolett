import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import BackToTop from "./components/BackToTop";
import ResponsiveAppBar from "./components/Nav"

import "./App.scss";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <ResponsiveAppBar />
        <Toolbar id="back-to-top-anchor" />
        <Container>
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
        </Container>

        <BackToTop />
      </React.Fragment>
    </div>
  );
}

export default App;
