import React, { useState, useEffect } from 'react';
import DropDown from './DropDown';
import ServiceCard from './ServiceCard';
import TotalCost from './TotalCost';

const carOptions = [
  { label: 'Salon Car', value: 'Saloon' },
  { label: 'SUV Car', value: 'Suv' },
  { label: 'Van', value: 'Van' },
  { label: 'Commercial Car', value: 'Commercial' },
];

const ServicesList = () => {
  const [selectedCarUnit, setSelectedCarUnit] = useState('Saloon');
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [userInfo, setUserInfo] = useState({ email: '', phone: '' });
  
useEffect(() => {
  fetch('https://service-server-ls3h.onrender.com/services')
    .then(res => res.json())
    .then(data => {
      console.log('Services:', data);
      setServices(data);
    });
}, []);


  const handleToggle = (id) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    alert("Submission successful");

    setSelectedCarUnit('Saloon');
    setSelectedServices([]);
    setUserInfo({ email: '', phone: '' });
  };

  return (
    <section className="my-8 px-6">
      <DropDown
        label="Select Car Type"
        options={carOptions}
        onSelect={(option) => setSelectedCarUnit(option.value)}
      />
      <h2 className="text-3xl font-bold text-black mt-8 mb-6">Choose Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
        {services.map(service => (
          <ServiceCard
            key={service.id}
            service={service}
            selectedCarUnit={selectedCarUnit}
            isSelected={selectedServices.includes(service.id)}
            onToggle={handleToggle}
          />
        ))}
      </div>

      <div className="my-4">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={userInfo.email}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="phone"
          placeholder="Your Phone"
          value={userInfo.phone}
          onChange={handleInputChange}
          className="border p-2"
        />
      </div>

      <TotalCost
        selectedServices={selectedServices}
        services={services}
        selectedCarUnit={selectedCarUnit}
        userInfo={userInfo}
        onSubmit={handleSubmit} 
      />
    </section>
  );
};

export default ServicesList;
