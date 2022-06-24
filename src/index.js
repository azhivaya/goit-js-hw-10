import './css/styles.css';
import debounce from 'lodash.debounce'; 
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries';
import { createCountryData } from './createCountryData';
import { createCountriesList } from './createCountriesList';

const DEBOUNCE_DELAY = 300;

const inputRef = document.querySelector('#search-box');
const countryListRef = document.querySelector('.country-list');
const countryInfoRef = document.querySelector('.country-info');

inputRef.addEventListener('input', debounce(e => onInputFilter(e), DEBOUNCE_DELAY));

function onInputFilter(e) {
    // e.preventDefault();

    const value = e.target.value.trim();
    if (!value) {
        clearData();
        return;
    }

    fetchCountries(value)
    .then(countriesArr => filteredCountries(countriesArr))
    .catch(error);
    
}

function filteredCountries(countriesArr) {
    const countriesQuantity = countriesArr.length;

    if (countriesQuantity > 10) {
        Notify.info('Too many matches found. Please enter a more specific name.');
        
        return;
    } 

    clearData();

    if (countriesQuantity >= 2) {
        countryListRef.innerHTML = createCountriesList(countriesArr);

        return;
    }
    countryInfoRef.innerHTML = createCountryData(countriesArr[0]);
}

function clearData() {
    countryListRef.innerHTML = '';
    countryInfoRef.innerHTML = '';
}

function error() {
    Notify.failure('Oops, there is no country with that name');
}






