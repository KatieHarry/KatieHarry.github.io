import React from 'react';
import { Header, Footer } from './components/common';
import About from './components/about';

function App() {

  const BodyStyle = {
    background: "var(--navy)",
    paddingTop: "115px",
  }

  return (
    <div style={ BodyStyle } className="App">
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;
