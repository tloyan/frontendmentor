import Head from 'next/head';

import FaqAccordionCardComponent from 'components/frontendmentor/challenge/FaqAccordionCardComponent';

import style from './style.module.css';

const FaqAccordionCardPage = () => (
  <div className={style.faq_accordion_card}>
    <Head>
      <title>Frontend Mentor | FAQ Accordion Card</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <FaqAccordionCardComponent />
  </div>
);

export default FaqAccordionCardPage;