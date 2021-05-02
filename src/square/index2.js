import React, { Component } from "react";
import Popup from "./popup";
import "../styles/square.css";
class Square2 extends Component {
        state = {
            count: 0,
            backgroundColor: "",
            isOpen: false,
            running: false,
            animation: false,
        };

        changeColor = (ev) => {
            this.setState({
                backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
                count: this.state.count + 1,
                running: !this.state.running,
                animation: true,
            })
        }

        removeAnimation = (ev) => {
            this.setState({
                // count: 0,
                isOpen: true,
                animation: false,
            })
        }

        onClose = () => {
            this.setState({isOpen: false})
        }
        
        render() { 
           return (
            <div> 
                <header style={{color: this.state.backgroundColor}}>
                    <h1>When you click on a square, it will move to the right and change its color</h1>
                </header>
                <div>
                    { this.state.isOpen ? <Popup count={ this.state.count } open={ this.state.isOpen } onClose ={ this.onClose }>
                    </Popup> : null }
                    <div className={`square ${this.state.animation && "move"} ${this.state.running ? "running" : "paused"}`} 
                         onClick={this.changeColor} 
                         onAnimationEnd={this.removeAnimation}
                         style={{backgroundColor: this.state.backgroundColor}}>
                            {this.state.count}
                    </div>
                    
                </div>
                
            </div>
           )
    }
}

export default Square2;