export function fetchCountries(name) {
  const BASE_URL = 'https://restcountries.com/v3.1/'
  const url = `${BASE_URL}name/${name}?fields=name,capital,population,flags,languages`
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        if (response.status === 404) {
          return []
        }
        throw new Error(response.status)
      }
      return response.json()
    })
    .catch(error => {
      console.error(error)
    })
}
