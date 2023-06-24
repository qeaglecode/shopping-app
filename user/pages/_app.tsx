import React from 'react';
import App from 'next/app';
import DefaultLayout from 'src/components/layout/DefaultLayout';
import PrimaryLayout from '@/src/components/layout/PrimaryLayout';
import HeaderOnly from '@/src/components/layout/HeaderOnly';
import 'styles/globals.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    const Layout = Component.Layout === 'PrimaryLayout' && PrimaryLayout
    || Component.Layout === 'HeaderOnly' && HeaderOnly
    || Component.Layout === 'DefaultLayout' && DefaultLayout
    || PrimaryLayout

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;