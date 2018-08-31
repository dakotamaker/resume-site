import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import Header from './Components/headerComponent/header';
import HomePage from './Components/pages/homePage';
import Resume from './Components/pages/resume/resume';
import CoverLetter from './Components/pages/coverLetter';
import Routes from './Routes';

import './Assets/css/header.css';
import './Assets/css/homePage.css';
import './Assets/css/resume.css';
import './Assets/css/coverLetter.css';

ReactGA.initialize('UA-123398424-1');

class App extends Component {
  render() {
    ReactGA.initialize('UA-123398424-1');

    function reactGA() {
      var fullUrl = window.location.href;
      var url = fullUrl.substr(this.fullUrl.lastIndexOf("/"), this.fullUrl.length - 1)
  
      ReactGA.pageview(url);
    }

    return (
      <Router onUpdate={reactGA}>
      <div className="App">
        <Header/>
          <Route onEnter = {reactGA} exact path={Routes.HOME_PAGE} component={HomePage}/>
          <Route onEnter = {reactGA} exact path={Routes.RESUME_PAGE} component={Resume}/>
          <Route onEnter = {reactGA} exact path={Routes.COVER_LETTER_PAGE} component={CoverLetter}/>
      </div>
      </Router>
    );
  }
}

export default App;
