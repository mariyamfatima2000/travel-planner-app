// src/pages/Home.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [budget, setBudget] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (budget && !isNaN(budget)) {
      // Navigate to Results page with budget in URL
      navigate(`/results?budget=${budget}`);
    } else {
      alert("Please enter a valid number for budget.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Travel Planner</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your budget:
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="Enter budget in ₹"
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Home;
