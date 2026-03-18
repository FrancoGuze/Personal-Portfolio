import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import enNavbar from "./en/navbar.json"
import enHero from "./en/hero.json"
import enAbout from "./en/about.json"
import enSkills from "./en/skills.json"
import enProjects from "./en/projects.json"
import enContact from "./en/contact.json"
import enFooter from "./en/footer.json"

import esNavbar from "./es/navbar.json"
import esHero from "./es/hero.json"
import esAbout from "./es/about.json"
import esSkills from "./es/skills.json"
import esProjects from "./es/projects.json"
import esContact from "./es/contact.json"
import esFooter from "./es/footer.json"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          navbar: enNavbar,
          hero: enHero,
          about: enAbout,
          skills: enSkills,
          projects: enProjects,
          contact: enContact,
          footer: enFooter,
        },
      },
      es: {
        translation: {
          navbar: esNavbar,
          hero: esHero,
          about: esAbout,
          skills: esSkills,
          projects: esProjects,
          contact: esContact,
          footer: esFooter,
        },
      },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "es"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    react: {
      useSuspense: false,
    },
  })

export default i18n
