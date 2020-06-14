import React, { Component } from "react";
import "./style.css";

const frontEndTech = ["HTML", "CSS", "Bootstrap", "Materialize", "JavaScript", "Jquery", "JSON", "Ajax", "Web API", "React"];
const backEndTech = ["Node.JS", "Express", "npm", "MySQL", "Mongo DB", "Indexed DB", "PWA"]

class About extends Component {
    renderTech = (array) => {
        return array.map(item => {
            return <span className="btn-small tag">{item}</span>
        });
    };

    render() {
        return (
            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="col s1"></div>
                        <div className="col s9">
                            <div className="row">
                                <h3 className="center">About Me</h3>
                            </div>
                            <div className="row flex">
                                <div className="col s12 m6 white center-align" id="profileDiv">
                                    <img src="./image/profile.jpg" alt="profile picture" id="profile" />
                                    <h5>Yu-Hsuan (Demi)</h5>
                                    <p className="introP"><i className="material-icons small icon-custom">location_on</i>Toronto, Canada</p>
                                    <p className="introP">I am a front-end web developer. Obtained a certificate of full-stack
                                    development from the
                                    University of Toronto in July 2020. I enjoy creating websites that are simple and
                                user-friendly :)</p>
                                </div>
                                <div className="col s12 m6 white">
                                    <p className="tagTitle">Front-end </p>
                                    <div className="row tagDiv">
                                        {this.renderTech(frontEndTech)}
                                    </div>
                                    <p className="tagTitle">Back-end </p>
                                    <div className="row tagDiv">
                                        {this.renderTech(backEndTech)}
                                    </div>
                                </div>
                            </div>
                            <div className="row center-align">
                                <a href="mailto:demiwu96@gmail.com"><i className="far fa-paper-plane icon-custom"></i></a>
                                <a href="https://github.com/demiwu96" target="_blank"><i
                                    className="fab fa-github-alt icon-custom"></i></a>
                                <a href="www.linkedin.com/in/demiwu-2019fnh" target="_blank"><i
                                    className="fab fa-linkedin icon-custom"></i></a>
                            </div>
                        </div>
                        <div className="col s1"></div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;