export function getStellarExpertUrl(address: string): string {
  const network = process.env.NEXT_PUBLIC_STELLAR_NETWORK || "testnet";
  
  if (network.toLowerCase() === "mainnet" || network.toLowerCase() === "public") {
    return `https://stellarexpert.io/contract/${address}`;
  }
  
  return `https://testnet.stellarexpert.io/contract/${address}`;
}
