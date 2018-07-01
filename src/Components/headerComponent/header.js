import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="name">
                    Dakota Maker
                    <div className="contact">
                        ph: (507)-218-6658 | em: dakotamaker@gmail.com 
                    </div>
                </div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/resume">Resume</Link>   
                    <Link to="/coverLetter">Cover Letter</Link> 
                </nav>
            </header>
        );
    }
}

export default Header;