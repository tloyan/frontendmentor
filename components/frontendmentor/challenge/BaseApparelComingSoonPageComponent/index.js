import { useState } from 'react';

import style from './style.module.css';

import IconArrow from 'public/frontendmentor/challenge/base-apparel-coming-soon-page/icon-arrow.svg';
import IconError from 'public/frontendmentor/challenge/base-apparel-coming-soon-page/icon-error.svg';

const regexEmail = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

const BaseApparelComingSoonPageComponent = () => {
  const [email, setEmail] = useState(undefined);
  const [error, setError] = useState(false);

  const handleError = () => {
    if (regexEmail.test(email.value)) return setError(false);
    setError(true);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') return handleError();
  }

  return (
    <div className={style.container}>
      <div className={style.main_content}>
        <div className={style.main_content_header}>
          <img src="/frontendmentor/challenge/base-apparel-coming-soon-page/logo.svg" />
        </div>
        <div className={style.image_mobile_wrapper}>
          <img src="/frontendmentor/challenge/base-apparel-coming-soon-page/hero-mobile.jpg" />
        </div>
        <div className={style.main_content_content}>
          <h1 className={style.content_title}>
            <span>We're</span>
            <span>coming</span>
            <span>soon</span>
          </h1>
          <p className={style.content_description}>
            Hello fellow shoppers! We're currently building our new fashion store. 
            Add your email below to stay up-to-date with announcements and our launch deals.
          </p>
          <div className={error ? style.content_input + ' ' + style.input_error_email : style.content_input}>
            <div className={style.input_wrapper}>
              <input
                type="email"
                placeholder="Email Address"
                className={ error ? style.input_error_email : '' }
                ref={(input) => setEmail(input)}
                onKeyDown={handleKeyDown}
              />
              { error && <IconError /> }
              <button onClick={handleError}><IconArrow /></button>
            </div>
            { error &&
              <p className={style.input_error}>
                Please provide a valid email
              </p>
            }
          </div>
        </div>
      </div>
      <div className={style.image_desktop_wrapper}>
        <img src="/frontendmentor/challenge/base-apparel-coming-soon-page/hero-desktop.jpg" />
      </div>
    </div>
  );
}

export default BaseApparelComingSoonPageComponent;