import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
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
          fontFamily: "Playfair Display",
          my: 1
        }}
      >
        <span>B</span>
        <span>N</span>
      </Typography>
      <Divider />
      <List>
        {pages.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} component={Link}
                href={item.path}>
              <ListItemText primary={item.name} />
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
          keepMounted: true, // Better open performance on mobile.
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
