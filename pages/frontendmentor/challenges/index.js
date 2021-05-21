import { Fragment } from 'react';
import Head from 'next/head'

import MenuComponent from '../../../components/global/MenuComponent';
import ChallengesComponent from '../../../components/frontendmentor/ChallengesComponent';

export default function ChallengesPage() {
  return (
    <Fragment>
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuComponent />
      <ChallengesComponent />
    </Fragment>
  )
}
