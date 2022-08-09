import React, { useEffect, Suspense } from "react";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import "./App.scss";

import BackToTop from "./components/BackToTopButton";
import ResponsiveAppBar from "./components/Nav/Nav";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "./components/Loading";

import { pages } from "./components/pages"


function App() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 2000,
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
        <ResponsiveAppBar pages ={pages}/>
        <Suspense fallback={<Loading />}>
          <Toolbar id="back-to-top-anchor" />
          <Container  sx={{ my: 10 }}>
   
            {pages.map((item)=> (
             
                 <section id={item.path} key={item.href}>
                {item.component}
               </section>
            ))
}
          </Container>

          <BackToTop />
        </Suspense>
      </React.Fragment>
    </div>
  );
}

export default App;
