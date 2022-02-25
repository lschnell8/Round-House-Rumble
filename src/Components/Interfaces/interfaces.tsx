export interface Joke {
  icon: string;
  id: string;
  chuckJoke: string;
  isFavorited: boolean;
}

// export interface Favorites {
//   favorites: [{ chuckJoke: string; icon: string; id: string; isFavorited: boolean; }];
// }

// export interface Store {
//   storeUserJoke: (joke: Joke) => void; 
// }

// export interface Props {
//   favorites: Joke[];
// }

// export interface Joke {
//   icon: string;
//   id: string;
//   chuckJoke: string;
//   isFavorited: boolean
// }

export interface RandomJoke {
  joke: Joke, 
  handleFavoriting(joke: Joke): void
}