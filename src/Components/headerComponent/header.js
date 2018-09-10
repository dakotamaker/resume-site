import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

import Icon from 'react-icons-kit';
import { phone } from 'react-icons-kit/fa/phone';
import { envelope } from 'react-icons-kit/fa/envelope';
import { github } from 'react-icons-kit/fa/github';
import { linkedinSquare } from 'react-icons-kit/fa/linkedinSquare';
import Routes from '../../Routes';

class Header extends Component {
    constructor(props) {
        super(props);
        this.fullUrl = window.location.href;
        this.state = {url: this.fullUrl.substr(this.fullUrl.lastIndexOf("/"), this.fullUrl.length - 1)};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(route) {
        this.setState({
            url: route
        });
        window.scrollTo(0, 0);
    }

    githubEvent() {
        ReactGA.event({
            category: 'Link',
            action: 'Visit GitHub account'
          });
    }

    linkedInEvent() {
        ReactGA.event({
            category: 'Link',
            action: 'Visit LinkedIn account'
          });
    }

    render() {
        ReactGA.initialize('UA-123398424-1');
        const HOME = '/'
        const RESUME = '/resume';
        const COVER_LETTER = '/coverLetter'

        return (
            <header>
                <div className="name-container">
                    <div className="name">
                        Dakota D. Maker
                    </div>
                    <nav className="desktop-screen">
                        <Link onClick = {() => this.handleClick(HOME) } className={this.state.url.toLowerCase() === HOME.toLowerCase() ? 'selected':'nope'} to={Routes.HOME_PAGE}>Home</Link>
                        <Link onClick = {() => this.handleClick(RESUME) } className={this.state.url.toLowerCase() === RESUME.toLowerCase() ? 'selected':'nope'} to={Routes.RESUME_PAGE}>Resume</Link>   
                        <Link onClick = {() => this.handleClick(COVER_LETTER) } className={this.state.url.toLowerCase() === COVER_LETTER.toLowerCase() ? 'selected':'nope'} to={Routes.COVER_LETTER_PAGE}>Cover Letter</Link> 
                    </nav>
                </div>
                <div className="contact">
                        <a href="tel:507-218-6658"><div className="info-container"><div className="info-icon"><Icon icon={phone} size={28}/></div>(507)-218-6658 |</div></a>
                        <a href="mailto:dakotamaker@gmail.com"><div className="info-container"><div className="info-icon"><Icon icon={envelope} size={24}/></div>dakotamaker@gmail.com |</div></a>
                        <a href="https://github.com/dakotamaker" target="_blank" rel="noopener noreferrer" onClick={() => this.githubEvent()}><div className="info-container"><div className="info-icon"><Icon icon={github} size={24}/></div> DakotaMaker |</div></a> 
                        <a href="https://www.linkedin.com/in/dakota-maker-236740137/" target="_blank" rel="noopener noreferrer" onClick={() => this.linkedInEvent()}><div className="info-container"><div className="info-icon"><Icon icon={linkedinSquare} size={24}/></div>Dakota Maker</div></a>
                </div>
                <nav className="phone-screen">
                    <Link onClick = {() => this.handleClick(HOME) } className={this.state.url.toLowerCase() === HOME.toLowerCase() ? 'selected':'nope'} to={Routes.HOME_PAGE}>Home</Link>
                    <Link onClick = {() => this.handleClick(RESUME) } className={this.state.url.toLowerCase() === RESUME.toLowerCase() ? 'selected':'nope'} to={Routes.RESUME_PAGE}>Resume</Link>   
                    <Link onClick = {() => this.handleClick(COVER_LETTER) } className={this.state.url.toLowerCase() === COVER_LETTER.toLowerCase() ? 'selected':'nope'} to={Routes.COVER_LETTER_PAGE}>Cover Letter</Link> 
                </nav>
            </header>
        );
    }
}

export default Header;