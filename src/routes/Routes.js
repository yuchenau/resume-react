import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HOME, ABOUT, SKILLS, EDUCATION, EXPERIENCE, PORTFOLIO, CONTACT } from './URLMap'
import Home from '../home/Home';
import About from '../about/About';

const Routes = () => {
    return (
        <Switch>
            <Route path={HOME} component={Home} />
            <Route path={ABOUT} component={About} />
            <Route path={SKILLS} component={Home} />
            <Route path={EDUCATION} component={Home} />
            <Route path={EXPERIENCE} component={Home} />
            <Route path={PORTFOLIO} component={Home} />
            <Route path={CONTACT} component={Home} />
        </Switch>
    );
}

export default Routes;
