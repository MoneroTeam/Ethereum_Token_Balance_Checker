import { Contract, providers, utils } from "ethers";
import { ERC20_ABI } from "../constants/erc20";

export default async function getTokenAndBalance(input) {
  const provider = providers.getDefaultProvider();
  const contract = new Contract(input.token, ERC20_ABI, provider);
  const wei = await contract.balanceOf(input.wallet);
  const symbol = await contract.symbol();
  const balance = String(Number(utils.formatEther(wei)).toFixed(3));
  return [symbol, balance];
}
