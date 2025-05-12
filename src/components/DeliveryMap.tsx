
import React from 'react';

// Mock data for the delivery path and current location
const MAP_SVG_WIDTH = 800;
const MAP_SVG_HEIGHT = 500;

// SVG path for a simplified city map grid
const mapGrid = [
  "M 50,50 H 750",
  "M 50,150 H 750",
  "M 50,250 H 750",
  "M 50,350 H 750",
  "M 50,450 H 750",
  "M 50,50 V 450",
  "M 150,50 V 450",
  "M 250,50 V 450", 
  "M 350,50 V 450",
  "M 450,50 V 450",
  "M 550,50 V 450",
  "M 650,50 V 450",
  "M 750,50 V 450",
];

const deliveryPath = "M 150,350 L 250,350 L 350,250 L 450,250 L 550,150 L 650,150";

// Current delivery driver position (animates along the path)
const driverPosition = { x: 350, y: 250 };

// Restaurant and destination markers
const restaurant = { x: 150, y: 350, name: "Luigi's Pizza" };
const destination = { x: 650, y: 150, name: "Home" };

const DeliveryMap = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] border border-delivery-secondary rounded-xl overflow-hidden bg-delivery-light shadow-md">
      <svg 
        viewBox={`0 0 ${MAP_SVG_WIDTH} ${MAP_SVG_HEIGHT}`} 
        className="map-container"
      >
        {/* City grid */}
        <g className="map-grid">
          {mapGrid.map((path, i) => (
            <path key={i} d={path} stroke="#e5e7eb" strokeWidth="2" />
          ))}
        </g>
        
        {/* Delivery path */}
        <path 
          d={deliveryPath} 
          fill="none" 
          className="delivery-path"
        />
        
        {/* Restaurant marker */}
        <g transform={`translate(${restaurant.x}, ${restaurant.y})`}>
          <circle r="10" fill="#fbbf24" stroke="#fff" strokeWidth="2" />
          <text y="30" textAnchor="middle" fontSize="14" fill="#1F2937">{restaurant.name}</text>
        </g>
        
        {/* Destination marker */}
        <g transform={`translate(${destination.x}, ${destination.y})`}>
          <circle r="10" fill="#10B981" stroke="#fff" strokeWidth="2" />
          <text y="30" textAnchor="middle" fontSize="14" fill="#1F2937">{destination.name}</text>
        </g>
        
        {/* Driver marker */}
        <g transform={`translate(${driverPosition.x}, ${driverPosition.y})`} className="driver-marker">
          <circle r="12" fill="#ffffff" stroke="#10B981" strokeWidth="3" />
          <circle r="6" fill="#10B981" className="pulse-dot" />
          <circle r="18" className="pulse-dot" opacity="0.4" />
        </g>
      </svg>
    </div>
  );
};

export default DeliveryMap;
