import * as React from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { Link } from "react-scroll";

const drawerWidth = "80%";

function DrawerAppBar(props) {
  const { window, pages, handleDrawerToggle, mobileOpen } = props;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        className="logo"
        component="a"
        href="/"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          my: 1,
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
      </Typography>
      <Divider />
      <List>
        {pages.map((page) => (
          <ListItem key={`${page.name}drawer`} disablePadding>
            <ListItemButton>
              <Button
                sx={{
                  my: 1,
                  mx: "auto",
                  color: "black",
                  display: "block",
                  fontFamily: "Playfair Display SC",
                  fontSize: "1rem",
                }}
              >
                <Link
                  onClick={handleDrawerToggle}
                  activeClass="active"
                  to={page.to}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  {page.name}
                </Link>
              </Button>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box component="nav">
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default DrawerAppBar;
