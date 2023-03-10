import React, { useState } from 'react';
import { useBounties } from '../hooks/useBounties';

export const FundBounty = () => {
  const [bountyId, setBountyId] = useState<string>('');
  const [amount, setAmount] = useState<string>('');

  const { bounties, getBounties } = useBounties('');

  const handleBountyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBountyId(e.target.value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch(`/api/bounties/${bountyId}/fund`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });
    setBountyId('');
    setAmount('');
    getBounties();
  };

  return (
    <div>
      <h1>Fund Bounty</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Bounty:
          <select value={bountyId} onChange={handleBountyChange}>
            <option value="">Select a bounty</option>
            {bounties.map((bounty) => (
              <option key={bounty.id} value={String(bounty.id)}>
                {bounty.title}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Amount:
          <input type="number" value={amount} onChange={handleAmountChange} />
        </label>
        <br />
        <button type="submit">Fund Bounty</button>
      </form>
    </div>
  );
};
