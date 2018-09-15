import * as React from 'react';
import './App.css';

import Form from "./components/InfoFields";
import Display from "./components/UI";


interface IState{
  actors: any,
  director: any,
  genre: any,
  plot: any,
  rating: any,
  release: any,
  title: any,
  writer: any,
  year: any
}

class App extends React.Component<{}, IState>{
  constructor(props:any){
    super(props);

    this.state = {
      actors: "",
      director: "",
      genre: "",
      plot: "",
      rating: "",
      release: "",
      title: "",
      writer: "",
      year: ""
    }
  }

  public lyricsFunc = async (x: any) => { 
    x.preventDefault();
    const movie = x.target.elements.movie.value;
    const result = await fetch(`http://www.omdbapi.com/?apikey=e86a4daa&t=${movie}`);
    const resp = await result.json();
    this.setState({
      actors: resp.Actors,
      director: resp.Director,
      genre: resp.Genre,
      plot: resp.Plot,
      rating: resp.Rated,
      release: resp.Released,
      title: resp.Title,
      writer: resp.Writer,
      year: resp.Year
    });
  }

  public render() {
    return (
      <div>
        <Form lyricsFunc={this.lyricsFunc}/>
        <Display
          actors = {this.state.actors}
          director = {this.state.director}
          genre = {this.state.genre}
          year = {this.state.year}
          plot = {this.state.plot}
          rating = {this.state.rating}
          release = {this.state.release}
          title = {this.state.title}
          writer = {this.state.writer}
        />
      </div>
    );
  }
}

export default App;