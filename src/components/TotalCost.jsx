import React from 'react';

const TotalCost = ({ selectedServices, services, selectedCarUnit, userInfo, onSubmit }) => {
  const total = selectedServices.reduce((acc, id) => {
    const service = services.find(s => s.id === id);
    return service ? acc + (service.prices[selectedCarUnit] || 0) : acc;
  }, 0);

  const selectedServiceNames = services
    .filter(s => selectedServices.includes(s.id))
    .map(s => s.name)
    .join(', ');

  return (
    <div className="bg-white p-4 border mt-4 rounded shadow-md">
      <h3 className="text-lg font-bold mb-2 text-black">Booking Summary</h3>
      <p><strong>Email:</strong> {userInfo.email}</p>
      <p><strong>Phone:</strong> {userInfo.phone}</p>
      <p><strong>Car Type:</strong> {selectedCarUnit}</p>
      <p><strong>Selected Services:</strong> {selectedServiceNames || 'None selected'}</p>
      <p className="font-bold text-yellow-500 mt-2">Total Cost: KES {total}</p>

      <button
        onClick={onSubmit}
        className="mt-4 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded"
      >
        Book Now
      </button>
    </div>
  );
};

export default TotalCost;
