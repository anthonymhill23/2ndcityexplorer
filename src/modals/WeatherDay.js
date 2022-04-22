import React from  'react';
import '../Header.css'


class WeatherDay extends React.Component {

render(){

  return (
    <>
    <p>Date: {this.props.weather.date} Forecast: {this.props.weather.description}</p>
    </>
  );
}
}

export default WeatherDay;