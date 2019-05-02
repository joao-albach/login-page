import React from "react";
import Login from "pages/Login";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import enMessages from "translations/en.json";

addLocaleData([...en]);

function App() {
  return (
    <IntlProvider locale="en" messages={enMessages}>
      <div className="wrapper">
        <Login />
      </div>
    </IntlProvider>
  );
}

export default App;
