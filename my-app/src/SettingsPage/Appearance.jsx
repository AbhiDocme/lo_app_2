import {
  Autocomplete,
  Box,
  Divider,
  Grid,
  InputAdornment,
  Link,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Settings from "./Settings";
import SideBar from "../Component2/Side_Navigation/SideBar";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Appearance() {
  const isMobileScreen = useMediaQuery("(min-width:600px)");

  const Languages = ["English", "Malayalam", "Hindi", "Tamil"];

  return (
    <Box>
      {isMobileScreen ? <Settings /> : <SideBar />}
      <Box
        sx={
          isMobileScreen
            ? { marginLeft: "310px", mr: 1, mb: 4, marginTop: "5rem" }
            : { ml: 1, mr: 1, marginTop: "5rem", mb: 2 }
        }
      >
        <Typography variant="h5" fontWeight={600}>
          Appearance
        </Typography>
        <Typography fontSize={12}>
          Customizing your workspace, make it more enjoyable and comfortable to
          work! <Link>Create custom theme</Link>
        </Typography>
        <Divider sx={{ mt: 2 }} />
        <br />
        <Box>
          <Grid container display={{ xs: "block", lg: "flex" }} spacing={2}>
            <Grid item xs>
              <Typography fontSize={15} fontWeight={600}>
                Interface theme
              </Typography>
              <Typography fontSize={12}>
                Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc .
              </Typography>
            </Grid>
            <Grid item xs>
              <Box sx={{ border: "1px solid black", height: "150px" }}></Box>
            </Grid>
            <Grid item xs>
              <Box sx={{ border: "1px solid black", height: "150px" }}></Box>
            </Grid>
            <Grid item xs>
              <Box sx={{ border: "1px solid black", height: "150px" }}></Box>
            </Grid>
          </Grid>
        </Box>

        <br />
        <Divider sx={{ mt: 2 }} />
        <br />
        <Divider />
        <br />

        <Box>
          <Grid container display={{ xs: "block", lg: "flex" }} spacing={2}>
            <Grid item>
              <Typography fontSize={15} fontWeight={600}>
                Sidebar feature
              </Typography>
              <Typography fontSize={12}>
                Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc .
              </Typography>
            </Grid>
            <Grid item xs>
              <Autocomplete
                size="small"
                id="sidebar feature"
                options={Languages}
                sx={{ width: 300, mt: 2 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Recent used apps"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FiberManualRecordIcon
                            fontSize="15"
                            sx={{ color: "green" }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
              <br />
            </Grid>
          </Grid>
        </Box>

        <br />
        <Divider sx={{ mt: 2 }} />
        <br />
        <Divider />
        <br />

        <Box>
          <Grid container display={{ xs: "block", lg: "flex" }} spacing={2}>
            <Grid item>
              <Typography fontSize={15} fontWeight={600}>
                Language
              </Typography>
              <Typography fontSize={12}>
                Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc .
              </Typography>
            </Grid>
            <Grid item xs>
              <Autocomplete
                size="small"
                disablePortal
                id="combo-box-demo"
                options={Languages}
                defaultValue={Languages[0]}
                sx={{ width: 300, mt: 2 }}
                renderInput={(params) => <TextField {...params} />}
              />
              <br />
              <Box display={"flex"}>
                <Switch defaultChecked />
                <Typography fontSize={15} fontWeight={600}>
                  Show Arabic in table fields
                  <Typography fontSize={12}>
                    Gorem ipsum dolor sit amet,
                    <br /> consectetur adipiscing elit.
                  </Typography>
                </Typography>
              </Box>
              <br />
              <Box display={"flex"}>
                <Switch defaultChecked />
                <Typography fontSize={15} fontWeight={600}>
                  Show Arabic in table fields
                  <Typography fontSize={12}>
                    Gorem ipsum dolor sit amet,
                    <br /> consectetur adipiscing elit.
                  </Typography>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <br />
        <Divider sx={{ mt: 2 }} />
        <br />
        <Divider />
        <br />

        <Box>
          <Grid container display={{ xs: "block", lg: "flex" }} spacing={2}>
            <Grid item>
              <Typography fontSize={15} fontWeight={600}>
                Search / Command Bar
              </Typography>
              <Typography fontSize={12}>
                Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc .
              </Typography>
            </Grid>
            <Grid item xs>
              <Autocomplete
                size="small"
                disablePortal
                id="combo-box-demo"
                options={Languages}
                defaultValue={Languages[0]}
                sx={{ width: 300, mt: 2 }}
                renderInput={(params) => <TextField {...params} />}
              />
              <br />
              <Box display={"flex"}>
                <Switch defaultChecked />
                <Typography fontSize={15} fontWeight={600}>
                  Show Suggestion
                  <Typography fontSize={12}>
                    Gorem ipsum dolor sit amet,
                    <br /> consectetur adipiscing elit.
                  </Typography>
                </Typography>
              </Box>
              <br />
              <Box display={"flex"}>
                <Switch defaultChecked />
                <Typography fontSize={15} fontWeight={600}>
                  Disable Voice Command
                  <Typography fontSize={12}>
                    Gorem ipsum dolor sit amet,
                    <br /> consectetur adipiscing elit.
                  </Typography>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Appearance;
