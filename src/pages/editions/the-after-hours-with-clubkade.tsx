import Layout from '@/layouts/default';
import Head from 'next/head';
import Script from 'next/script';

export default function Page() {
  return (
    <Layout className='bg-[#121212]'>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Tickets - Standaard: The After Hours</title>
        <meta name="description" content="Join the Hard Techno after party on January 13th in the Barkade, Den Bosch. Doors open from 23:00 to 04:00 with AXL, Jayron, JØNAS & FØXA. Get your tickets now for an unforgettable night!" />

        <meta property="og:title" content="Tickets - Standaard: The After Hours" />
        <meta property="og:description" content="Join the Hard Techno after party on January 13th in the Barkade, Den Bosch. Doors open from 23:00 to 04:00 with AXL, Jayron, JØNAS & FØXA. Get your tickets now for an unforgettable night!" />
        <meta property="og:image" content="/images/og.webp" />
        <meta property="article:published_time" content="2024-01-06T18:19:58.782Z" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tickets - Standaard: The After Hours" />
        <meta name="twitter:description" content="Join the Hard Techno after party on January 13th in the Barkade, Den Bosch. Doors open from 23:00 to 04:00 with AXL, Jayron, JØNAS & FØXA. Get your tickets now for an unforgettable night!" />
        <meta name="twitter:image" content="/images/og.webp" />
        <meta name="twitter:site" content="@milkyontheblock" />
        <meta name="twitter:creator" content="@milkyontheblock" />

        <meta name="keywords" content="Hard Techno, After party, Den Bosch, AXL, Jayron, JØNAS, FØXA, Barkade, Clubkade, tickets" />
        <meta name="author" content="Standaard Events" />
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="/" />

        <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
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