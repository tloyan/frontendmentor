import { Formik } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

import Logo from '../../../../public/frontendmentor/challenge/ping-coming-soon-page/logo.svg';

import style from './style.module.css';

const PingComingSoonPageComponent = () => (
  <div className={style.container}>
    <div className={style.container_centered}>
      <div className={style.header_container}>
        <div className={style.logo_container}><Logo /></div>
        <h1 className={style.title}>We are launching <span>soon!</span></h1>
        <p className={style.text}>Subscribe and get notified</p>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={
            Yup.object().shape({
              email: Yup.string().email('Please provide a valid email address').required('Please provide a valid email address')
            })
          }
        >
          {
            ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
              <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.input_wrapper}>
                  <input
                    type='text'
                    name='email'
                    placeholder='Your email address'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={touched.email && errors.email && style.input_error}
                  />
                  { touched.email && errors.email && <p className={style.error_message}>{errors.email}</p> }
                </div>
                <button type='submit' disabled={isSubmitting}>Notify Me</button>
              </form>
            )
          }
        </Formik>
      </div>
      
      <div className={style.illustration_image_wrapper}><img src='/frontendmentor/challenge/ping-coming-soon-page/illustration-dashboard.png' /></div>
      <div className={style.share_container}>
        <button>
          <FontAwesomeIcon icon={faFacebookF} />
        </button>
        <button>
          <FontAwesomeIcon icon={faTwitter} />
        </button>
        <button>
          <FontAwesomeIcon icon={faInstagram} />
        </button>
      </div>
      <p className={style.copyright_text}>© Copyright Ping. All rights reserved.</p>
    </div>
  </div>
);

export default PingComingSoonPageComponent;