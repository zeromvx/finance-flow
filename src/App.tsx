import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from './routes';
import RootPage from './pages/root/RootPage';

const App = (): JSX.Element => {
    return (
        <Switch>
            <Route path={routes.root}>
                <RootPage />
            </Route>
        </Switch>
    );
};

export default App;
