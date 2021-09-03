import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';

const Hello = () => {
  return (
    <div>
      <h1>electron-react-boilerplate</h1>
      <h2>electron-react-boilerplate</h2>
      <h3>electron-react-boilerplate</h3>
      <h4>electron-react-boilerplate</h4>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
