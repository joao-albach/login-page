import React from "react";
const Intl = jest.genMockFromModule("react-intl");

// Here goes intl context injected into component, feel free to extend
const intl = {
  formatMessage: ({ id }) => id,
  formatNumber: ({ value }) => value
};

Intl.injectIntl = Component => {
  const renderWrapped = props => <Component {...props} intl={intl} />;
  renderWrapped.displayName =
    Component.displayName || Component.name || "Component";
  renderWrapped.displayName = `injectIntl(${renderWrapped.displayName})`;
  return renderWrapped;
};

Intl.FormattedMessage = ({ id }) => <span>{id}</span>;
Intl.FormattedDate = ({ value }) => <span>{value}</span>;
Intl.FormattedNumber = ({ value }) => <span>{value}</span>;

Intl.mockIntlProp = intl;

Intl.IntlProvider = ({ children }) => children;

module.exports = Intl;
