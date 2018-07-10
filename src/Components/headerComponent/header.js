import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'react-icons-kit';
import { phone } from 'react-icons-kit/fa/phone';
import { envelope } from 'react-icons-kit/fa/envelope';
import { github } from 'react-icons-kit/fa/github';
import { home } from 'react-icons-kit/fa/home';
import Routes from '../../Routes';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="name-container">
                    <div className="name">
                        Dakota Daniel Maker
                    </div>
                    <nav className="desktop-screen">
                        <Link to={Routes.HOME_PAGE}>Home</Link>
                        <Link to={Routes.RESUME_PAGE}>Resume</Link>   
                        <Link to={Routes.COVER_LETTER_PAGE}>Cover Letter</Link> 
                    </nav>
                </div>
                <div className="contact">
                        <div className="info-container"><div className="info-icon"><Icon icon={phone} size={28}/></div><a href="tel:507-218-6658"> (507)-218-6658 |</a></div> 
                        <div className="info-container"><div className="info-icon"><Icon icon={envelope} size={24}/></div><a href="mailto:dakotamaker@gmail.com">  dakotamaker@gmail.com | </a></div>
                        <div className="info-container"><div className="info-icon"><Icon icon={github} size={24}/></div><a href="https://github.com/dakotamaker" target="_blank" rel="noopener noreferrer"> DakotaMaker</a></div> 
                </div>
                <nav className="phone-screen">
                    <Link to={Routes.HOME_PAGE}>Home</Link>
                    <Link to={Routes.RESUME_PAGE}>Resume</Link>   
                    <Link to={Routes.COVER_LETTER_PAGE}>Cover Letter</Link> 
                </nav>
            </header>
        );
    }
}

export default Header;