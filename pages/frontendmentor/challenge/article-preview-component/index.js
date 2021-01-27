import Head from 'next/head';

import ArticlePreviewComponent from 'components/frontendmentor/challenge/ArticlePreviewComponent';

import style from './style.module.css';

const ArticlePreviewComponentPage = () => (
  <div className={style.article_preview_component_page}>
    <Head>
      <title>Frontend Mentor | Article preview component</title>
      <link rel="icon" src="/favicon.ico" />
    </Head>
    <ArticlePreviewComponent />
  </div>
);

export default ArticlePreviewComponentPage;