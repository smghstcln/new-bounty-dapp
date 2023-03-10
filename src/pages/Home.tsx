import React, { useState } from 'react';
import { useBounties } from '../hooks/useBounties';
import BountyList from '../components/BountyList';

const Home = () => {
  const [filter, setFilter] = useState('');
  const { bounties } = useBounties(filter);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">Bounty Platform</h1>
          <p className="text-lg text-gray-500">A new platform for funding, issuing, browsing bounties and earn crypto </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex space-x-4 mb-4">
          <input 
            type="text" 
            placeholder="Filter bounties by keyword..." 
            className="border border-gray-400 rounded-lg py-2 px-4 w-full"
            value={filter}
            onChange={e => setFilter(e.target.value)} 
          />
        </div>
        <BountyList bounties={bounties} />
      </div>
    </div>
  );
};

export default Home;
