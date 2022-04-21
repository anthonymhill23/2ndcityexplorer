import React from 'react';
import { Card } from 'react-bootstrap';
import './Results.css'
import { Button } from 'react-bootstrap';



class Results extends React.Component {
  getInfo = () =>{
    this.props.getWeather(this.props.city.display_name.split(',')[0])
  }
  getMovies = () =>{
      this.props.getMovies(this.props.city.display_name.split(',')[0])
    }
  getInfoOne = () =>{
      this.props.getWeatherOne(this.props.city.display_name.split(',')[0])
    }
  render() {
  let mapurl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.city.lat},${this.props.city.lon}&zoom=14`
  return (
      <>
        <Card>
          <Card.Img variant="top" src={mapurl} />
          <Card.Title>{this.props.city.display_name}</Card.Title>
          <Card.Body>
            <Card.Text>Latitude: {this.props.city.lat}</Card.Text>
            <Card.Text>Longitiude:{this.props.city.lon}</Card.Text>
          </Card.Body>
          <Button onClick={this.getInfo}>Get Weather</Button>
          <Button onClick={this.getInfoOne}>Get Daily Forecast</Button>
          <Button onClick={this.getMovies}>Get Movies</Button>
        </Card>
      </>
    );
  }
}
export default Results;