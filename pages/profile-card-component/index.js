import Head from 'next/head';

import ProfileCardComponentComponent from '../../components/profile-card-component';

import style from './style.module.css';

const ProfileCardComponentPage = () => (
  <div className={style.profile_card_component}>
    <Head>
      <title>Frontend Mentor | Profile card component</title>
      <link rel="icon" src="/favicon.ico" />
    </Head>
    <ProfileCardComponentComponent />
  </div>
);

export default ProfileCardComponentPage;