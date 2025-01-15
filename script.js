const translations = {
    en: {
        title: "Welcome to Ape, Latvia",
        sectionTitle: "About Ape",
        sectionText: "Ape is a small town in Latvia, known for its beautiful nature and rich cultural heritage.",
        population: "Population: ~800 people",
        weatherTitle: "Current Weather in Ape, Latvia",
        loadingWeather: "Loading weather data...",
        weatherDescription: "Weather conditions: ",
        temperature: "Temperature: ",
        humidity: "Humidity: ",
        windSpeed: "Wind speed: ",
        errorLoadingWeather: "Failed to load weather data."
    },
    lv: {
        title: "Laipni lūdzam Apei, Latvijā",
        sectionTitle: "Par Apei",
        sectionText: "Ape ir maza pilsēta Latvijā, kas pazīstama ar savu skaisto dabu un bagāto kultūras mantojumu.",
        population: "Iedzīvotāju skaits: ~800 cilvēki",
        weatherTitle: "Pašreizējie laikapstākļi Apei, Latvijā",
        loadingWeather: "Notiek laikapstākļu datu ielāde...",
        weatherDescription: "Laikapstākļi: ",
        temperature: "Temperatūra: ",
        humidity: "Mitrums: ",
        windSpeed: "Vēja ātrums: ",
        errorLoadingWeather: "Neizdevās ielādēt laikapstākļu datus."
    },
    ru: {
        title: "Добро пожаловать в Апе, Латвия",
        sectionTitle: "Об Апе",
        sectionText: "Апе — небольшой городок в Латвии, известный своей красивой природой и богатым культурным наследием.",
        population: "Население: ~800 человек",
        weatherTitle: "Текущая погода в Апе, Латвия",
        loadingWeather: "Загрузка данных о погоде...",
        weatherDescription: "Погодные условия: ",
        temperature: "Температура: ",
        humidity: "Влажность: ",
        windSpeed: "Скорость ветра: ",
        errorLoadingWeather: "Не удалось загрузить данные о погоде."
    }
};

function changeLanguage(lang) {
    document.getElementById("site-title").textContent = translations[lang].title;
    document.getElementById("section-title").textContent = translations[lang].sectionTitle;
    document.getElementById("section-text").textContent = translations[lang].sectionText;
    document.getElementById("population").textContent
