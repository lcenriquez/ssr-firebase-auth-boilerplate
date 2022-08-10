import Head from 'next/head';
import { useContext } from 'react';
import { Context } from '../context';

export default function Home() {
  const { state } = useContext(Context);
  return (
    <div>
      <Head>
        <title>Firebase with SSR</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h2>Home page</h2>
      {JSON.stringify(state)}
    </div>
  );
}
