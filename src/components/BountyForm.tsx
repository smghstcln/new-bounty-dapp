import React, { useState, FormEvent } from "react";

interface Props {
  onCreateBounty: (reward: number) => void;
}

const BountyForm: React.FC<Props> = ({ onCreateBounty }) => {
  const [reward, setReward] = useState<number>(0);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onCreateBounty(reward);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="reward">Reward:</label>
      <input
        type="number"
        id="reward"
        value={reward}
        onChange={(event) => setReward(parseInt(event.target.value))}
      />
      <button type="submit">Create Bounty</button>
    </form>
  );
};

export default BountyForm;
