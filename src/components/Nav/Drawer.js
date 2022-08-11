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
import Link from "@material-ui/core/Link";
import { pink } from "@mui/material/colors";

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
          textDecoration: "none",
          color: pink["A200"],
          fontSize: "1.5rem",
          fontFamily: "Playfair Display SC",
          my: 1,
        }}
      >
        <span>B</span>
        <span>N</span>
      </Typography>
      <Divider />
      <List>
        {pages.map((page) => (
          <ListItem key={`${page.name}drawer`} disablePadding>
            <ListItemButton>
              <Button
                onClick={handleDrawerToggle}
                sx={{
                  my: 1,
                  mx: "auto",
                  color: "black",
                  display: "block",
                  fontFamily: "Playfair Display SC",
                  fontSize: "1rem",
                }}
                component={Link}
                href={page.href}
              >
                {page.name}
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
