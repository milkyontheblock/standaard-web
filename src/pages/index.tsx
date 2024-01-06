import Layout from '@/layouts/default';
import Head from 'next/head';
import Script from 'next/script';

export default function Page() {
  return (
    <Layout className='bg-[#121212]'>
      <Head>
        <title>Tickets - Standaard: The After Hours</title>
        <meta name="description" content="Join the Hard Techno after party in the Barkade, Den Bosch with AXL, Jayron, JØNAS & FØXA" key="desc" />
        <meta property="og:title" content="Tickets - Standaard: The After Hours" />
        <meta
          property="og:description"
          content="Join the Hard Techno after party in the Barkade, Den Bosch with AXL, Jayron, JØNAS & FØXA"
        />
        <meta
          property="og:image"
          content="/images/og.png"
        />
      </Head>

      <div 
        id="shop-frame" 
        data-url="https://shop.eventix.io/b0b5c9fa-4cda-487d-bfcb-bf4dd600db8d" 
        style={{maxWidth: '600px', margin:'0 auto'}}>
      </div>

      <Script src="https://shop.eventix.io/build/integrate.js" defer></Script>
    </Layout>
  );
}