import { languagesList } from "./languagesList";

export function createCountryData({ name, capital, population, flags, languages }) {
    return `<div>
   <div class='country-wrap'><img src='${flags.svg}' alt='${name.common}'> <p class='country__name'>${name.official}</p></div>
<p>Capital: <span>${capital}</span></p>
<p>Population: <span>${population}</span> </p>
<p>Languages: <span>${languagesList(languages)}</span></p>
</div>`;
}