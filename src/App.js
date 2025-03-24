import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BuildGreener from './components/BuildGreener';
import LatestWorks from './components/LatestWorks';
import RequestQuote from './components/RequestQuote';
import FAQs from './components/FAQs';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className={theme === 'dark' ? 'bg-dark' : 'bg-light'}>
      <Header theme={theme} />
      <Hero theme={theme} />
      <About theme={theme} />
      <Services theme={theme} />
      <BuildGreener theme={theme} />
      <LatestWorks theme={theme} />
      <RequestQuote theme={theme} />
      <FAQs theme={theme} />
      <button
        className="position-fixed bottom-0 end-0 m-3 d-flex align-items-center justify-content-center"
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: theme === 'dark' ? '#FFFFFF' : '#1A2526',
          border: 'none',
          color: theme === 'dark' ? '#1A2526' : '#FFFFFF',
          fontSize: '24px',
          cursor: 'pointer',
        }}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button>
      <Footer theme={theme} />
    </div>
  );
}

export default App;