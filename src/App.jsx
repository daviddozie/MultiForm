import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './auth/Auth';
import TabContainer from './components/TabContainer';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';
import Success from './pages/Sucess';

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<TabContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/successPage" element={<Success />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
};

export default App;