import { Contract, providers, utils } from "ethers";
import { ERC20_ABI } from "../constants/erc20";

export async function getAddressFromENS(ens) {
  const provider = providers.getDefaultProvider();
  let res;
  try {
    res = await provider.resolveName(ens);
  } catch (e) {
    console.log(e);
  }
  return res;
}

export async function getENSFromAddress(address) {
  const provider = providers.getDefaultProvider();
  let res;
  try {
    res = await provider.lookupAddress(address);
  } catch (e) {
    console.log(e);
  }
  return res;
}
