import React from 'react';

import { Content } from './components/Layout';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Search from './pages/Search';
import Watch from './pages/Watch';

const App = () => {

  return (
    <>
      <Header showNav />
      <Content>
        {/* <Home /> */}
        <Search />
        {/* <Watch /> */}
      </Content>
      <Footer />
    </>
  );
}

export default App;
