import { Fragment } from 'react';
import Head from 'next/head';

import PodRequestAccessLandingPageComponent from '../../components/pod-request-access-landing-page'

const PodRequestAccessLandingPagePage = () => (
  <Fragment>
    <Head>
      <title>Frontend Mentor | Pod request access landing page</title>
      <link rel="icon" src="/favicon.ico" />
    </Head>
    <PodRequestAccessLandingPageComponent />
  </Fragment>
);

export default PodRequestAccessLandingPagePage;