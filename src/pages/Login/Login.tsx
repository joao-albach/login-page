import React from "react";
import styles from "./Login.module.scss";
import Logo from "images/logo.svg";
import { FormattedMessage, injectIntl, InjectedIntlProps } from "react-intl";
import Button from "components/Button";
import { validateEmail, validatePassword } from "utils/validators";
import InputErrorMessage from "components/InputErrorMessage";

interface Props extends InjectedIntlProps {}

function Login(props: Props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState<{
    email: string | null;
    password: string | null;
  }>({ email: null, password: null });

  const validateEmailInput = (email: string) => {
    if (!validateEmail(email)) {
      setErrors(errors => ({
        ...errors,
        email: props.intl.formatMessage({ id: "login.email.error-message" })
      }));
    } else {
      setErrors(errors => ({
        ...errors,
        email: null
      }));
    }
  };

  const validatePasswordInput = (password: string) => {
    if (!validatePassword(password)) {
      setErrors(errors => ({
        ...errors,
        password: props.intl.formatMessage({
          id: "login.password.error-message"
        })
      }));
    } else {
      setErrors(errors => ({
        ...errors,
        password: null
      }));
    }
  };

  const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    validateEmailInput(email);
  };

  const handlePasswordBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    validatePasswordInput(password);
  };

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
        <fieldset>
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
            onBlur={handleEmailBlur}
          />
          <div id="email-error">
            {errors.email && <InputErrorMessage message={errors.email} />}
          </div>
        </fieldset>
        <label htmlFor="password">
          <FormattedMessage id="login.password.label" />
        </label>
        <input
          type="password"
          name="password"
          placeholder={props.intl.formatMessage({
            id: "login.password.placeholder"
          })}
          value={password}
          onChange={e => setPassword(e.target.value)}
          onBlur={handlePasswordBlur}
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
