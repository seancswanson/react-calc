import React, { Component } from 'react';

class Calculator extends Component {
constructor(props){
  super(props)
  this.state = {
    value1: 0,
    value2: 0,
    total: 0
  }
  this.calculate = this.calculate.bind(this);
  this.handleChange1 = this.handleChange1.bind(this);
  this.handleChange2 = this.handleChange2.bind(this);
}

  calculate(e){
    e.preventDefault(e);
    let value1 = parseInt(this.state.value1)
    let value2 = parseInt(this.state.value2)
    this.setState({total: (value1 + value2) })
  }

  handleChange1(event){
    this.setState({value1: event.target.value})
  }

  handleChange2(event){
    this.setState({value2: event.target.value})
  }

  render(){
    return(
      <div className="Calculator">
        <div className="container">
          <h1>Add with React!</h1>

          <div className="add">
          <form onSubmit={this.calculate}>
            <input type="text"  onChange={this.handleChange1} value={this.state.value1} />

            <span>+</span>

            <input type="text"  onChange={this.handleChange2} value={this.state.value2}/>

            <span>=</span>

            <h3>{this.state.total}!</h3>
            <button onSubmit={this.state.add}></button>
          </form>
          </div>
        </div>
      </div>
      );
  }
}

export default Calculator;