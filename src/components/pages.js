import React from "react";


const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const Projects = React.lazy(() => import("../pages/Projects"));
const Contact = React.lazy(() => import("../pages/Contact"));


export const pages = [
    {
      name: "Home",
      to: "back-to-top-anchor",
      component: <Home />
    },
  
    {
      name: "About",
      to: "about",
      component: <About />

    },
    {
      name: "Projects",
      to: "projects",
      component: <Projects />

    },
    {
      name: "Contact",
      to: "contact",
      component: <Contact />

    },
  ];