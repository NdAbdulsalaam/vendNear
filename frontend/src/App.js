import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import BelowHeader from './components/BelowHeader';
import Sidebar from './components/Sidebar';
import AppRoutes from './routes/Routes';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        {/* Header */}
        <Header />

        {/* Below Header */}
        <BelowHeader />

        {/* Main Content */}
        <div className="flex flex-1">
          {/* Sidebar */}
          <Sidebar />

          {/* Routes */}
          <div className="flex-1 p-4">
            <AppRoutes />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
