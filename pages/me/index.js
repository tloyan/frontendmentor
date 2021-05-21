import Head from 'next/head';
import { Fragment } from 'react';

import MenuComponent from '../../components/global/MenuComponent';
import MeComponent from '../../components/MeComponent';

const MePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Devways | Me </title>
        <link rel="icon" src="/favicon.ico" />
      </Head>
      <MenuComponent />
      <MeComponent />
    </Fragment>
  )
}

export default MePage;