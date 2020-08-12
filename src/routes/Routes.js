import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {
  HOME,
  ABOUT,
  SKILLS,
  EDUCATION,
  EXPERIENCE,
  PORTFOLIO,
  CONTACT,
} from "./URLMap";
import Home from "../home/Home";
import About from "../about/About";
import Skills from "../skills/Skills";
import Education from "../education/Education";
import Experience from "../experience/Experience";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route exact path={HOME} component={Home} />
      <Route exact path={ABOUT} component={About} />
      <Route exact path={SKILLS} component={Skills} />
      <Route exact path={EDUCATION} component={Education} />
      <Route exact path={EXPERIENCE} component={Experience} />
      <Route exact path={PORTFOLIO} component={Portfolio} />
      <Route exact path={CONTACT} component={Contact} />
    </Switch>
  );
};

export default Routes;
