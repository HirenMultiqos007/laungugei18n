import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client';
import "./i18/i18"
import { useTranslation, initReactI18next } from "react-i18next";
import App from './App.jsx'
import './index.css'

const root = createRoot(document.getElementById('root'));

root.render(
  <App />
);