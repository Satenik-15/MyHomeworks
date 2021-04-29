import React, { Component } from "react";
import "../styles/square.css";

class Square extends Component {
        state = {
            className: "square",
            backgroundColor: "",
            count: 0,
            num: 0,
        };
        changeColor = () => {
            this.state.className = "move";
            let arrOfColors = ['green', 'blue', 'pink', 'yellow', 'black', 'purple', 'orange', 'brown', 'lightblue', 'silver', 'red'];
            this.setState({
                backgroundColor: arrOfColors[this.state.num],
                num: this.state.num += 1,
                count: this.state.count += 1,                            
            })
            if(this.state.num === arrOfColors.length) {
                this.setState({
                    num: 0,
                })
            }
        }
        render() {  
           return (
            <div>
                <header style={{color: this.state.backgroundColor}}>
                    <h1>When you click on a square, it will move to the right and change its color</h1>
                    <h3>You clicked {this.state.count} times</h3>
                </header>
                <div 
                    className={this.state.className} 
                    onClick={this.changeColor} 
                    style={{backgroundColor: this.state.backgroundColor}}>
                        <p>{this.state.count}</p>
                </div>
            </div>
           )
    }
}

export default Square;