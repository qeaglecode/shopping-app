import React from 'react';
import App from 'next/app';
import PrimaryLayout from '@layouts/primary-layout';
import '@styles/globals.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || PrimaryLayout;

    return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
    );
  }
}

export default MyApp;