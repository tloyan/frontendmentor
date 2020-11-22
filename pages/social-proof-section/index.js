import Head from 'next/head';

import SocialProofSectionComponent from '../../components/social-proof-section';

import style from './style.module.css';

const SocialProofSection = () => (
  <div className={style.social_proof_section}>
    <Head>
      <title>Frontend Mentor | Social proof section</title>
      <link rel="icon" src="/favicon.ico" />
    </Head>
    <SocialProofSectionComponent />
  </div>
);

export default SocialProofSection;