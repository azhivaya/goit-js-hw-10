export function languagesList(lang) {
    const langArr = Object.values(lang);

    return langArr.reduce((sumLang, lang, index) => {
        if (index === 0) {
            return sumLang + lang;
        };

        return sumLang + ", " + lang;
    }, '');
};
