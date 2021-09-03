import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Button from '@material-ui/core/Button';
import { doc, setDoc } from 'firebase/firestore';
import { db } from './firebaseapp';

const Hello = () => {
  const myfunc = async () => {
    await setDoc(doc(db, 'cities', 'LA'), {
      name: 'Los Angeles',
      state: 'CA',
      country: 'USA',
    }).then(() => {
      return console.log('success');
    });
  };

  return (
    <div>
      <h1>electron-react-boilerplate</h1>
      <h2>electron-react-boilerplate</h2>
      <h3>electron-react-boilerplate</h3>
      <h4>electron-react-boilerplate</h4>
      <Button variant="contained" color="primary" onClick={() => myfunc()}>
        Test
      </Button>
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
