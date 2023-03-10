import { BountyAction, Bounty } from "../types";

export type State = {
  bounties: Bounty[];
  error: string | null;
};

export const initialState: State = {
  bounties: [],
  error: null,
};

const bountyReducer = (state = initialState, action: BountyAction): State => {
  switch (action.type) {
    case "ADD_BOUNTY":
      return {
        ...state,
        bounties: [...state.bounties, action.payload]
      };
    case "APPROVE_BOUNTY":
      return {
        ...state,
        bounties: state.bounties.map((bounty: Bounty) =>
          bounty._id === action.payload ? { ...bounty, status: "approved" } : bounty
        )
      };
    case "REMOVE_BOUNTY":
      return {
        ...state,
        bounties: state.bounties.filter((bounty: Bounty) => bounty._id !== action.payload)
      };
    case "FETCH_BOUNTIES":
      return {
        ...state,
        bounties: action.payload
      };
    case "BOUNTIES_ERROR":
      console.error(action.payload);
      return state;
    default:
      return state;
  }
};

export default bountyReducer;
