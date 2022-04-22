import React from  'react';
import '../Header.css'


class Moviedata extends React.Component {

render(){

  return (
    <>
    <h1>{this.props.movie.title}</h1>
    
    <p>{this.props.movie.description}</p>
    <p>Language: {this.props.movie.language}</p>
    </>
  );
}
}

export default Moviedata;