import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";
import RepeatIcon from "@mui/icons-material/Repeat";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import Grid from "./Grid";

function PmsDesc() {
  return (
    <div className="pms_container">
      <div className="inner_container mx-auto px-[20px] max-w-[1800px]">
        <div>
          <p className="text-center font-light mb-3">
            Get best out of the wide range with best services
          </p>
          <h1 className="text-[44px] font-semibold text-center">
            Our Property Management Services
          </h1>
        </div>
        <div className="flex justify-between items-center gap-[100px]">
          <h1 className="text-[35px] font-light text-start">
            When DataAlay takes the reins of your property management in India,
            it's like having a magical touch that makes you almost forget you
            even own an apartment there—until the rent magically appears in your
            account, reminding you of the hassle-free brilliance of it all.
          </h1>
          <img
            src="/assets/images/pms.jpg"
            alt="..."
            className="h-[600px] w-[400px] rounded-3xl"
          />
        </div>
        <div>
          <h1 className="text-[44px] font-semibold text-center mb-[50px]">
            Go through our process
          </h1>
        </div>
        <div className="text-left">
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <FastfoodIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Onboarding Properties
                </Typography>
                <Typography>Reach out to the wide range</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Search made easy
                </Typography>
                <Typography>
                  Search a wide range of properties at your comfort
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="outlined">
                  <HotelIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Comfortable and verified homes
                </Typography>
                <Typography>
                  Because you need to find a home not house
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                <TimelineDot color="secondary">
                  <RepeatIcon/>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Repeat
                </Typography>
                <Typography>Because we assure best services :)</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
      <Grid />
    </div>
  );
}

export default PmsDesc;
