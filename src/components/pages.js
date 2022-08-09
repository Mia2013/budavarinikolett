import React from "react";


const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const Projects = React.lazy(() => import("../pages/Projects"));
const Contact = React.lazy(() => import("../pages/Contact"));


export const pages = [
    {
      name: "Home",
      path: "/",
      href: "/",
      component: <Home />
    },
  
    {
      name: "About",
      path: "about",
      href: "#about",
      component: <About />

    },
    {
      name: "Projects",
      path: "projects",
      href: "#projects",
      component: <Projects />

    },
    {
      name: "Contact",
      path: "contact",
      href: "#contact",
      component: <Contact />

    },
  ];