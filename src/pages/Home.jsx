import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [budget, setBudget] = useState("");
  const [days, setDays] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // Navigate to /results and pass budget & days via URL query
    navigate(`/results?budget=${budget}&days=${days}`);
  };

  return (
    <div>
      <h1>Home</h1>
      <label>
        Budget: 
        <input 
          type="number" 
          value={budget} 
          onChange={e => setBudget(e.target.value)} 
        />
      </label>
      <br />
      <label>
        Days: 
        <input 
          type="number" 
          value={days} 
          onChange={e => setDays(e.target.value)} 
        />
      </label>
      <br />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

