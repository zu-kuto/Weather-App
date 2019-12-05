import React, { Component } from 'react';
import '../styles/cityInput.css'


export default class CityInput extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            city: ""
        };
    }

    handleChange = (e) => {
        this.setState({city: e.target.value});
    }

    handleClick() {
        console.log(this.state.city);
    }

    render() {
        return (
            <div className="city-chooser">
                <h1 className="input-city-header">Tell us what city are you curious about</h1>
                <input className="city-input" type="text" id="city" placeholder="Write city" value={this.state.city} onChange={this.handleChange.bind(this)}></input>
                <button className="city-button" type="submit" onClick={this.handleClick.bind(this)}>Get current weather</button>
            </div>
        )
    }
}