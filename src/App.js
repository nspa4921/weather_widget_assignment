
import React from 'react';
import Axios from "axios";
import WeatherWidget from "./components/WeatherWidget";
import Header from "./components/Header";


import './App.css';


class App extends React.Component {

  state = {
    coords:{
      latitude: 45,
      longitude: 60
    },
    data: {},
    inputData: ""
  }

  componentDidMount() {
    // get device location
    if (navigator.geolocation) {
      
      navigator.geolocation.getCurrentPosition((position) => {
        let newCoords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }

        this.setState({coords:newCoords});

               //API Call
               Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Copenhagen,dk&units=metric&appid=166d00e26d3ff2c6149e89feccc5c59a&query=${this.state.coords.latitude},${this.state.coords.longitude}`).then(res =>{
          
                let weatherData = {
                  location: res.data.name,
                  temperature: res.data.main.temp,
                  humidity: res.data.main.humidity,
                  wind: res.data.wind.deg,
                  wind_speed: res.data.wind.speed,
                }
      
                this.setState({data:weatherData});
                console.log(res)
              })
            })
          } else {
            console.log("not supported")
          }
        }

        change = (value) => {
          this.setState({ inputData: value })
        }

        changeWeather = (event) => {
          event.preventDefault();

          Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.inputData}&units=metric&appid=166d00e26d3ff2c6149e89feccc5c59a`).then(res => {
            
          let weatherData = {
              location: res.data.name,
              temperature: res.data.main.temp,
              humidity: res.data.main.humidity,
              wind: res.data.wind.deg,
              wind_speed: res.data.wind.speed,
            }
  
            this.setState({data:weatherData});
        })
      }

    render() {
      return (
        <div className="App">
          <Header/>
            <WeatherWidget weatherData = {this.state.data}
            changeLocation = {this.change}
            changeWeather={this.changeWeather}/>
        </div>
      );
    }
  
  
}

export default App;
