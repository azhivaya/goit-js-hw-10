export function createCountriesList(Arr) {
    return Arr.map(({flags, name}) => `<li><img src='${flags.svg}' alt='${name.common}'>${name.official}</li>`).join('');
}