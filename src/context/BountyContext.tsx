import React, { createContext, useReducer, useContext } from "react";
import { BountyAction } from "../types";
import bountyReducer, { State } from "./bountyReducer";
import { createBounty } from "../utils/web3";

// Define initial state for bounties
const initialState: State = {
  bounties: [],
  error: null as string | null,
};

// Create context for bounties
export const BountyContext = createContext<{
  state: typeof initialState;
  dispatch: React.Dispatch<BountyAction>;
  createBounty: (title: string, description: string, amount: string) => Promise<void>;
}>({
  state: initialState,
  dispatch: () => null,
  createBounty: async () => undefined,
});

// Define BountyProvider component to wrap around the app and provide the context
export const BountyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(bountyReducer, initialState);
  const create = async (title: string, description: string, amount: string) => {
    await createBounty(title, description, amount);
  };
  return (
    <BountyContext.Provider value={{ state, dispatch, createBounty: create }}>
      {children}
    </BountyContext.Provider>
  );
};

// Define custom hook to consume the context
export const useBounty = () => useContext(BountyContext);
