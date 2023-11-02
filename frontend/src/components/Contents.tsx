import { useWeb3React } from "@web3-react/core";
import { Contract, ethers, Signer } from "ethers";
import styled from "styled-components";
import ContentsArtifact from "../artifacts/contracts/Contents.sol/Contents.json";
import { Provider } from "../utils/provider";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { contentState } from "../atoms";

const Contents = () => {
  const context = useWeb3React<Provider>();
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  const [signer, setSiggner] = useState(undefined);
  const [contentContract, setContentContract] = useState<Contract>();
  const [contentContractAddr, setContentContractAddr] = useState<string>("");
  const [counter, setCounter] = useState(0);
  const [contentInfo, setContentInfo] = useRecoilState(contentState);
  const [holderInfo, setHolderInfo] = useState<IHolder[]>([]);

  const ContentsContract = new ethers.ContractFactory(
    ContentsArtifact.abi,
    ContentsArtifact.bytecode,
    library?.getSigner()
  );

  useEffect(() => {
    const getContractInfo = async () => {
      if (contentContract) {
        for (let i = 0; i < counter; i++) {
          const target = await contentContract.getContentInfo(BigInt(i));
          const holder = await contentContract.getHolderInfo(BigInt(i));
          const temp = { ...target, [holder]: holder };
          setHolderInfo((current) => [...current, holder]);
          setContentInfo((current) => {
            return { ...current, [i]: temp };
          });
        }
      }
    };
    getContractInfo();
  }, [counter]);

  useEffect(() => {
    const getContractInfo = async () => {
      if (contentContract) {
        setCounter(await contentContract.contentCounter());
      }
    };
    getContractInfo();
  }, [contentContract]);

  useEffect(() => {
    if (account && library) {
      const ContentsContract = new ethers.ContractFactory(
        ContentsArtifact.abi,
        ContentsArtifact.bytecode,
        library?.getSigner()
      );
      const contractTemp = ContentsContract.attach(
        "0x5fC359fa2DcE9488ee504A5c873793115EAffA70"
      );
      setContentContract(contractTemp);
    }
  }, [account, library]);

  const addContentClicked = async () => {
    contentContract && (await contentContract.createContent("TEST2"));
  };

  return (
    <Wrapper>
      {contentInfo &&
        Object.values(contentInfo).map((content) => (
          <Content>
            <div>{content.name}</div>
            <div>{content.contentId.toString()}</div>
            <div>{content.disabled ? "disable" : "abled"}</div>
            <div>{content.holder?.holderName}</div>
          </Content>
        ))}
      <button>addHolder</button>
      <button onClick={addContentClicked}>addContent</button>
    </Wrapper>
  );
};

export default Contents;

const Wrapper = styled.div`
  height: 50vh;
  width: 50vw;
`;

const Content = styled.div``;

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
