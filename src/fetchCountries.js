const BASE_URL = 'https://restcountries.com/v3.1/';
const options = '';

export function fetchCountries(value) {
    return fetch(`${BASE_URL}name/${value}?fields=name,capital,population,flags,languages`)
        .then(response => {
            if (!response.ok) {
                throw Error(response.status);
            };

            return response.json();
        });
}