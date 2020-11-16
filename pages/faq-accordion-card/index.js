import { Fragment } from 'react';
import Head from 'next/head';

import FaqAccordionCardComponent from '../../components/faq-accordion-card';

import style from './style.module.css';

const FaqAccordionCardPage = () => (
  <div className={style.faq_accordion_card}>
    <Head>
      <title>Frontend Mentor | FAQ Accordion Card</title>
      <link rel="icon" href="/faq-accordion-card/favicon-32x32.png" />
    </Head>
    <FaqAccordionCardComponent />
  </div>
);

export default FaqAccordionCardPage;