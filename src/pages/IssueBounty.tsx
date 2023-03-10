import React, { useState } from "react";
import { useBounty } from "../context/BountyContext";

const IssueBounty = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [reward, setReward] = useState<number>(0);

  const { createBounty } = useBounty();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await createBounty(title, description, reward.toString());
  };

  return (
    <div>
      <h1>Issue Bounty</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="reward">Reward:</label>
          <input
            type="number"
            id="reward"
            value={reward}
            onChange={(event) => setReward(Number(event.target.value))}
          />
        </div>
        <button type="submit">Create Bounty</button>
      </form>
    </div>
  );
};

export default IssueBounty;
