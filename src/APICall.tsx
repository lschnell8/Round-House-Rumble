export const getData = () => {
  return fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .catch(error => console.log(error))
}

