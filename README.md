
# Car Service App

What we have here is a modern React-based car detailing service application that allows customers to browse services, select their car type, and book appointments with real-time pricing.

## Features

Service Portfolio: A listed visual library showcasing car detailing work  
Dynamic Pricing: Prices adjust based on selected car type (Saloon, SUV, Van, Commercial)  
Service Selection: Multiple service options including wash, paint correction, protection, and more  
Real-time Cost Calculation: Live total cost updates as services are selected  
Responsive Design: Mobile-friendly interface using Tailwind CSS  
Booking System: Customer information collection and appointment booking

## Tech Stack

Frontend: React with Vite  
Routing: React Router DOM  
Styling: Tailwind CSS  
Backend: JSON Server

## Prerequisites

Node.js  
npm package manager

## Installation

Clone the repository:  
Install dependencies (if not installed):  
Use the command:

npm install

Start the JSON server for backend data:  
Run the command:

npx json-server --watch db.json --port 3001

In a new terminal, start the development server:  
npm run dev

Open your browser and navigate to:  
http://localhost:5173
 
## Deployment

The frontend application is deployed on netlify:
link: https://cardetailin.netlify.app/services

The json server has been deployed on render:
link: https://service-server-ls3h.onrender.com/services

open the backend and frontend in your browser to view the application.

## Project Structure

src/  
├── components/  
│   ├── NavBar.jsx          # Navigation component  
│   ├── Footer.jsx          # Footer component  
│   ├── Portfolio.jsx       # Image carousel  
│   ├── ServicesList.jsx    # Main services component  
│   ├── ServiceCard.jsx     # Individual service card  
│   ├── DropDown.jsx        # Car type selector  
│   └── TotalCost.jsx       # Booking summary  
├── pages/  
│   ├── Home.jsx            # Home page  
│   └── ServicesPage.jsx    # Services page  
├── App.jsx                 # Main app component  
├── index.jsx              # App entry point  
└── index.css              # Global styles

## Services Offered

Regular Wash - Basic car washing service  
Paint Correction and Buffing - Professional paint restoration  
Paint Protection - Protective coating application  
Interior Fumigation - Deep interior cleaning and sanitization  
Minor Service - Basic maintenance service

## Car Types & Pricing

The app supports four vehicle categories with dynamic pricing:

Saloon Cars - Standard sedans  
SUV Cars - Sport utility vehicles  
Vans - Commercial and personal vans  
Commercial Vehicles - Heavy-duty commercial vehicles
 main

## Authors

Lisa Muiruri  
Maurice Muita  
Ian Muthiani

## License

MIT  
This project is open and proprietary for educational and public use.
 
