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
            : { pl: 1, pr: 1, marginTop: "5rem", mb: 2 }
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
          <Grid container display={{ xs: "block", lg: "flex" }} sx={{alignItems:{xs:'center'},justifyContent:{xs:'center'}}} spacing={2}>
            <Grid item xs>
              <Typography fontSize={15} fontWeight={600}>
                Interface theme
              </Typography>
              <Typography fontSize={12}>
                Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc .
              </Typography>
            </Grid>
            <Grid item xs>
              <Box
                sx={{
                  border: "1px solid black",
                  height: "150px",
                  width: "250px",
                }}
              ></Box>
            </Grid>
            <Grid item xs>
              <Box
                sx={{
                  border: "1px solid black",
                  height: "150px",
                  width: "250px",
                }}
              ></Box>
            </Grid>
            <Grid item xs>
              <Box
                sx={{
                  border: "1px solid black",
                  height: "150px",
                  width: "250px",
                }}
              ></Box>
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
                id="sidebar_feature"
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
                id="language_select"
                options={Languages}
                defaultValue={Languages[0]}
                sx={{ width: 300, mt: 2 }}
                renderInput={(params) => <TextField {...params} />}
              />
              <br />
              <Box display={"flex"}>
                <Switch id="arabic_tablefeild" defaultChecked />
                <Box fontSize={15} fontWeight={600}>
                  Show Arabic in table fields
                  <Typography fontSize={12}>
                    Gorem ipsum dolor sit amet,
                    <br /> consectetur adipiscing elit.
                  </Typography>
                </Box>
              </Box>
              <br />
              <Box display={"flex"}>
                <Switch id="Enable" defaultChecked />
                <Box fontSize={15} fontWeight={600}>
                  Enable
                  <Typography fontSize={12}>
                    Gorem ipsum dolor sit amet,
                    <br /> consectetur adipiscing elit.
                  </Typography>
                </Box>
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
              <Box display={"flex"}>
                <Switch id="Show_Suggestion" defaultChecked />
                <Box fontSize={15} fontWeight={600}>
                  Show Suggestion
                  <Typography fontSize={12}>
                    Gorem ipsum dolor sit amet,
                    <br /> consectetur adipiscing elit.
                  </Typography>
                </Box>
              </Box>
              <br />
              <Box display={"flex"}>
                <Switch id="Voice_command" defaultChecked />
                <Box fontSize={15} fontWeight={600}>
                  Disable Voice Command
                  <Typography fontSize={12}>
                    Gorem ipsum dolor sit amet,
                    <br /> consectetur adipiscing elit.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Appearance;
