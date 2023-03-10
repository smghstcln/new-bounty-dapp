import React, { useState } from 'react';
import { useBounties } from '../hooks/useBounties';

export const Bounties = () => {
  const [filter, setFilter] = useState<string>('');

  const { bounties, getBounties } = useBounties(filter);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <h1>Bounties</h1>
      <form>
        <label>
          Filter:
          <input type="text" value={filter} onChange={handleFilterChange} />
        </label>
      </form>
      <ul>
        {bounties.map((bounty) => (
          <li key={bounty.id}>
            <h2>{bounty.title}</h2>
            <p>{bounty.description}</p>
            <p>Amount: {bounty.amount}</p>
          </li>
        ))}
      </ul>
      <button onClick={() => getBounties()}>Clear Filter</button>
    </div>
  );
};
