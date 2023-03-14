export type AddressType  = {
  97: string;
  56: string;
}

export enum CHAIN_ID {
  TESTNET = 97,
  MAINNET = 56,
}

export default function getChainIdFromEnv(): number {
  const env = process.env.NEXT_PUBLIC_CHAIN_ID;
  if (!env) { return 97;}
  return parseInt(env);
}


export const getRPC = () => {
  if (getChainIdFromEnv() === CHAIN_ID.MAINNET)
    return process.env.NEXT_PUBLIC_RPC_MAINNET;
  return process.env.NEXT_PUBLIC_RPC_TESTNET;
}
export const SMART_ADDRESS = {
  CROWD_SALE: {97: '0x46319f86B26e9DFe72047e0B1b94D6199477A8Da', 56: ''},
  USDT: {97: '0x13340533d4f2E10d1420E070FCDE697e73DcEeD9', 56: ''}
}