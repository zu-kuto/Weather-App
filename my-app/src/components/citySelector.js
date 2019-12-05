import React, { Component } from 'react'
import WeatherApiService from '../services/weatherApiService'

export default class CitySelector extends Component {
    city = ""

    onButtonClick() {
        WeatherApiService.getWeather(1);
    }

    render() {
        return (
            <div>
                <input type="text" value={this.city}/>
                <button onClick={this.onButtonClick}>Show weather</button> 
            </div>
        )
    }
}
