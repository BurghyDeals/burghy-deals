import React, { Component } from "react";
import "./About.css";
import amireabtimg from "./amireabtimg.jpg";
import mikeabtimg from "./mikeabtimg.jpg";
import Neelabtimg from "./Neelabtimg.jpg";
import logo_burghy from "./logo_burghy1.png";
import { withRouter, Redirect } from "react-router-dom";

class AboutPage extends Component {
    state = {
        displayHandle: false,
        redirect: "",
        image: '',

        name: "",
        number: "",
        email: "",
        description: "",
        space: "",
        condition: "",
        location: "",
        price: ""

    }
    home = () => {
        this.setState({
            redirect: "/home"
        })
    }
    render() {

        return (
            <div>

                <header>
                    <div style={{ backgroundColor: "#f5efef" }} className="navbar">
                        <img src={logo_burghy} alt="logo" className="logo" />
                        <nav>
                            <ul>
                                <li><a style={{ cursor: "pointer" }} onClick={this.home}>Home</a></li> {this.state.redirect ? <Redirect to={this.state.redirect} /> : null}
                                <li><a style={{ cursor: "pointer" }}>Login</a></li>
                                <li><a style={{ cursor: "pointer" }}>Signup</a></li>

                            </ul>
                        </nav>
                    </div>
                </header>


                <div className="about-section">
                    <h1 id="abt">About Us</h1>
                    <p id="para">
                        welcome to Burghy deals information page.
                        Burghy Deals is a Project made by students of SUNY Plattsburgh taking Software Engineering class in Computer Science Field.
                        The main idea of this website is to help SUNY Plattsburgh student community to trade stuff with in the school students. Burghy Deals is only SUNY Plattsburgh student oriented.
                        There is no user in this website from outside, or make any transactions or have an account.
                        with the help of this website the students can buy stuff and sell it. We are not responsible for any location where the transactions are made.
        we encourage you to make transaction or deals at the public parking assigned by the city police which has proper surveillance.</p>
                </div>

                <h2 style={{ textAlign: "center" }}>Our Team</h2>
                <div className="row">
                    <div className="column">
                        <div className="card">
                            <img src={Neelabtimg} alt="Neel Adalja" style={{ width: "100%" }} className="abtimg" />
                            <div className="container">
                                <h2>Neel Adalja</h2>
                                <p className="title">Founder</p>
                                <p>SUNY Plattsburgh</p>
                                <p>Computer Science Major</p>
                                <p>From: India</p>
                                <p>Email: nadal001@plattsburgh.edu</p>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <img src={mikeabtimg} alt="Michael Abreha" style={{ width: "100%" }} className="abtimg" />
                            <div className="container">
                                <h2>Micheal Abreha</h2>
                                <p className="title">Founder</p>
                                <p>SUNY Plattsburgh</p>
                                <p>Computer Science Major</p>
                                <p>From: Ethiopia</p>
                                <p>Email: mabre004@plattsburgh.edu</p>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <img src={amireabtimg} alt="Amire" style={{ width: "100%" }} className="abtimg" />
                            <div className="container">
                                <h2>Amire Mohmed</h2>
                                <p className="title">Founder</p>
                                <p>SUNY Plattsburgh</p>
                                <p>Computer Science Major</p>
                                <p>From: Ethiopia</p>
                                <p>Email: amohm001@plattsburgh.edu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(AboutPage);