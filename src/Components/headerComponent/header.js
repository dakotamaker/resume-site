import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'react-icons-kit';
import { phone } from 'react-icons-kit/fa/phone';
import { envelope } from 'react-icons-kit/fa/envelope';
import { github } from 'react-icons-kit/fa/github';
import { linkedinSquare } from 'react-icons-kit/fa/linkedinSquare';
import Routes from '../../Routes';

class Header extends Component {
    constructor(props) {
        super(props);

        if(!localStorage.getItem('selected')) {
            localStorage.setItem('selected', 'home');
        }

        this.state = {selected: localStorage.getItem('selected')};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(pageClicked) {
        localStorage.setItem('selected', pageClicked)
        this.setState({
            selected: localStorage.getItem('selected')
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
                        <Link onClick = {() => this.handleClick('home') } className={this.state.selected === 'home' ? 'selected':'nope'} to={Routes.HOME_PAGE}>Home</Link>
                        <Link onClick = {() => this.handleClick('resume') } className={this.state.selected === 'resume' ? 'selected':'nope'} to={Routes.RESUME_PAGE}>Resume</Link>   
                        <Link onClick = {() => this.handleClick('cover') } className={this.state.selected === 'cover' ? 'selected':'nope'} to={Routes.COVER_LETTER_PAGE}>Cover Letter</Link> 
                    </nav>
                </div>
                <div className="contact">
                        <a href="tel:507-218-6658"><div className="info-container"><div className="info-icon"><Icon icon={phone} size={28}/></div>(507)-218-6658 |</div></a>
                        <a href="mailto:dakotamaker@gmail.com"><div className="info-container"><div className="info-icon"><Icon icon={envelope} size={24}/></div>dakotamaker@gmail.com |</div></a>
                        <a href="https://github.com/dakotamaker" target="_blank" rel="noopener noreferrer"><div className="info-container"><div className="info-icon"><Icon icon={github} size={24}/></div> DakotaMaker |</div></a> 
                        <a href="https://www.linkedin.com/in/dakota-maker-236740137/" target="_blank" rel="noopener noreferrer"><div className="info-container"><div className="info-icon"><Icon icon={linkedinSquare} size={24}/></div>Dakota Maker</div></a>
                </div>
                <nav className="phone-screen">
                    <Link onClick = {() => this.handleClick('home') } className={this.state.selected === 'home' ? 'selected':'nope'} to={Routes.HOME_PAGE}>Home</Link>
                    <Link onClick = {() => this.handleClick('resume') } className={this.state.selected === 'resume' ? 'selected':'nope'} to={Routes.RESUME_PAGE}>Resume</Link>   
                    <Link onClick = {() => this.handleClick('cover') } className={this.state.selected === 'cover' ? 'selected':'nope'} to={Routes.COVER_LETTER_PAGE}>Cover Letter</Link> 
                </nav>
            </header>
        );
    }
}

export default Header;