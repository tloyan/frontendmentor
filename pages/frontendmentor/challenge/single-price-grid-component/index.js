import { Fragment } from 'react';
import Head from 'next/head';

import SinglePriceGridComponent from 'components/frontendmentor/challenge/SinglePriceGridComponent';

const SinglePriceGridComponentPage = () => (
  <Fragment>
    <Head>
      <title>Frontend Mentor | Single Price Grid Component</title>
      <link rel="icon" src="/favicon.ico" />
    </Head>
    <SinglePriceGridComponent />
  </Fragment>
);

export default SinglePriceGridComponentPage;