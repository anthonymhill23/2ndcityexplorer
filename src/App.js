import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cityform from './Cityform';
import Results from './Results';
import Header from './Header';
import axios from 'axios';
import Errormodal from './Errormodal';
import Weather from './Weather'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: [],
      mapurl: '',
      error: false,
      errorMessage: '',
      showModal: false,
      weatherData: ['sunny'],
      weatherModal: false
    };
  };
  hideWeatherModal = () => {
    this.setState({
      weatherModal: false,
    })
  }
  hideModal = () => {
    this.setState({
      showModal: false,
      weatherModal: false,
    })
  }
  showModal = () => {
    this.setState({
      showModal: true,
    })
  }
  handleCityCall = async (city) => {
    try {
      let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${city}&format=json`);
      this.setState({
        cityData: [cityData.data[0]]
      });
      console.log(this.state.cityData);
    } catch (error) {
      console.log('error', error.response);
      this.setState({
        error: true,
        showModal: true,
        errorMessage: `An error has been caught: ${error.response.status} ${error.response.statusText}`
      });
      console.log(this.state.errorMessage);
    }
  }
  getWeather = async (city) => {
    try{let weatherCall = `${process.env.REACT_APP_SERVER}/weather?city=${city}`;
    let weatherData = await axios.get(weatherCall)
    this.setState({
      weatherData: weatherData.data,
    })
    this.setState({
      weatherModal: true,
    })
    console.log(weatherData)
  } catch (error){
    this.setState({
      error: true,
      showModal: true,
      errorMessage: `An error has been caught: ${error.response.status} ${error.response.statusText}`
    });
    console.log(this.state.errorMessage);
  }
}
  render() {
    let cityResults = this.state.cityData.map((city, index) => {
      console.log(index)
      return (
        <Results
          key={index}
          city={city}
          getWeather={this.getWeather}
        />
      );
    }
    );
    return (
      <>
        <Header />
        <Cityform
          handleCityCall={this.handleCityCall}
        />
        <main>
          {cityResults}
        </main>
        <Errormodal
          error={this.state.error}
          errorMessage={this.state.errorMessage}
          modalState={this.state.showModal}
          showModal={this.showModal}
          hideModal={this.hideModal}
        />
        <Weather
          weatherModal={this.state.weatherModal}
          hideweatherModal={this.hideModal}
          weatherData={this.state.weatherData}
        />
      </>
    );
  }
}
export default App;