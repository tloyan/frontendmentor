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
      <style jsx global>{`
        html, body {
          scroll-behavior: smooth;
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        body::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        body {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
      <MenuComponent />
      <MeComponent />
    </Fragment>
  )
}

export default MePage;