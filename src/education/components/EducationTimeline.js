import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@material-ui/lab";
import { Typography, Grid } from "@material-ui/core";
import styled from "styled-components";
import Jiangren from "../images/logo-jr-academy.png";
import UQ from "../images/logo-uq-purple.png";
import Tust from "../images/logo-tust.png";

const InstitutionIcon = styled.img`
    height: 50px;
    margin: 20px 10px;
`;

export default function EducationTimeline(props) {
  return (
    <React.Fragment>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textPrimary">Courses: Fullstack Developer Courses</Typography>
            <Typography color="textPrimary">HTML5, CSS3, ECMAScript 6, React, Redux, Node.js, Express.js, RESTful API, Postman, etc.</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            {/* <Grid container alignItems="center"> */}
                <InstitutionIcon src={Jiangren} />
            {/* </Grid> */}
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textPrimary">Master of Information Technology</Typography>
            <Typography color="textPrimary">Courses: Software Engineering, Database System, Relational Database System, Advanced Database System, Data Mining, Web Design, Human-Computer Interaction, Discrete Mathematics</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <InstitutionIcon src={UQ} />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Grid>
                <Typography color="textPrimary">Bachelor of Arts - Digital Publishing</Typography>
                <Typography color="textPrimary">Courses: Web Development, C Programming, JAVA Programming, Computer Networks, Computer Composition Principles, Digital Publishing, Digital Media Technologies</Typography>
            </Grid>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <InstitutionIcon src={Tust} />
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </React.Fragment>
  );
}
