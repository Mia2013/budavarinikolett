import React, { useEffect, Suspense, useRef } from "react";
import {Toolbar, Box, CssBaseline, Container} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.scss";

import BackToTop from "./components/BackToTopButton";
import ResponsiveAppBar from "./components/Nav/Nav";
import Loading from "./components/Loading";
import FixedBottomNavigation from "./components/Footer";
import { pages } from "./components/pages";

function App() {



  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1000,
      useClassNames: false,
      throttleDelay: 99,
      once: true,
      anchorPlacement: "top-bottom",
    });
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <ResponsiveAppBar pages={pages} />
        <Suspense fallback={<Loading />}>
          <Toolbar id="back-to-top-anchor" />
          <Container sx={{ my: 10, width: { lg: "80%" } }}>
            {pages.map((item) => (
              <Box key={item.name}>{item.component} </Box>
            ))}
          </Container>

          <BackToTop />
        </Suspense>
        <FixedBottomNavigation />
      </React.Fragment>
    </div>
  );
}

export default App;
