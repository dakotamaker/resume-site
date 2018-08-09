import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'react-icons-kit';
import { phone } from 'react-icons-kit/fa/phone';
import { envelope } from 'react-icons-kit/fa/envelope';
import { github } from 'react-icons-kit/fa/github';
import { linkedinSquare } from 'react-icons-kit/fa/linkedinSquare';
import Routes from '../../Routes';
import Resume from '../pages/resume/resume';

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
    }

    render() {
        return (
            <header>
                <div className="name-container">
                    <div className="name">
                        Dakota D. Maker
                    </div>
                    <nav className="desktop-screen">
                        <Link onClick = {() => this.handleClick(Routes.HOME_PAGE) } className={this.state.url === "/" ? 'selected':'nope'} to={Routes.HOME_PAGE}>Home</Link>
                        <Link onClick = {() => this.handleClick(Routes.RESUME_PAGE) } className={this.state.url === "/resume" ? 'selected':'nope'} to={Routes.RESUME_PAGE}>Resume</Link>   
                        <Link onClick = {() => this.handleClick(Routes.COVER_LETTER_PAGE) } className={this.state.url === "/coverLetter" ? 'selected':'nope'} to={Routes.COVER_LETTER_PAGE}>Cover Letter</Link> 
                    </nav>
                </div>
                <div className="contact">
                        <a href="tel:507-218-6658"><div className="info-container"><div className="info-icon"><Icon icon={phone} size={28}/></div>(507)-218-6658 |</div></a>
                        <a href="mailto:dakotamaker@gmail.com"><div className="info-container"><div className="info-icon"><Icon icon={envelope} size={24}/></div>dakotamaker@gmail.com |</div></a>
                        <a href="https://github.com/dakotamaker" target="_blank" rel="noopener noreferrer"><div className="info-container"><div className="info-icon"><Icon icon={github} size={24}/></div> DakotaMaker |</div></a> 
                        <a href="https://www.linkedin.com/in/dakota-maker-236740137/" target="_blank" rel="noopener noreferrer"><div className="info-container"><div className="info-icon"><Icon icon={linkedinSquare} size={24}/></div>Dakota Maker</div></a>
                </div>
                <nav className="phone-screen">
                    <Link onClick = {() => this.handleClick(Routes.HOME_PAGE) } className={this.state.url === "/" ? 'selected':'nope'} to={Routes.HOME_PAGE}>Home</Link>
                    <Link onClick = {() => this.handleClick(Routes.RESUME_PAGE) } className={this.state.url === "/resume" ? 'selected':'nope'} to={Routes.RESUME_PAGE}>Resume</Link>   
                    <Link onClick = {() => this.handleClick(Routes.COVER_LETTER_PAGE) } className={this.state.url === "/coverLetter" ? 'selected':'nope'} to={Routes.COVER_LETTER_PAGE}>Cover Letter</Link> 
                </nav>
            </header>
        );
    }
}

export default Header;