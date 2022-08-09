import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "@material-ui/core/Link";

import { pink } from "@mui/material/colors";

import DrawerAppBar from "./Drawer";

const pages = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "About",
    path: "#about",
  },
  {
    name: "Projects",
    path: "#projects",
  },
  {
    name: "Contact",
    path: "#contact",
  },
];

const ResponsiveAppBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: "#fff" }}>
      <Container maxWidth="xl" sx={{ mx: { xs: 3, sm: 5, md: 20 } }}>
        <Toolbar disableGutters>
          <Typography
            className="logo"
            component="a"
            href="/"
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: { xs: "none", sm: "column" },
              textDecoration: "none",
              color: pink["A200"],
              fontSize: { sm: "1.5rem", md: "2.5rem" },
              fontFamily: "Playfair Display",
            }}
          >
            <span>B</span>
            <span>N</span>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", sm: "none" },
              color: "black",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <DrawerAppBar
              pages={pages}
              handleDrawerToggle={handleDrawerToggle}
              mobileOpen={mobileOpen}
            />
          </Box>
          <Typography
            className="logo"
            component="a"
            href="/"
            sx={{
              display: { xs: "flex", sm: "none" },
              flexGrow: 1,
              flexDirection: { xs: "column", sm: "none" },
              textDecoration: "none",
              color: pink["A200"],
              fontSize: "1.5rem",
              fontFamily: "Playfair Display",
              my: 1,
            }}
          >
            <span>B</span>
            <span>N</span>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleDrawerToggle}
                component={Link}
                href={page.path}
                sx={{ m: 1, color: "black", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
