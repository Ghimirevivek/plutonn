import React from 'react';
import Header from './components/Header';
import Body from './components/Body';

const App = () => {
  return (
    <div>
      <Header />
      <div style={{ width: '100%', height: '1px', background: 'gray' }}></div>
      <Body />
    </div>
  );
};

export default App;
