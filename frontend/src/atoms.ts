import { atom } from "recoil";
import { Contract, Signer } from "ethers";

export const signerState = atom<Signer | undefined>({
  key: "signerInfo",
  default: undefined,
});

export const counterState = atom<number>({
  key: "contentCounter",
  default: 0,
});

export const contractState = atom<Contract | undefined>({
  key: "contractInfo",
  default: undefined,
});

export const contentState = atom<IContents>({
  key: "contents",
  default: {
    // name: "",
    // contentId: 0,
    // disabled: true,
    // holder: { contentId: 0, holderName: "" },
  },
  effects: [
    ({ setSelf, onSet }: any) => {
      const savedValue = localStorage.getItem("contents");
      if (savedValue !== null) setSelf(JSON.parse(savedValue));
      onSet((newValue: any, _: any, isReset: boolean) => {
        isReset
          ? localStorage.removeItem("contents")
          : localStorage.setItem("contents", JSON.stringify(newValue));
      });
    },
  ],
});

interface IContents {
  [key: number]: IContent | undefined;
}

interface IContent {
  name: string;
  contentId: number;
  disabled: boolean;
  holder: IHolder;
}

interface IHolder {
  contentId: number;
  holderName: string;
}
