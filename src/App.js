import React, {Fragment } from 'react';

import Header from "./app/common/Header";
import Footer from "./app/common/Footer";
import MainPage from "./app/pages/MainPage";

import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <MainPage />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;