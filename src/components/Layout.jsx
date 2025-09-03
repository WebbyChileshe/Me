// src/components/Layout.jsx
import React from 'react';
import Header from './Header.jsx';
import Button from './buttons.jsx';
import { Outlet } from 'react-router-dom';
import './Hero.css';

function Layout() {
  return (
    <div className="hero">
      <Header />
      <div className="hero-content">
        <Outlet /> {} 
      </div>
      <Header /> {}
    </div>
  );
}

export default Layout;

