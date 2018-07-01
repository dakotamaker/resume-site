import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Components/headerComponent/header';
import HomePage from './Components/pages/homePage';
import Resume from './Components/pages/resume';
import CoverLetter from './Components/pages/coverLetter';

import './Assets/css/default.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header/>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/resume' component={Resume}/>
          <Route exact path='/coverLetter' component={CoverLetter}/>
      </div>
      </Router>
    );
  }
}

export default App;
