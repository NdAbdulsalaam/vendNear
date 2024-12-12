import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import BelowHeader from './components/BelowHeader';
import Main from './components/Main';

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <BelowHeader />
      <div className="flex flex-1">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default App;
