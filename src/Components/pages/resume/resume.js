import React, { Component } from 'react';
import { Animated } from 'react-animated-css';
import Icon from 'react-icons-kit';
import { graduationCap } from 'react-icons-kit/fa/graduationCap';
import { group } from 'react-icons-kit/fa/group';
import { certificate } from 'react-icons-kit/fa/certificate';

import ResumeTables from './resumeTables';
import ResumeDescriptions from './resumeDescriptions';
import uwmImg from '../../../Assets/images/UWM.png';
import pantherImg from '../../../Assets/images/Panther.png';
import jdaImg from '../../../Assets/images/jda.jpg';

class Resume extends Component {
    render() {
        const education = this.createList(ResumeDescriptions.educationDescription);
        const jda = this.createList(ResumeDescriptions.jdaDescription);
        const pass = this.createList(ResumeDescriptions.passDescription);
        const schoolAwards = this.createList(ResumeDescriptions.schoolAwardsDescription);
        const groupAwards = this.createList(ResumeDescriptions.groupAwardsDescription);
        const certAwards = this.createList(ResumeDescriptions.certAwardsDescription);

        return (
        <div className="container-fluid">
            <h1>
                Resume
            </h1>

            <Animated animationIn="fadeIn" isVisible={true}>
            <h4> Objective </h4><hr/>
            <p>
                Dedicated and passionate computer engineering student looking to expand upon technical skills and practical field knowledge while contributing value to a company through a full-time position.
            </p>
            </Animated>

            <Animated animationIn="fadeIn" animationInDelay={400} isVisible={true}>
            <h4> Education </h4><hr/>
            <div className="image-with-list"><img src={uwmImg}/><ul>{education}</ul></div>
            </Animated>

            <Animated animationIn="fadeIn" animationInDelay={800} isVisible={true}>
            <h4> Skills </h4><hr/>
                <ResumeTables/>
            </Animated>

            <Animated animationIn="fadeIn" animationInDelay={1200} isVisible={true}>    
            <h4> Work Experience </h4><hr/>
            <p className="work-description"> SOFTWARE ENGINEER INTERN | JDA SOFTWARE | MAY 2017-CURRENT</p> 
            <div className="image-with-list"><img src={jdaImg}/><ul>{jda}</ul></div><hr className="alt-hr"/>
            <p className="work-description"> PASS SUPLEMENTAL INSTRUCTION LEADER | UWM PASS TUTORING | AUGUST 2016-MAY 201</p> 
            <div className="image-with-list"><img src={pantherImg}/><ul>{pass}</ul></div>
            </Animated> 

            <Animated animationIn="fadeIn" animationInDelay={1600} isVisible={true}>    
            <h4> Awards and Acheivements </h4><hr/>
            <div className="image-with-list"><Icon icon={graduationCap} size={60}/><ul>{schoolAwards}</ul></div><hr className="alt-hr"/>
            <div className="image-with-list"><Icon icon={group} size={60}/><ul>{groupAwards}</ul></div><hr className="alt-hr"/>
            <div className="image-with-list"><Icon icon={certificate} size={60}/><ul>{certAwards}</ul></div>
            </Animated> 
        </div>
        )
    }

    createList (data) {
       return data.map((string) => <li>{string}</li>);
    }
}

export default Resume;