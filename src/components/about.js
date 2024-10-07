import React from "react";
import resume from '../assets/Resume.pdf';
import coder from '../assets/coder.png';
import SkillBar from "./bar";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgSize: window.innerWidth  / 5 + 'px'
        }
        window.addEventListener("resize", () => this.resize());
    }
    resize(){
        this.setState({
            imgSize: window.innerWidth  / 5 + 'px'
        })
    }
    render() { 
        return(
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
                <h3 className="title">My Profile <i class="fa fa-user"></i></h3>
                <div className="profile">
                    <h3>Hi,</h3>
                    <h3>I'm Ouzaier,</h3>
                    <h3>full stack developer.</h3>
                    <form method='get' action={resume}>
                        <button className="viewRes" type='submit'>View Resume <i class="fa fa-search"></i></button>
                    </form>
                </div>
                <img 
                    src={coder} 
                    style={{width: this.state.imgSize, height: this.state.imgSize}}
                    alt="laptop_icon"/>
                <div className="skills-container">
                    <SkillBar skills = 'React, NodeJS, SQL' />
                    <SkillBar skills = 'C/C++/JavaScript/TypeScript/Java/Python' />
                    <SkillBar skills = 'UML' />
                </div>
            </div>
        );
    }
}
export default Profile;