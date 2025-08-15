import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatBot from '../chatbot/ChatBot';

const Layout = () => {
  return (
    <div className="">
      {/* Navbar */}
      <Navbar />
      
      {/* Main content */}
      <main className="">
        <Outlet />
      </main>
      
      {/* Footer */}
      <Footer />
      <ChatBot /> 
    </div>
  );
};

export default Layout;