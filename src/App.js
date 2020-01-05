import React from 'react';
import './App.css';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserStore from './store/userStore';

import Login from './pages/login/login';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <Provider userStore={new UserStore()}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/dashboard" component={Dashboard}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
