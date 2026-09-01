import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Check if language was previously selected in localStorage
  const savedLang = localStorage.getItem('sipa_lang');
  const [lang, setLangState] = useState(savedLang || 'id');
  
  // Show modal if user has never selected a language before
  const [showModal, setShowModal] = useState(!savedLang);

  const setLanguage = (selectedLang) => {
    setLangState(selectedLang);
    localStorage.setItem('sipa_lang', selectedLang);
    setShowModal(false);
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Translation helper function
  const t = (key) => {
    return translations[lang]?.[key] || translations['id']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, showModal, openModal, closeModal, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
