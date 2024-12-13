import React from 'react';
import './App.css'
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

        {/* Main Layout */}
        <div className="flex flex-1">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="flex-1 p-4">
            {/* Routes */}
            <AppRoutes />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
