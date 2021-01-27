import { Formik } from 'formik';
import * as Yup from 'yup';

import Logo from 'public/frontendmentor/challenge/pod-request-access-landing-page/logo.svg';
import SpotifyIcon from 'public/frontendmentor/challenge/pod-request-access-landing-page/spotify.svg';
import ApplePodcastIcon from 'public/frontendmentor/challenge/pod-request-access-landing-page/apple-podcast.svg';
import GooglePodcastIcon from 'public/frontendmentor/challenge/pod-request-access-landing-page/google-podcasts.svg';
import PocketcastsIcon from 'public/frontendmentor/challenge/pod-request-access-landing-page/pocket-casts.svg';

import style from './style.module.css';

const PodRequestAccessLandingPageComponent = () => (
  <div className={style.container}>
    <div className={style.wrapper}>
      <div className={style.header}>
        <Logo />
      </div>
      <div className={style.main}>
        <h1><span>Publish your podcasts</span><span>everywhere.</span></h1>
        <p>
          Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, 
          Apple Podcasts, Google Podcasts, Pocket Casts and more!
        </p>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={
            Yup.object().shape({
              email: Yup.string().email('Oops! Please check your email').required('Oops! Please check your email'),
            })
          }
        >
          {
            (({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
              <form className={style.input_container} onSubmit={handleSubmit}>
                <input
                  type='email'
                  name='email'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  placeholder='Email Address'
                />
                { touched.email && errors.email && <p className={style.error_message}>{errors.email}</p>}
                <button type='submit' disabled={isSubmitting}>Request access</button>
              </form>
            ))
          }
        </Formik>
        <div className={style.icon_container}>
          <SpotifyIcon />
          <ApplePodcastIcon />
          <GooglePodcastIcon />
          <PocketcastsIcon />
        </div>
      </div>
    </div>
  </div>
);

export default PodRequestAccessLandingPageComponent;