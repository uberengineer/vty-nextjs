import Head from 'next/head';
import SimpleReactLightbox from 'simple-react-lightbox';

import Landing from './landing';
import MachinePark from './machinepark';
import Products from './products';
import About from './about';
import Footer from './footer';
import Navbar from './navbar';

export default function Index() {
  return (
    <SimpleReactLightbox>
      <Head>
        <title>VTY</title>
        <meta name="description" content="VTY" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Landing />
      <MachinePark />
      <Products />
      <About />
      <Footer />
      </SimpleReactLightbox>
  );
};
