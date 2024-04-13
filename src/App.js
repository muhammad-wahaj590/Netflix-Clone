import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';


function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/signup">
            <SignupScreen />
          </Route>
          <Route path="/home">
            <HomeScreen />
          </Route>
          <Route path="/profile">
            <ProfileScreen />
          </Route>
          <Route path="/">
            <LoginScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


