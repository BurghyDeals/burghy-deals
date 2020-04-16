/* eslint-disable import/first */
import React, { Component } from "react";
import storage from "../config/fire";
import firebase from "firebase";
import { withRouter, Redirect } from "react-router-dom";
import "./styleSell.css";

class Sell extends Component {
    state = {
        displayHandle: false,
        redirect: "",
        image: null,
        name: "",
        number: null,
        email: ""
    }
    handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image }));
        }
    };

    postItem = () => {
        this.setState({
            redirect: "/home"
        })

        const db = firebase.firestore()
        // db.collection("photos").doc("firstPhoto").set({
        db.collection("photos").doc().set({
            name: this.state.name,
            phone_number: this.state.number,
            email: this.state.email,
            image: this.state.image

        }).then(function () {
            console.log("Document successfully written!");
        })
            .catch(function (error) {
                window.alert("Error writing document: ", error);
            });
    }


    render() {
        return (
            <div className="App" style={{
                backgroundColor: "grey",
            }}>
                <div className="App-header">
                    <p1>Sell Page </p1>

                    <div className="Photo">
                        <h6>
                            Choose the photo of your deal
                    </h6>

                        <input style={{ borderRadius: "0px" }}
                            value={this.state.image}
                            type="file"
                            name="image"
                            onChange={(event) => { this.setState({ image: event.target.value }) }}
                        />
                    </div>
                    <div className="name">
                        <input
                            value={this.state.name}
                            name="name"
                            type="text"
                            placeholder="Enter the name of your item"
                            onChange={(event) => {
                                this.setState({
                                    name: event.target.value
                                })
                            }}
                        />
                    </div>
                    <div className="Phone">
                        <input
                            value={this.state.number}
                            name="phone"
                            type="tel"
                            placeholder="Enter a number for buyers to reach you"
                            onChange={(event) => {
                                this.setState({
                                    number: event.target.value
                                })
                            }}
                        />
                    </div>
                    <div className="Email">
                        <input
                            value={this.state.email}
                            name="email"
                            type="email"
                            placeholder="Enter your email for buyers to reach you"
                            onChange={(event) => {
                                this.setState({
                                    email: event.target.value
                                })
                            }}
                        />
                    </div>
                    <div>

                        <button onClick={this.postItem} label="Action">post item</button>
                        {this.state.redirect ? <Redirect to={this.state.redirect} /> : null}
                    </div>
                </div>


            </div>

        );
    }
}
export default withRouter(Sell);