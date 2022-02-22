import React from 'react';
// import Footer from './Footer';
// import NavBar from './NavBar';
import '../styles/global.css';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container">
        {/* <NavBar /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
