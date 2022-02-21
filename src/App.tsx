import React, {Component} from 'react';
import './App.scss';
import  { getData }  from './apiCalls';
import Header from './Components/Header/Header'
import RandomJokeContainer from './Components/RandomJokeContainer/RandomJokeContainer';



class App extends Component{
  state = {
    iconURL: '',
    id: '',
    value: ''
  }

  componentDidMount() {
    getData()
      .then(data => {
        this.setState({ iconURL: data.icon_url, id: data.id, value: data.value })
        console.log(this.state)
      })
  }

  render () {
    return (
      <main className="app">
        <Header />
        <RandomJokeContainer chuckJoke={this.state.value} icon={this.state.iconURL} id={this.state.id}/>
      </main>
    )
  }
}
  
// interface State {
//   joke: RandomJoke[];
// }
  
// class App extends Component { 
//   state: State = {
//     joke: []
//   };
  
//   componentDidMount = () => {
//     getData()
//     // .then((response) => response.json())
//     .then((data) => {
//       this.setState({ joke: data })
//       console.log('this.state >>>>', this.state)
//     })
//     // .catch(error => console.log(error))
//   }
  
//   render() {
    
//     const jokeValue = this.state.joke[0].value;
//     // const jokeIcon = this.state.joke[0].icon_url;

//     // console.log(jokeIcon)
//     console.log('jokeValue >>>>', jokeValue)
//     // console.log('jokeIcon >>>>' jokeIcon)

//     return (
//       <main className="App">
//         {jokeValue}
//         {/* <img src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" alt='joke icon'/> */}
//       </main>
//     ) 
//   }
// };

export default App;
