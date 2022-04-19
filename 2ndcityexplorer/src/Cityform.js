import React from  'react';
import {Form, FormGroup} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './Cityform.css'


class Cityform extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchQuery:'Seattle',
    };
  };
  searchCity = () => {
    this.props.handleCityCall(this.state.searchQuery);}
render(){
  return (
    <>
    <Form className="search">
    <FormGroup>
      <Form.Label>Pick a City:</Form.Label>
      <Form.Control type="text" onChange={(e) => this.setState({searchQuery: e.target.value})} placeholder="search for a city" />
      <Button onClick={this.searchCity}>Explore!</Button>
    </FormGroup>
    </Form>       
    </>
  );
}
}

export default Cityform;