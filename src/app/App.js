import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// redux store
import store from './redux/store';

import GlobalStyle from './theme/GlobalStyle';

// pages
import Create from '../core/create';
import View from '../core/view';
import NotFound from '../core/404';

const App = () => 
  <Provider store={store}>
    <GlobalStyle />
    <Router basename={process.env.NODE_ENV  === 'production' ? process.env.GITHUB_URL : "/"}>
      <Switch>
        <Route exact path="/" component={Create} />
        <Route exact path="/view" component={View} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>

export default App;
