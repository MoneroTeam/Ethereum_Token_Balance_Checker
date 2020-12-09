import { providers, utils } from "ethers";

export async function getAddressFromEns(ens) {
  const provider = providers.getDefaultProvider();
  let res;
  try {
    res = await provider.resolveName(ens);
  } catch (e) {
    console.log(e);
  }
  return res;
}

export async function getEnsFromAddress(address) {
  const provider = providers.getDefaultProvider();
  let res;
  try {
    res = await provider.lookupAddress(address);
  } catch (e) {
    console.log(e);
  }
  return res;
}
