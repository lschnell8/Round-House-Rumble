export interface Joke {
  icon: string;
  id: string;
  chuckJoke: string;
  isFavorited: boolean;
}

export interface RandomJoke {
  joke: Joke,
  handleFavoriting(selectedJoke: Joke): void,
  getNewJoke(): void
}

export interface Props {
  favorites: { chuckJoke: string; icon: string; id: string; isFavorited: boolean; }[],
  handleFavoriting(selectedJoke: Joke): void,
}