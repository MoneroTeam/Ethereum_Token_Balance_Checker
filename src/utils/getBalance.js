import { Contract, providers } from "ethers";

const ABI = [
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256"
      }
    ],
    payable: false,
    type: "function"
  }
];

const tokenAddress = "0x58b6a8a3302369daec383334672404ee733ab239";
// LPT
// const tokenAddress = "0xf230b790E05390FC8295F4d3F60332c93BEd42e2";
// tron
const getBalance = async address => {
  const provider = providers.getDefaultProvider();
  const contract = new Contract(tokenAddress, ABI, provider);
  const balance = await contract.balanceOf(address);
  return balance.toString();
};

export default getBalance;
