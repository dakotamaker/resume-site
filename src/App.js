import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Components/headerComponent/header';
import HomePage from './Components/pages/homePage';
import Resume from './Components/pages/resume';
import CoverLetter from './Components/pages/coverLetter';
import Routes from './Routes';

import './Assets/css/default.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header/>
          <Route exact path={Routes.HOME_PAGE} component={HomePage}/>
          <Route exact path={Routes.RESUME_PAGE} component={Resume}/>
          <Route exact path={Routes.COVER_LETTER_PAGE} component={CoverLetter}/>
      </div>
      </Router>
    );
  }
}

export default App;
