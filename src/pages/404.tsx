import Layout from '@/layouts/default';
import Image from 'next/image';
import Head from 'next/head';

export default function Page() {
  return (
    <Layout className='bg-[#121212]'>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Page not found - Standaard Events</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
      </Head>

      <div className='flex items-center justify-center min-h-screen'>
        <article className='text-white text-center max-w-[300px]'>
          <Image src="logo.svg" width={40} height={40} alt="Logo" className='inline-block'/>
          <div className='mt-4'>
            <h1 className='text-2xl mb-4 font-medium'>Oops, we can&apos;t find what you&apos;re looking for</h1>
            <p className='text-neutral-400'>
              Unfortunately we cannot find what you are looking for. 
              We would like to apologize for that. Feel free to 
              contact us through Instagram or email.  
            </p>
          </div>
        </article>
      </div>
    </Layout>
  );
}