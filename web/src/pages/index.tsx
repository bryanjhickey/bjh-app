import Layout from '@/components/Layout';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <meta
          name="facebook-domain-verification"
          content="s07u1p449u2s2vwh14s1vmxrihljxt"
        />
        <title>bjh.dev | web design and development</title>
        <meta
          name="description"
          content="Freelance web designer & developer based in Melb, Australia. Working on web development, brand identity & digital marketing since ‘06."
        />
      </Helmet>
      <div className="grid min-h-screen grid-cols-1 content-center text-center">
        <h1 className="text-3xl font-extrabold">
          🔥🔥<span className="mx-4 text-5xl">bjh.dev</span>🔥🔥
        </h1>
        <hr className="mx-auto my-4 w-60 max-w-md border-2 border-solid border-gray-300 text-center" />
        <p className="text-lg font-light italic">Coming Soon</p>
      </div>
    </Layout>
  );
}
