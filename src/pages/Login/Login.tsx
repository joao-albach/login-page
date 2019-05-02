import React from "react";
import styles from "./Login.module.scss";
import Logo from "images/logo.svg";
import { FormattedMessage, injectIntl, InjectedIntlProps } from "react-intl";
import Button from "components/Button";

interface Props extends InjectedIntlProps {}

function Login(props: Props) {
  const [email, setEmail] = React.useState("");

  return (
    <div className={styles.login}>
      <div className={styles["login__title-container"]}>
        <div className={styles.login__logo}>
          <img src={Logo} alt="Logo" />
        </div>
        <h2 className={styles.login__title}>
          <FormattedMessage id="login.title" />
        </h2>
        <p className={styles.login__subtitle}>
          <FormattedMessage
            id="login.subtitle"
            values={{ productName: "GO" }}
          />
        </p>
      </div>

      <form action="">
        <label htmlFor="user">
          <FormattedMessage id="login.email.label" />
        </label>
        <input
          type="email"
          name="user"
          placeholder={props.intl.formatMessage({
            id: "login.email.placeholder"
          })}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="password">
          <FormattedMessage id="login.password.label" />
        </label>
        <input
          type="password"
          name="password"
          placeholder={props.intl.formatMessage({
            id: "login.password.placeholder"
          })}
        />

        <div className={styles.login__actions}>
          <a href="/signup">
            <FormattedMessage id="login.signup-link" />
          </a>

          <Button>
            <FormattedMessage id="login.button" />
          </Button>
        </div>
      </form>
    </div>
  );
}

export default injectIntl(Login);
