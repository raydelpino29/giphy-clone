import { Component } from 'react';
import Head from 'next/head';
import SearchInput from '../components/search_input';

export default class Page extends Component {
  async getInitialProps() {
    return { };
  }

  render() {
    return (
      <div>
        <Head>
          <title>Giphy Clone</title>
        </Head>
        <SearchInput />
          <style jsx global>{`
            body {
              margin: 0;
              background: #000;
            }
          `}</style>
      </div>
    )
  }
}
