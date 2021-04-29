import React, { Component } from "react";
import "../styles/square.css";

class Square2 extends Component {
        state = {
            count: 0,
            backgroundColor: "",
        };

        changeColor = (ev) => {
            this.setState({
                backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
                count: this.state.count + 1,
            })
            ev.target.classList.add("move");
        }

        removeAnimation = (ev) => {
            ev.target.classList.remove("move");
            ev.target.classList.add("message");
            this.setState({
                count: 0,
            })
        }
        
        render() { 
           return (
            <div> 
                <header style={{color: this.state.backgroundColor}}>
                    <h1>When you click on a square, it will move to the right and change its color</h1>
                    <h3>You clicked {this.state.count} times</h3>
                </header>
                <div 
                    className="square" 
                    onClick={this.changeColor} 
                    onAnimationEnd={this.removeAnimation}
                    style={{backgroundColor: this.state.backgroundColor}}>
                    {this.state.count}
                </div>
            </div>
           )
    }
}

export default Square2;