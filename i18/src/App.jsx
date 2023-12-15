// App.js
import React from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    // <div>
    //   <h1>{t('Welcome to React')}</h1>
    //   <p>{t('Click the button to change the language.')}</p>
    //   <button onClick={() => changeLanguage('en')}>English</button>
    //   <button onClick={() => changeLanguage('fr')}>French</button>
    // </div>
    <button>Click</button>
  );
}

export default App;
