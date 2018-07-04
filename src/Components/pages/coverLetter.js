import React, { Component } from 'react';
import { Animated } from 'react-animated-css';

class CoverLetter extends Component {
    render() {
        return (
        <div className="container-fluid">
            <h1>
                Cover Letter
            </h1>
            <Animated animationIn="fadeInRight" animationInDelay="0" isVisible={true}>
            <h4> Current Employment </h4><hr/>
            <p>
                Currently I am a senior Computer Engineering student at the university of Wisconsin-Milwaukee, and a full stack software engineering intern at JDA Software in Waukesha Wisconsin. 
                As a part of JDA I am working hands-on in both technical and dev-ops rolls by developing new features, working on bug fixes and support requests, as well as creating dashboards, 
                automating tasks for teams, and setting up monitors for security and performance on services. At JDA teams develop in an agile development, and my team works with Google Cloud Platform and utilizing microservice architecture. 
                My time at JDA has immensely improved my skills as a developer and has introduced me to the real world in software; along with reinforcing my passion for both learning new skills and coming up with innovative solutions. 
            </p>
            </Animated>
            <Animated animationIn="fadeInRight" animationInDelay="400" isVisible={true}>
            <h4> Last Work Experience </h4><hr/>
            <p>
                Prior to my time at JDA I worked on campus as a tutor and supplemental instruction leader for the Panther Academic Support Services.
                As an instruction leader, I was responsible for planning and leading weekly review sessions for both math and physics students along with offering general help with students in an array of different math classes.  
                Between this and the time I spent as a part-time math and English teacher’s aide for troubled 5th graders I have grown to love the pursuit of knowledge even further as well as learned the value of being able to communicate and teach others, 
                as that is the corner stone of creating a well-rounded and solid team in any professional environment. 
            </p>
            </Animated>
            <Animated animationIn="fadeInRight" animationInDelay="800" isVisible={true}>
            <h4> Other </h4><hr/>
            <p>    
                Through my other various work experiences in the food and service industries I have been able to be a part of many great teams and have learned to be a team player over anything. 
                I have been able to learn when to follow others as well as how and when to step up to the plate and be that leader. 
                I also have learned that there is much more to learn and I hope I can take many steps in that direction with you and your company. 
            </p>
            
            <p>
                I am interested in a full-time position with your company once I am done with my undergraduate degree in Spring of 2019, and am willing to relocate for a position. 
                I look forward to discussing more with you soon. Please email me or call me at any time that is convenient. 
            </p>
            <p>    
                Thank you for your consideration.
            </p>
            <p className="sign-off">    
                Sincerely,
            </p>
            <p className="sign-off">
                Dakota Maker 
            </p>
            </Animated>
        </div>
        )
    }
}

export default CoverLetter;