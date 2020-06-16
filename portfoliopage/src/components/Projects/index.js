import React, { Component } from "react";
import ProjectList from "../project.json";
import Card from "../Card";

class Projects extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s1"></div>
                    <div className="col s9">
                        <div className="row">
                            <h3 className="center">Portfolio</h3>
                        </div>
                        <div className="row">
                            <Card list={ProjectList}/>
                        </div>
                    </div>
                    <div classNameName="col s1"></div>
                </div>
            </div>

        )
    }
}

export default Projects;