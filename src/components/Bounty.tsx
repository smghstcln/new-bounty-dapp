import React, { useContext } from "react";
import { BountyContext } from "../context/BountyContext";
import { Bounty } from "../types";

const BountyList: React.FC = () => {
  const { state, dispatch } = useContext(BountyContext);

  const approveBounty = (id: string) => {
    dispatch({ type: "APPROVE_BOUNTY", payload: id });
  };

  return (
    <div>
      <h3>Bounty List</h3>
      {state.bounties.map((bounty: Bounty) => (
        <div key={bounty._id}>
          <h4>{bounty.title}</h4>
          <p>{bounty.description}</p>
          <button onClick={() => approveBounty(bounty._id)}>Approve</button>
        </div>
      ))}
    </div>
  );
};

export default BountyList;
