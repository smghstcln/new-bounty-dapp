import React from 'react';
import { Bounty } from '../types';

type BountyListProps = {
  bounties: Bounty[];
};

export const BountyList = ({ bounties }: BountyListProps) => {
  return (
    <ul className="divide-y divide-gray-200">
      {bounties.map((bounty) => (
        <li key={bounty.id} className="py-4">
          <div className="flex space-x-3">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{bounty.title}</p>
              <p className="text-sm text-gray-500 truncate">{bounty.description}</p>
              <div className="flex space-x-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {bounty.reward} ETH
                </span>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};


export default BountyList;
