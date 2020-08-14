import React from 'react';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
} from "@material-ui/lab";
import { Typography } from "@material-ui/core";
import styled from "styled-components";
import Founder from "../images/logo-founder.png";
import HeroEntertainment from "../images/logo-hero-entertainment.jpg";
import ChineseAll from "../images/logo-ChineseAll.png";

const CompanyIcon = styled.img`
    height: 40px;
    margin: 20px 10px;
`;

export default function ExperienceTimeline(props) {
    return (
        <div>
            <React.Fragment>
            <Timeline align="alternate">
                <TimelineItem>
                <TimelineOppositeContent>
                    <CompanyIcon src={HeroEntertainment} />
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography>Position: Product Operations Intern</Typography>
                    <Typography>Responsibility:</Typography>
                </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                <TimelineOppositeContent>
                    <CompanyIcon src={Founder} />
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography>Position: Product Manager Intern, Business Analysis Intern</Typography>
                    <Typography>Responsibility: Design wireframes of a calligraphy learning & teaching application, Manage the content management system of the application</Typography>
                </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                <TimelineOppositeContent>
                    <CompanyIcon src={ChineseAll} />
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography>Position: Product Manager Intern, Business Analysis Intern</Typography>
                    <Typography>Responsibility:</Typography>
                </TimelineContent>
                </TimelineItem>
            </Timeline>
            </React.Fragment>
        </div>
    );
}
