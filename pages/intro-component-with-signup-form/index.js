import { Fragment } from 'react';
import Head from 'next/head';

import IntroComponentWithSignupFormComponent from '../../components/intro-component-with-signup-form';

const IntroComponentWithSignupFormPage = () => (
  <Fragment>
    <Head>
      <title>Frontend Mentor | Intro component with sign up form</title>
      <link rel="icon" src="/favicon.ico" />
    </Head>
    <IntroComponentWithSignupFormComponent />
  </Fragment>
);

export default IntroComponentWithSignupFormPage;