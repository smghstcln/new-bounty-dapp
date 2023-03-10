import { getBountyDetails, createBounty } from './src/utils/web3';

export const getBounty = async (bountyId: number) => {
  const bounty = await getBountyDetails(bountyId);
  return bounty;
}

export const addBounty = async (title: string, description: string, amount: number) => {
    const amountString = amount.toString();
  const bountyId = await createBounty(title, description, amountString);
  return bountyId;
}
