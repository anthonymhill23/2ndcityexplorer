import React from  'react';
import '../Header.css'


class Weatherdata extends React.Component {

render(){

  return (
    <>
    <p>Date: {this.props.weather.date} Forecast: {this.props.weather.description}</p>
    </>
  );
}
}

export default Weatherdata;