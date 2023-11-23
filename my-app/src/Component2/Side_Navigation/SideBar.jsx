import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ExploreIcon from "@mui/icons-material/Explore";
import BusinessIcon from "@mui/icons-material/Business";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import GroupIcon from "@mui/icons-material/Group";
import SpeedIcon from "@mui/icons-material/Speed";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import logo from "../../Assets/Logo2.png";
import { useMediaQuery } from "@mui/material";
import NavContent from "./NavContent.jsx";
import { Link } from "react-router-dom";

const drawerWidth = 70;

function SideBar() {
  const isnonMobileScreen = useMediaQuery("(min-width:992px)");
  // const isMobileScreen = useMediaQuery("(min-width:600px)");

  const toplist = [
    { path:"/home",title: "Discover", icon: <ExploreIcon fontSize="small" /> },
    { path:"",title: "Company", icon: <BusinessIcon fontSize="small" /> },
    { path:"",title: "Payroll", icon: <MonetizationOnIcon fontSize="small" /> },
    { path:"",title: "Time", icon: <AccessTimeFilledIcon fontSize="small" /> },
    { path:"",title: "Recruitment", icon: <GroupIcon fontSize="small" /> },
    { path:"",title: "Performance", icon: <SpeedIcon fontSize="small" /> },
  ];

  const bottomList = [
    {
      path: "/settings",
      title: "Settings",
      icon: <SettingsIcon fontSize="small" />,
    },
    { path: "/help", title: "Help", icon: <HelpIcon fontSize="small" /> },
  ];

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const drawer = (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div>
        <img
          src={logo}
          alt="logo"
          style={{ marginTop: "1rem", marginLeft: ".6rem" }}
        />
        <List
          sx={isnonMobileScreen ? { marginTop: "1rem" } : { marginTop: "0" }}
        >
          {toplist.map((data, index) => (
            <ListItem
              key={index}
              sx={{ display: "block", textAlign: "center" }}
              disablePadding
            >
              <ListItemIcon sx={{ display: "block" }}>
                <Link to={data.path}>
                  <IconButton
                    id="iconbutton"
                    sx={{
                      color: "white",
                      minWidth: "0",
                      border: ".1px solid",
                      borderRadius: "10px",
                    }}
                  >
                    {data.icon}
                  </IconButton>
                </Link>
              </ListItemIcon>
              <Typography
                sx={{ color: "white", fontSize: "10px", paddingTop: "1px" }}
              >
                {data.title}
              </Typography>
            </ListItem>
          ))}
        </List>
      </div>

      <div style={{ marginTop: "auto" }}>
        <List>
          {bottomList.map((data, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{ display: "block", textAlign: "center" }}
            >
            <Link to={data.path}>
                  <IconButton
                    id="iconbutton"
                    sx={{
                      color: "white",
                      minWidth: "0",
                      border: ".1px solid",
                      borderRadius: "10px",
                    }}
                  >
                    {data.icon}
                  </IconButton>
                </Link>
              <Typography
                sx={{ color: "white", fontSize: "10px", paddingTop: "1px" }}
              >
                {data.title}
              </Typography>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );


  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NavContent mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      {/* Navbar */}

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
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
              backgroundColor: "#6A4BFC",
              borderRadius: "30px 0px 0px 30px",
              overflowX: "hidden",
              overflowY: "hidden",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#6A4BFC",
              borderRadius: "30px 0px 0px 30px",
              overflowX: "hidden",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {/* <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Card />  
      </Box> */}
    </Box>
  );
}

export default SideBar;
