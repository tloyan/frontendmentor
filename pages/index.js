import { Fragment } from 'react';
import Head from 'next/head'

import Home from 'components/Home'

export default function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </Fragment>
  )
}
