import React from "react";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

export default function Support() {
  //   var marginsidersize = parseInt(sidersize) + 50;
  //   var newwidth = 50 + parseInt(sidersize);
  return (
    <Box
    //   className="content"
    //   sx={{
    //     left: marginsidersize,
    //     width: `calc(100% - ${newwidth}px)`,
    //     textAlign: "center",
    //   }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography
            className="mainContainerTitle"
            gutterBottom
            marginBottom={0}
          >
            {"Support"}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Card className="mainSupportCard">
            <CardContent className="contentCard">
              <Box className="supportCardContent">
                CloudHotel is a system built for management and control of
                remote devices / TV. {/* <br /> */}
                It’s a live website that will be constantly update to better
                serve its users' needs. <br /> <br />
                The current main features are:
                <br />
                <br />
                <ul>
                  <li>Launching and displaying dynamic content;</li>

                  <li>Emergency warning system;</li>

                  <li>Reporting; </li>

                  <li>Tracking device states;</li>
                  <li>Management of device apps.</li>
                </ul>
                <br />
                <Box
                  className="supportDetailsMainTitle"
                  sx={{
                    textDecoration: "underline #ed1a39",
                    textTransform: "uppercase",
                  }}
                >
                  POINTS OF CONTACT
                </Box>
                <br />
                <Card className="supportDetailsCard">
                  <Box className="supportDetailsTitle">Technical Support</Box>
                  <ul>
                    <li className="supportDetailsList">1300 290 201</li>

                    <li className="supportDetailsList">
                      support@enterprisewireless.com.au{" "}
                    </li>
                  </ul>
                </Card>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
