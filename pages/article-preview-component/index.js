import Head from 'next/head';

import ArticlePreviewComponentComponent from '../../components/article-preview-component';

import style from './style.module.css';

const ArticlePreviewComponentPage = () => (
  <div className={style.article_preview_component_page}>
    <Head>
      <title>Frontend Mentor | Article preview component</title>
      <link rel="icon" src="/favicon.ico" />
    </Head>
    <ArticlePreviewComponentComponent />
  </div>
);

export default ArticlePreviewComponentPage;