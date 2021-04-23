import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import RootStore from './mobx/stores/RootStore';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';

export const Store = createContext(RootStore);

const history = createBrowserHistory();

ReactDOM.render(
    <>
        <Store.Provider value={RootStore}>
            <Router history={history}>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </Router>
        </Store.Provider>
    </>,
    document.getElementById('root'),
);
