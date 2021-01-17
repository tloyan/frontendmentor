import { Fragment } from 'react';
import Head from 'next/head';

import SinglePriceGridComponentComponent from '../../components/single-price-grid-component';

const SinglePriceGridComponentPage = () => (
  <Fragment>
    <Head>
      <title>Frontend Mentor | Single Price Grid Component</title>
      <link rel="icon" src="/favicon.ico" />
    </Head>
    <SinglePriceGridComponentComponent />
  </Fragment>
);

export default SinglePriceGridComponentPage;