import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Forcast } from '../features/forcast/forcast';
import { Homepage } from '../features/homepage/homepage';
import { SearchLocation } from '../features/search-location/search-location';
import './app.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/forcast/:locationId"
          component={Forcast}
        />
        <Route
          path="/search"
          component={SearchLocation}
        />
        <Route
          path="/"
          component={Homepage}
        />
      </Switch>
    </Router>
  );
}

export default App;
