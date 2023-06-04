import React from 'react';
import App from 'next/app';
import DefaultLayout from 'src/components/layout/DefaultLayout';
import 'styles/globals.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || DefaultLayout;

    return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
    );
  }
}

export default MyApp;