import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Container } from "@material-ui/core";
import {
  HOME,
  ABOUT,
  SKILLS,
  EDUCATION,
  EXPERIENCE,
  PORTFOLIO,
  CONTACT,
} from "../routes/URLMap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const useStyles = makeStyles({
  tabs: {
    marginTop: 80,
    marginBottom: 80,
  },
});

export default function Sidebar(props) {
  const classes = useStyles();
  const StyledLink = styled(NavLink)`
    text-align: center;
    font-size: 22px;
    text-decoration: none;
    margin: 10px;
    &:focus,
    &:visited,
    &:link,
    &:active {
      color: inherit;
      text-decoration: none;
    }
    &:hover {
      text-decoration: turquoise underline;
    }
  `;

  return (
    <Container>
      <Tabs className={classes.tabs} orientation="vertical">
        <StyledLink to={HOME}>Home</StyledLink>
        <StyledLink to={ABOUT}>About</StyledLink>
        <StyledLink to={SKILLS}>Skills</StyledLink>
        <StyledLink to={EDUCATION}>Education</StyledLink>
        <StyledLink to={EXPERIENCE}>Experience</StyledLink>
        <StyledLink to={PORTFOLIO}>Portfolio</StyledLink>
        <StyledLink to={CONTACT}>Contact</StyledLink>
      </Tabs>
    </Container>
  );
}
