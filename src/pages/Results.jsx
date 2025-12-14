import { useLocation } from "react-router-dom";
import destinations from "../data/destinations";

export default function Results() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const budget = Number(params.get("budget"));
  const days = Number(params.get("days"));

  const filtered = destinations.filter(
    d => d.dailyCost * days <= budget && days >= d.minDays
  );

  return (
    <div>
      <h1>Results</h1>
      {filtered.length === 0 ? (
        <p>No destinations found.</p>
      ) : (
        filtered.map(d => (
          <div key={d.id}>
            <h2>{d.city}</h2>
            <p>Daily Cost: ₹{d.dailyCost}</p>
            <p>Total Cost: ₹{d.dailyCost * days}</p>
            <p>Best Season: {d.bestSeason}</p>
          </div>
        ))
      )}
    </div>
  );
}
