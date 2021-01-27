import Head from 'next/head';

import SocialProofSectionComponent from 'components/frontendmentor/challenge/SocialProofSectionComponent';

import style from './style.module.css';

const SocialProofSectionPage = () => (
  <div className={style.social_proof_section}>
    <Head>
      <title>Frontend Mentor | Social proof section</title>
      <link rel="icon" src="/favicon.ico" />
    </Head>
    <SocialProofSectionComponent />
  </div>
);

export default SocialProofSectionPage;