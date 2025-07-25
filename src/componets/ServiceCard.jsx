import React from 'react';

const ServiceCard = ({ service, isSelected, onToggle, selectedCarUnit }) => (
  <div className={`border rounded-lg shadow-md p-4 ${isSelected ? 'bg-yellow-100 border-yellow-400' : 'bg-white'}`}>
    <img
      src={service.image}
      alt={service.name}
      className="w-full h-72 object-cover rounded mb-2"
    />
    <h3 className="text-lg font-bold text-black">{service.name}</h3>
    <p className="text-black">
      Price for {selectedCarUnit}: <span className="text-yellow-500 font-semibold">Ksh {service.prices[selectedCarUnit]}</span></p>
    <button
      onClick={() => onToggle(service.id)}
      className={`mt-2 px-4 py-1 text-sm rounded ${isSelected ? 'bg-black' : 'bg-yellow-500'} text-white hover:opacity-90 transition`}
    >
      {isSelected ? 'Remove' : 'Add'}
    </button>
  </div>
);

 default ServiceCard;
