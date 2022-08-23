import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";
import ScrollToColor from "./ScrollToColor";
import DrawerAppBar from "./Drawer";

const ResponsiveAppBar = ({ pages }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ScrollToColor>
      <AppBar position="fixed" width="100%" elevation={0}>
        <Container>
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography
              className="logo"
              component="a"
              href="/"
              sx={{
                display: { xs: "none", sm: "flex" },
                flexDirection: { xs: "none", sm: "column" },
              }}
            >
              <Typography
                component="img"
                className="logo"
                sx={{
                  mt: 1,
                  width: { sm: "100px", md: "160px" },
                }}
                src={`${process.env.PUBLIC_URL}/logo.png`}
              ></Typography>
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", sm: "none" },
                color: "black",
                my: 1,
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
            {/* <Typography
              className="logo"
              component="a"
              href="/"
              sx={{
                display: { xs: "flex", sm: "none" },
                flexGrow: 1,
                flexDirection: { xs: "column", sm: "none" },
                my: 1,
                alignItems: "center",
              }}
            >
              <Typography
                component="img"
                className="logo"
                sx={{
                  width: "30%",
                }}
                src={`${process.env.PUBLIC_URL}/logo.png`}
              ></Typography>
            </Typography> */}

            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                justifyContent: "center",
              }}
            >
              {pages.map((page) => (
                <Link
                  activeClass="active"
                  to={page.to}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  <Button
                    key={page.name}
                    onClick={handleDrawerToggle}
                    sx={{
                      m: 1,
                      color: "black",
                      display: "block",
                      fontFamily: "Playfair Display SC",
                      fontSize: "1.1rem",
                    }}
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ScrollToColor>
  );
};
export default ResponsiveAppBar;
