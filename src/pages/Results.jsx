// src/pages/Results.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import destinations from "../data/destinations";

const Results = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const budget = Number(query.get("budget"));

  const filteredDestinations = destinations.filter(
    (dest) => dest.price <= budget
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Results</h2>
      <p>Budget received: {budget}</p>

      {filteredDestinations.length > 0 ? (
        <ul>
          {filteredDestinations.map((dest) => (
            <li key={dest.id}>
              {dest.name} - ₹{dest.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>No destinations found for this budget.</p>
      )}
    </div>
  );
};

export default Results;
