import React, { Component } from "react";
import "../../App.css";

class User extends Component {

    /* Información disponible en MongoDB
    *  - nickName
    *  - name
    *  - email
    *  - age
    *  - phone
    *  - image
    */

    render() {
        return(
            <div>
                <h1>{this.props.nickName}</h1>
                <img href={this.props.image} alt={this.props.name}/>
                <h3>Name:</h3>
                <p>{this.props.name}</p>
                <h3>eMail:</h3>
                <p>{this.props.email}</p>
                <h3>Age:</h3>
                <p>{this.props.age}</p>
                <h3>Phone:</h3>
                <p>{this.props.phone}</p>
            </div>
        );
    }

}

export default User;