import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <header className="bg-yellow-400 text-center py-4 shadow-md">
        <h1 className="text-3xl font-bold">Car Detailing App</h1>
      </header>
      <NavBar />
      <main className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
