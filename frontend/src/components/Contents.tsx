import { useWeb3React } from "@web3-react/core";
import { Contract, ethers, Signer } from "ethers";
import styled from "styled-components";
import ContentsArtifact from "../artifacts/contracts/Contents.sol/Contents.json";
import { Provider } from "../utils/provider";
import { useEffect, useState } from "react";
import { injected } from "../utils/connector";

const Contents = () => {
  const context = useWeb3React<Provider>();
  const { active, account, library, connector, activate, deactivate } = useWeb3React();
  const [signer, setSiggner] = useState(undefined);
  const [contentContract, setContentContract] = useState<Contract>();
  const [contentContractAddr, setContentContractAddr] = useState<string>("");

  const ContentsContract = new ethers.ContractFactory(
    ContentsArtifact.abi,
    ContentsArtifact.bytecode,
    library?.getSigner()
  );

  useEffect(() => {
    const getAccountBalance = async () => {
      if (account && library) {
        const ContentsContract = new ethers.ContractFactory(
          ContentsArtifact.abi,
          ContentsArtifact.bytecode,
          library?.getSigner()
        );
        const contractTemp = ContentsContract.attach("0x5fC359fa2DcE9488ee504A5c873793115EAffA70");
        setContentContract(contractTemp);
      }
    };
    getAccountBalance();
  }, [account, library]);

  const getContentsInfo = async () => {
    if (contentContract) {
      const num = await contentContract.getContentInfo(BigInt(0));
      console.log(num);
    }
  };
  getContentsInfo();
  return <Wrapper></Wrapper>;
};

export default Contents;

const Wrapper = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1``;
