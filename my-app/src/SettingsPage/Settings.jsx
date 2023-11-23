import {
  Avatar,
  Box,
  Collapse,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import SideBar from "../Component2/Side_Navigation/SideBar";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AttachFileSharpIcon from "@mui/icons-material/AttachFileSharp";
import LayersIcon from "@mui/icons-material/Layers";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import AllInboxSharpIcon from "@mui/icons-material/AllInboxSharp";
import UnfoldMoreSharpIcon from "@mui/icons-material/UnfoldMoreSharp";
import CorCloud from "../Assets/Cor Cloud.png";
import { Link } from "react-router-dom";

function Settings() {
  const isMobileScreen = useMediaQuery("(min-width:600px)");

  const [open, setOpen] = React.useState(true);
  const [openlist2, setOpenlist2] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClicklist2 = () => {
    setOpenlist2(!openlist2);
  };

  const Employeelist = [
    {
      path: "/settings/appearance",
      icon: <ColorLensIcon fontSize="15px" />,
      title: "Appearance",
    },
    {
      path: "",
      icon: <NotificationsIcon fontSize="15px" />,
      title: "Notification",
    },
    {
      path: "",
      icon: <AttachFileSharpIcon fontSize="15px" />,
      title: "User Privileges",
    },
  ];

  const Organisationlist = [
    { icon: <LayersIcon fontSize="15px" />, title: "Organisation Settings" },
    { icon: <BusinessIcon fontSize="15px" />, title: "Company" },
    { icon: <PersonIcon fontSize="15px" />, title: "Designation" },
    { icon: <ArticleIcon fontSize="15px" />, title: "Document Types" },
    { icon: <AllInboxSharpIcon fontSize="15px" />, title: "Asset Types" },
  ];

  const drawer = (
    <div>
      <div>
        {isMobileScreen ? (
          <Typography
            variant="h6"
            component="div"
            fontSize={"medium"}
            color={"#6A4BFC"}
            fontWeight={700}
            sx={{
              marginLeft: "1rem",
              paddingTop: ".5rem",
            }}
          >
            LOYALTRI
          </Typography>
        ) : (
          <></>
        )}
        <List
          sx={isMobileScreen ? { marginTop: "1rem" } : { marginTop: "0" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton
            sx={{
              backgroundColor: "#e0e1dd",
              m: 1,
              borderRadius: "10px",
              ":hover": { backgroundColor: "#e0e1dd" },
              ":active": {
                backgroundColor: "#e0e1dd",
              },
            }}
          >
            <Avatar src={CorCloud}></Avatar>
            <ListItemText
              sx={{ marginLeft: ".5rem" }}
              primary="Cordova Cloud"
            />
            <UnfoldMoreSharpIcon fontSize="15px" />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemText sx={{ color: "grey" }} primary="Employee" />
            {open ? (
              <ExpandLess sx={{ color: "grey" }} />
            ) : (
              <ExpandMore sx={{ color: "grey" }} />
            )}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {Employeelist.map((data, index) => {
                return (
                  <Link style={{textDecoration:'none',color:'black'}}  to={data.path}>
                    <ListItemButton
                      key={index}
                      sx={{
                        ml: 1,
                        mr: 1,
                        borderRadius: "10px",
                        ":hover": {
                          backgroundColor: "#6A4BFC",
                          color: "#fff",
                          borderRadius: "10px",
                        },
                      }}
                    >
                      {data.icon}
                      <Typography fontSize={15}>{data.title}</Typography>
                    </ListItemButton>
                  </Link>
                );
              })}
            </List>
          </Collapse>

          <ListItemButton onClick={handleClicklist2}>
            <ListItemText sx={{ color: "grey" }} primary="Organisation" />
            {openlist2 ? (
              <ExpandLess sx={{ color: "grey" }} />
            ) : (
              <ExpandMore sx={{ color: "grey" }} />
            )}
          </ListItemButton>
          <Collapse in={openlist2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {Organisationlist.map((data, index) => {
                return (
                  <ListItemButton
                    key={index}
                    sx={{
                      ml: 1,
                      mr: 1,
                      borderRadius: "10px",
                      ":hover": {
                        backgroundColor: "#6A4BFC",
                        color: "#fff",
                        borderRadius: "10px",
                      },
                    }}
                  >
                    {data.icon}
                    <Typography fontSize={15}>{data.title}</Typography>
                  </ListItemButton>
                );
              })}
            </List>
          </Collapse>
        </List>
      </div>
    </div>
  );

  return (
    <Box>
      <SideBar />
      <Box>
        <Drawer
          variant="permanent"
          sx={
            isMobileScreen
              ? {
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    overflowX: "hidden",
                    marginLeft: "70px",
                    marginTop: "1rem",
                    borderRadius: "0px 5px",
                    borderTop: "1px",
                    width: "230px",
                  },
                }
              : {
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    overflowX: "hidden",
                    marginTop: "4rem",
                    width: "100%",
                  },
                }
          }
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Settings;
