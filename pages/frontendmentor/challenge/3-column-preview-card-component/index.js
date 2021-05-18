import Head from 'next/head';
import { Fragment } from 'react';

import ThreeColumnPreviewCardComponent from '../../../../components/frontendmentor/challenge/ThreeColumnPreviewCardComponent';


const ThreeColumnPreviewCardComponentPage = () => (
  <Fragment>
    <Head>
      <title>Frontend Mentor | 3-column preview card component</title>
      <link rel="icon" src="/favicon.ico" />
    </Head>
    <ThreeColumnPreviewCardComponent />
  </Fragment>
);

export default ThreeColumnPreviewCardComponentPage;