
import React from 'react';
import './App.css';


class App extends React.Component {

  state = {
    coords:{
      latitude: 45,
      longitude: 60
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      let newCoords = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }

      this.setState({coords:newCoords})

    })
  }

    render() {
      return (
        <div className="App">
            Weather widget
        </div>
      );
    }
  
  
}

export default App;
