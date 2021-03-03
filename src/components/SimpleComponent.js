// Code SimpleComponent Here
import React, { Component } from "react";

export default class SimpleComponent extends Component {

    state = {
        mood: "happy"
    }

    moodState = {
        "happy": "sad",
        "sad": "happy"
    }

    handleClick = () => {
        this.setState({
            mood: this.moodState[this.state.mood]
        })
    }



    render(){
        return(
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }

}