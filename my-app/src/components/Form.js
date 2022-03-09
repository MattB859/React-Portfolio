import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstvalue: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className='Container'>
                <form onSubmit={this.handleSubmit}>
                    <label>First Name:</label>  
                    <input type="text" value={this.state.value} onChange={this.handleChange} />

                    <label>Last Name:</label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />

                    <label>Email Address:</label>
                    <input type="email" value={this.state.value} onChange={this.handleChange} />
                    
                    <label>Message:</label>
                    <textarea value={this.state.value} onChange={this.handleChange} />
                
                    <input color="primary" type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}

export default Form