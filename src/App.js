import React from 'react';
import './App.css';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserStore from "./store/userStore";

import Index from './pages/index/index'

function App() {
  return (
    <Provider userStore={new UserStore()}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
