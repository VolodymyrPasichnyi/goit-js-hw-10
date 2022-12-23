import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import debounce from 'lodash.debounce'
import Notiflix from 'notiflix'
import { countriesList, countryList } from './js/markup.';

const DEBOUNCE_DELAY = 300;
const search = document.querySelector('#search-box')
export const list = document.querySelector('.country-list')
const info = document.querySelector('.country-info')

search.addEventListener('input', debounce(e =>{
    const searchValue = search.value.trim()
       list.innerHTML = ''
       info.innerHTML = ''
    if (searchValue !== '') {
        fetchCountries(searchValue).then(data => {
            if (data.length > 10) {
                Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
            } 
            if (data.length >= 2 && data.length <= 10) {
                countriesList(data)
            } 
            if (data.length === 1) {
                countryList(data)
            }
            if (data.length === 0 ) {
                Notiflix.Notify.failure("Oops, there is no country with that name")
            }
        })
    } 
}, DEBOUNCE_DELAY))


