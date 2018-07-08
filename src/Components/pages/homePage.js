import React, { Component } from 'react';
import { Animated } from 'react-animated-css';
import Icon from 'react-icons-kit';
import { mapMarker } from 'react-icons-kit/fa/mapMarker';
import { futbolO } from 'react-icons-kit/fa/futbolO';
import { plane } from 'react-icons-kit/fa/plane';
import { laptop } from 'react-icons-kit/fa/laptop';
import { superscript } from 'react-icons-kit/fa/superscript';
import { language } from 'react-icons-kit/fa/language';

class HomePage extends Component {
    render() {
        return (
        <div className="container-fluid">
            <h1>
                Introduction
            </h1>

            <Animated animationIn="fadeInUp" isVisible={true}>
            <h4> What Is This Site? </h4><hr/>
            <p>
                On this website you will find valuable information about myself and my qualifications for your company.
                I created this to not only get more experience with React and web development, but also as a unique twist on an old, boring resume.
                Feel free to explore this page and learn more about the author, and don't hesitate to use the information in the header to contact me with questions, concerns, comments, or even better yet, a job!
            </p>
            </Animated>

            <Animated animationIn="fadeInUp" animationInDelay={400} isVisible={true}>
            <h4> About Me </h4><hr/>
            <p className="about">
            <Icon icon={mapMarker} size={70}/>
            <div className="about-info"> I am orignally from Rochester, Minnesota.</div>
            </p>
            <p className="about">
            <Icon icon={futbolO} size={70}/>
            <div className="about-info"> I am an avid sports fan. Played baseball and football through high school and club football in college.</div>
            </p>            
            <p className="about">
            <Icon icon={laptop} size={70}/>
            <div className="about-info"> A major goal of mine is to become a head software architect for a company (Who knows, it could be yours).</div>
            </p>            
            <p className="about">
            <Icon icon={superscript} size={70}/>
            <div className="about-info"> If I wasn't pursuing software I would have tried to become a calculus or physics teacher. </div>
            </p>
            <p className="about">
            <Icon icon={language} size={70}/>
            <div className="about-info"> A goal outside of tech is to learn at least one other language, preferrably Spanish. </div>
            </p>
            <p className="about">
            <Icon icon={plane} size={70}/>
            <div className="about-info"> I have a passion to travel to as many places as I can through the world to sight-see and learn about more cultures.</div>
            </p>  
            </Animated>
        </div>
        )
    }
}

export default HomePage;