import { list } from ".."

export function countriesList(countries) {
    const country = countries.map(el => {
        return `
          <li>
           <img src="${el.flags.svg}" alt="${el.name.official}" width=100>
           <p>${el.name.official}</p>
          </li>
          `
        })
        .join('')
        list.innerHTML = country
  }

export function countryList(countries) {
    const markup = countries.map(el => {
        return `
           <li>
           <img src="${el.flags.svg}" alt="${el.name.official}" width=150>
              <p>${el.name.official}</p>
              <p>Capital: ${el.capital}</p>
              <p>Population: ${el.population}</p>
              <p>Languages: ${Object.values(el.languages)} </p>
          </li>
              `
          })
        .join('')
        list.innerHTML = markup
  }

