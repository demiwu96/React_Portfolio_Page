import React, { Component } from "react";
import Resume from "../documents/Resume.pdf";
import { Link, useLocation } from "react-router-dom";

const styles = {
    navbar: {
        background: "#512da8"
    }
}

class Navbar extends Component {
    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
        });
    }

    render() {
        return (
            <div>
                <nav style={styles.navbar}>
                    <div className="nav-wrapper">
                        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <li><Link to="/" className={useLocation.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link></li>
                            <li><Link to="/projects" className={useLocation.pathname === "/projects" ? "nav-link active" : "nav-link"}>Projects</Link></li>
                            <li><a href={Resume}>Resume</a></li>
                        </ul>
                    </div>
                </nav>

                <ul id="slide-out" className="sidenav">
                    <li><div className="user-view">
                        <div className="background">
                            <img src="https://i.ibb.co/YDcv03X/cat-paw-m.png" alt="backgound of sidenav-cat paw"/>
                        </div>
                        <img className="circle" src="https://i.ibb.co/7Rsygq4/profile.jpg" alt="profile"/>
                        <a href="#name"><span className="white-text name">Yu-Hsuan Wu</span></a>
                        <a href="#email"><span className="white-text email">demiwu96@gmail.com</span></a>
                    </div></li>
                    <li><Link to="/" className={useLocation.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link></li>
                            <li><Link to="/projects" className={useLocation.pathname === "/projects" ? "nav-link active" : "nav-link"}>Projects</Link></li>
                            <li><a href={Resume}>Resume</a></li>
                </ul>
            </div>

        )
    }
}

export default Navbar;
