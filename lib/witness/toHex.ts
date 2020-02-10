import { bufferToHex, toBuffer, BN } from 'ethereumjs-util';

export default function toHex(x: BN | Buffer): string {
  if (BN.isBN(x)) return `0x${x.toString('hex')}`;
  return bufferToHex(x);
}