import { Fragment } from 'react';
import Head from 'next/head';

import ArticlePreviewComponent from 'components/frontendmentor/challenge/ArticlePreviewComponent';

const ArticlePreviewComponentPage = () => (
  <Fragment>
    <Head>
      <title>Frontend Mentor | Article preview component</title>
      <link rel="icon" src="/favicon.ico" />
    </Head>
    <ArticlePreviewComponent />
  </Fragment>
);

export default ArticlePreviewComponentPage;