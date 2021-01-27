import Head from 'next/head';

import ProfileCardComponent from 'components/frontendmentor/challenge/ProfileCardComponent';

import style from './style.module.css';

const ProfileCardComponentPage = () => (
  <div className={style.profile_card_component}>
    <Head>
      <title>Frontend Mentor | Profile card component</title>
      <link rel="icon" src="/favicon.ico" />
    </Head>
    <ProfileCardComponent />
  </div>
);

export default ProfileCardComponentPage;