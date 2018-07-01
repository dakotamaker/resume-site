import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'react-icons-kit';
import { phone } from 'react-icons-kit/fa/phone';
import { envelope } from 'react-icons-kit/fa/envelope';
import { github } from 'react-icons-kit/fa/github';
import { home } from 'react-icons-kit/fa/home';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="name">
                    Dakota Daniel Maker
                </div>
                <div className="contact">
                        <div className="info-container"><div className="info-icon"><Icon icon={phone} size={28}/></div> (507)-218-6658 |</div> 
                        <div className="info-container"><div className="info-icon"><Icon icon={envelope} size={24}/></div><a href="mailto:dakotamaker@gmail.com">  dakotamaker@gmail.com | </a></div>
                        <div className="info-container"><div className="info-icon"><Icon icon={github} size={24}/></div><a href="https://github.com/dakotamaker" target="_blank"> DakotaMaker</a></div> 
                </div>
                <nav>
                    <Link to={process.env.PUBLIC_URL+ "/"}><Icon icon={home} size={45}/></Link>
                    <Link to={process.env.PUBLIC_URL+ "/resume"}>Resume</Link>   
                    <Link to={process.env.PUBLIC_URL + "/coverLetter"}>Cover Letter</Link> 
                </nav>
            </header>
        );
    }
}

export default Header;