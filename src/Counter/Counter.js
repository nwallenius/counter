import React, {Component} from 'react';
import './Counter.css';


class Counter extends Component {
    state = {
      counter: 0
    }
    addHandler = () => {
        this.setState({
          counter: this.state.counter +1
        });
    }
    removeHandler = () => {
        if (this.state.counter > 0) {
            this.setState({
              counter: this.state.counter -1
            });
        }
    }
    resetHandler = () => {
        this.setState({
          counter: 0
          // counter: this.state.counter - this.state.counter
        });
    }

 

  /* Värin vaihto: parillinen ja pariton
    <div className={this.state.counter % 2 === 0 ? "circle even" : "circle odd"}>  
        <p className="number">{this.state.counter}</p>
    </div>  
  */

    render () {
      return (
        <div className="container">
            <div className={
              this.state.counter === 0 ? "circle zero"
              : this.state.counter % 10 === 0 ? "circle ten"
              : this.state.counter % 2 === 0 ? "circle even"
              : "circle odd"
            }>
                <p className="number">{this.state.counter}</p>
            </div>
            <div className="buttons">
                <button onClick={this.addHandler}>Add one</button>
                <button onClick={this.removeHandler}>Remove one</button>
                <button onClick={this.resetHandler}>Reset</button>
            </div>
        </div>
      )
    }
}

export default Counter;