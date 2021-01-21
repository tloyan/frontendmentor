import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

import Logo from '../../public/huddle-landing-page-with-single-introductory-section/logo.svg';

import style from './style.module.css';

const HuddleLandingPageWithSingleIntroductorySectionComponent = () => (
  <div className={style.container}>
    <div className={style.header}>
      <Logo />
    </div>
    <div className={style.main}>
      <div className={style.main_image}>
        <img src="/huddle-landing-page-with-single-introductory-section/illustration-mockups.svg" />
      </div>
      <div className={style.main_content}>
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
          Create connections with your users as you engage in genuine discussion.
        </p>
        <button>Register</button>
      </div>
    </div>
    <div className={style.footer}>
      <button><FontAwesomeIcon icon={faFacebookF} /></button>
      <button><FontAwesomeIcon icon={faTwitter} /></button>
      <button><FontAwesomeIcon icon={faInstagram} /></button>
    </div>
  </div>
)

export default HuddleLandingPageWithSingleIntroductorySectionComponent;