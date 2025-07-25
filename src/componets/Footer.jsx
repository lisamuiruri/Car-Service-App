import React from 'react';

const Footer = () => (
  <footer className="bg-black text-white p-4 text-center">
    <p className="text-yellow-400">&copy; {new Date().getFullYear()} Car Clinic. All rights reserved.</p>
    <p>
      Contact us: <a href="mailto:contact@carclinic.com" className="text-yellow-400 underline">contact@carclinic.com</a>
    </p>
  </footer>
);

export default Footer;
