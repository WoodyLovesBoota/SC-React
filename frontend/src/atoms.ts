import { atom } from "recoil";
import { Signer } from "ethers";

export const signerState = atom<Signer | undefined>({
  key: "signer",
  default: undefined,
});
