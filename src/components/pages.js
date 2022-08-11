import React from "react";


const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const Projects = React.lazy(() => import("../pages/Projects"));
const Contact = React.lazy(() => import("../pages/Contact"));


export const pages = [
    {
      name: "Home",
      href: "/",
      component: <Home />
    },
  
    {
      name: "About",
      href: "#about",
      component: <About />

    },
    {
      name: "Projects",
      href: "#projects",
      component: <Projects />

    },
    {
      name: "Contact",
      href: "#contact",
      component: <Contact />

    },
  ];