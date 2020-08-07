import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { MAIN } from './URLMap'

export default function Routes(props) {
    return (
        <Switch>
            <Redirect exact from="/" to="/main" />
        </Switch>
    );
}
