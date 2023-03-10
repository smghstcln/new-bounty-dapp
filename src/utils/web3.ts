import Web3 from "web3";

const infuraEndpoint = "https://mainnet.infura.io/v3/298fc5bb3bab4c4c82fd174eede454ac"; // Replace with your Infura project ID
const web3 = new Web3(infuraEndpoint);

const bountyContractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138"; // Actual contract address
const bountyContractABI = [
  // Contract ABI
  {
    inputs: [],
    name: "beforeAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "checkFailure",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "checkSenderAndValue",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "checkSuccess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "checkSuccess2",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const bountyContract = new web3.eth.Contract(
  bountyContractABI as any,
  bountyContractAddress
);

export const createBounty = async (
  title: string,
  description: string,
  amount: string
): Promise<void> => {
  const accounts = await web3.eth.getAccounts();
  await bountyContract.methods.createBounty(title, description, amount).send({
    from: accounts[0],
    value: web3.utils.toWei(amount),
  });
};

const getBountyDetails = async (bountyId: number) => {
  const details = await bountyContract.methods.getBountyDetails(bountyId).call();
  const { 0: title, 1: description, 2: amount, 3: isOpen, 4: owner } = details;
  return { title, description, amount, isOpen, owner };
};

export { getBountyDetails };
