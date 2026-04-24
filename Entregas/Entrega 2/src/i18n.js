const SUPPORTED_LANGUAGES = ['es', 'en', 'pt'];
const DEFAULT_LANGUAGE = 'es';
const STORAGE_KEY = 'preferredLanguage';

let translations = {};
let currentLanguage = DEFAULT_LANGUAGE;

async function loadTranslations(lang) {
    try {
        const response = await fetch(`translations/${lang}.json`);
        if (!response.ok) throw new Error(`Failed to load ${lang}.json`);
        translations = await response.json();
        currentLanguage = lang;
    } catch (error) {
        console.error('Error loading translations:', error);
    }
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedValue(translations, key);
        if (translation) {
            element.innerHTML = translation;
        }
    });
}

function getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
}

async function setLanguage(lang) {
    if (!SUPPORTED_LANGUAGES.includes(lang)) return;
    
    localStorage.setItem(STORAGE_KEY, lang);
    await loadTranslations(lang);
    applyTranslations();
    
    const languageSelector = document.getElementById('language');
    if (languageSelector) {
        languageSelector.value = lang;
    }
}

function getSavedLanguage() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANGUAGE;
}

async function initI18n() {
    const savedLang = getSavedLanguage();
    await setLanguage(savedLang);
}

document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('language');
    if (languageSelector) {
        languageSelector.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }
    
    initI18n();
});