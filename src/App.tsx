import './App.css';
import React, { Component } from 'react';
import { getData} from './apiCalls'

interface RandomJoke {
  categories: [],
  created_at: string,
  icon_url: string,
  id: string,
  update_at: string,
  url: string,
  value: string
}
  
interface State {
  joke: RandomJoke[];
}
  
class App extends Component { 
  state: State = {
    joke: []
  };
  
  componentDidMount = () => {
    getData()
    // .then((response) => response.json())
    .then((data) => {
      this.setState({ joke: data })
      console.log('this.state >>>>', this.state)
    })
    // .catch(error => console.log(error))
  }
  
  render() {
    
    const jokeValue = this.state.joke[0].value;
    // const jokeIcon = this.state.joke[0].icon_url;

    // console.log(jokeIcon)
    console.log('jokeValue >>>>', jokeValue)
    // console.log('jokeIcon >>>>' jokeIcon)

    return (
      <main className="App">
        {jokeValue}
        {/* <img src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" alt='joke icon'/> */}
      </main>
    ) 
  }
};

export default App;
