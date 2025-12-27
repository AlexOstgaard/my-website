import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import no from "./i18n/no.json"
import en from "./i18n/en.json"

const savedLanguage = localStorage.getItem("language") || "no"

i18n
    .use(initReactI18next)
    .init({
        resources: {
            no: {translation: no },
            en: { translation: en },
        },
        lng: savedLanguage,
        fallbackLng: "no",
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n;