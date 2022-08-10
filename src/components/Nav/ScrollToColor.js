import React from "react";
import { useScrollTrigger } from "@material-ui/core";

const ScrollHandler = props => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined
  });

  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? "#fff" : "transparent",
      boxShadow: trigger ? "0 4px 4px rgba(0, 0, 0, 0.4)" : "none" ,

    }
  });
};

const ScrollToColor = props => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default ScrollToColor;

