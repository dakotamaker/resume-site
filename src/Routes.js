import React, { Component } from 'react';

class Routes extends Component {
    static HOME_PAGE = process.env.PUBLIC_URL+'/';
    static RESUME_PAGE = process.env.PUBLIC_URL+'/resume';
    static COVER_LETTER_PAGE = process.env.PUBLIC_URL+'/coverLetter'
  }
  
export default Routes;