import React from 'react';
import './App.css';
import Profile from './Profile_Page.js';
import Nav from './Nav.js';
import About from './About.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about_page' component={About} />
        <Route path='/profile_page' component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
    <div class="Brand">
  <h1 id="brandName">Holiday-Share</h1>
  <p id="slogan"> Personalise & Share your trip of a lifetime? </p>
  </div>
);

export default App;
