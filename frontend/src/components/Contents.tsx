import { useWeb3React } from "@web3-react/core";
import { Contract, ethers, Signer } from "ethers";
import styled from "styled-components";
import ContentsArtifact from "../artifacts/contracts/Contents.sol/Contents.json";
import { Provider } from "../utils/provider";
import { useEffect, useState } from "react";
import { injected } from "../utils/connector";
import Wallet from "./Wallet";

const Contents = () => {
  const context = useWeb3React<Provider>();
  const { active, account, library, connector, activate, deactivate } = useWeb3React();
  const [signer, setSiggner] = useState(undefined);
  const [contentContract, setContentContract] = useState<Contract>();
  const [contentContractAddr, setContentContractAddr] = useState<string>("");

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
