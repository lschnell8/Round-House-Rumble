export interface Joke {
  icon: string;
  id: string;
  chuckJoke: string;
  isFavorited: boolean;
}

export interface RandomJoke {
  joke: Joke, 
  handleFavoriting(joke: Joke): void
}