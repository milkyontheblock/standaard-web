import Layout from '@/layouts/default';
import Script from 'next/script';

export default function Page() {
  return (
    <Layout className='bg-[#121212]'>
      <div 
        id="shop-frame" 
        data-url="https://shop.eventix.io/b0b5c9fa-4cda-487d-bfcb-bf4dd600db8d" 
        style={{maxWidth: '600px', margin:'0 auto'}}>
      </div>

      <Script src="https://shop.eventix.io/build/integrate.js"></Script>
    </Layout>
  );
}