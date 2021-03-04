import Head from 'next/head';

import { Fragment } from 'react';

import FaqAccordionCardComponent from 'components/frontendmentor/challenge/FaqAccordionCardComponent';

const FaqAccordionCardPage = () => (
  <Fragment>
    <Head>
      <title>Frontend Mentor | FAQ Accordion Card</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <FaqAccordionCardComponent />
  </Fragment>
);

export default FaqAccordionCardPage;