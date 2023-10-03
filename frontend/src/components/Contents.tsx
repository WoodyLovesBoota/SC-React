import { useWeb3React } from "@web3-react/core";
import { Contract, ethers, Signer } from "ethers";
import styled from "styled-components";
import ContentsArtifact from "../../../artifacts/contracts/Contents.sol/Contents.json";
import { Provider } from "../utils/provider";
import { useState } from "react";

const Contents = () => {
  const context = useWeb3React<Provider>();
  const { library, active } = context;
  const [signer, setSigner] = useState<Signer>();
  const [contentContract, setContentContract] = useState<Contract>();
  const [contentContractAddr, setContentContractAddr] = useState<string>("");

  return <div>Contents</div>;
};

export default Contents;
