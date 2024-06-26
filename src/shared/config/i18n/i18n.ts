import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'

i18n
  .use(Backend)
  //.use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },

    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  })


export default i18n
