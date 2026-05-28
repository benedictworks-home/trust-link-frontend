export function truncateAddress(address: string, startChars: number = 4, endChars: number = 4): string {
  if (!address) return "";
  if (address.length <= startChars + endChars) return address;
  
  return `${address.substring(0, startChars)}...${address.substring(address.length - endChars)}`;
}
