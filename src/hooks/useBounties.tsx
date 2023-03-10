import { useContext } from 'react';
import { BountyContext } from '../context/BountyContext';
import { Bounty, BountyAction } from '../types';

type BountyContextType = {
  state: {
    bounties: Bounty[];
    error: string | null;
  };
  dispatch: React.Dispatch<BountyAction>;
  createBounty: (title: string, description: string, amount: string) => Promise<void>;
};

export const useBounties = (filter: string) => {
  const { state } = useContext<BountyContextType>(BountyContext);
  const { bounties } = state;
  
  const filteredBounties = bounties.filter(bounty => 
    bounty.title.toLowerCase().includes(filter.toLowerCase()) ||
    bounty.description.toLowerCase().includes(filter.toLowerCase())
  );

  const getBounties = () => {
    // function to get bounties
  };
  
  return { bounties: filteredBounties, getBounties };
};