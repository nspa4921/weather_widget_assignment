import React from 'react'

export default function WeatherWidget(props) {

    // console.log(props.weatherData)
    const { location, temperature, humidity, wind, wind_speed} = props.weatherData;

    return (
        <div className="widget">
            <div className="panel panel-info">
                <div className="panel-heading">
                    <li>Weather in <b>{location}</b></li>
                </div>
                <ul className="list-group">
                    <li className="list-group-item">Temperature: {temperature}°C</li>
                    <li className="list-group-item">Humidity: {humidity}</li>
                    <li className="list-group-item">Wind {wind} <b>m/s</b></li>
                    <li className="list-group-item">
                    <form onSubmit={(e) => props.changeWeather(e)}>
                    <label>
                    <input type="text" name="City" id="city" placeholder="City" onChange={(e) => props.changeLocation(e.target.value)}/>
                        </label>
                        <input className="button" type="submit" value="Search" />
                    </form>
                    </li>
                </ul>
            </div>
        </div>
    )
}
