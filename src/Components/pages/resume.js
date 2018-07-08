import React, { Component } from 'react';
import { Animated } from 'react-animated-css';
import BootStrapTable from 'react-bootstrap-table-next';
import Icon from 'react-icons-kit';
import { graduationCap } from 'react-icons-kit/fa/graduationCap';
import { group } from 'react-icons-kit/fa/group';
import { certificate } from 'react-icons-kit/fa/certificate';

import uwmImg from '../../Assets/images/UWM.png';
import pantherImg from '../../Assets/images/Panther.png';
import jdaImg from '../../Assets/images/jda.jpg';

class Resume extends Component {
    render() {
        const educationInfo = ["Bachelors of Science in Computer Engineering", 
                              "Anticipated gradutaion: May 2019", 
                              "GPA: 3.554"
                            ];

        const jdaInfo = ["Developed both client and server-side elements of web apps in microservices in an agile environment", 
                        "Front end experience with Angular Material", 
                        "Projects based around deploying to Google Cloud Platform", 
                        "Implemented REST APIs",
                        "Completed or created varying DevOps measurements, dashboards, and projects", 
                        "Collaborated with my own team, other cloud teams in JDA, and other departments to deliver high quality software", 
                        ];

        const passInfo = ["Planed and conduct five weekly physics and math review sessions in addition to regular review sessions", 
                         "Coordinated with professors on lesson plans ", 
                         "Helped increase morale and grades in classes through relating and assisting students in their studies"
                         ];

        const schoolAwardsInfo = ["Four-time College of Engineering Dean’s Honor List placement (Fall 2015, Spring 2017, Fall 2017, Spring 2018)", 
                           "UWM Avi Shaked & Babs Waldman Engineering Excellence Scholarship recipient", 
                           "Recipient of the Mayo Clinic Scholarship for academic performance", 
                           "Capstone project was used for presentations during worldwide JDA Focus conference"];

        const groupAwardsInfo = ["Elected to be the Assistant Recruiting officer for the Google Student Ambassador Team (2015)", 
        "Elected to be the Recruiting officer for the Engineering Student Council. Helped double membership (2015-2016)"];

        const certAwardsInfo = ["Received CRLA International Level II Tutor Training certification"];

        const languagesAndFrameworks = [{key: 'Java', exp: "x"}, {key: 'JavaScript', prof: "x"}, 
                                        {key: 'Angular.JS', prof: "x"}, {key: 'Angular Material', prof: "x"}, 
                                        {key: 'React.JS', prof: "x"}, {key: 'Python', prof: "x"}, 
                                        {key: 'C', qual: "x"}, {key: ' '}];

        const tools = [{key: 'Android Mobile', qual: "x"}, {key: 'Git', exp: "x"}, 
                       {key: 'Google Data Studio', exp: "x"}, {key: 'Google Sheets', exp: "x"}, 
                       {key: 'Jenkins CD Pipeline', prof: "x"}, {key: 'Jira', exp: "x"}, 
                       {key: 'Microsoft Office',exp: "x"}, {key: ' '}];

        const columns = [{dataField: 'key', text: ' ', align: 'left'}, 
                         {dataField: 'qual', text: 'Qualified', align: 'center', headerAlign: 'center'}, 
                         {dataField: 'prof', text: 'Proficient', align: 'center', headerAlign: 'center'}, 
                         {dataField: 'exp', text: 'Experienced', align: 'center', headerAlign: 'center'}];
  
        const CaptionElement1 = () => <h4 style={{  textAlign: 'center', padding: '0.5em' }}>Languages/Frameworks</h4>;
        const CaptionElement2 = () => <h4 style={{  textAlign: 'center', padding: '0.5em' }}>Tools</h4>;

        const education = this.createList(educationInfo);
        const jda = this.createList(jdaInfo);
        const pass = this.createList(passInfo);
        const schoolAwards = this.createList(schoolAwardsInfo);
        const groupAwards = this.createList(groupAwardsInfo);
        const certAwards = this.createList(certAwardsInfo);
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
            <BootStrapTable
                keyField="key"
                caption={<CaptionElement1 />}
                data={ languagesAndFrameworks }
                columns={ columns }
                bordered={ false }/>
            <BootStrapTable
                keyField="key"
                caption={<CaptionElement2 />}
                data={ tools }
                columns={ columns }
                bordered={ false }/>
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