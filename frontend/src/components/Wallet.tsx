import { useWeb3React } from "@web3-react/core";
import { Provider } from "../utils/provider";
import { injected } from "../utils/connector";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wallet = () => {
  const { active, account, library, connector, activate, deactivate } = useWeb3React<Provider>();
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [ethBalance, setEthBalance] = useState("");

  async function connect() {
    try {
      await activate(injected);
      setIsWalletConnected(true);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
      setIsWalletConnected(false);
    } catch (ex) {
      console.log(ex);
    }
  }

  useEffect(() => {
    const getAccountBalance = async () => {
      account &&
        library &&
        setEthBalance((await library.getBalance(account)).toString().slice(0, -14));
    };
    getAccountBalance();
  }, [account, library]);

  // 시작하면 연결여부 확인해서 자동연결

  return (
    <Wrapper>
      {active ? (
        <Container>
          <Address>
            {account?.slice(0, 5)}...{account?.slice(-4)}
          </Address>
          <ETHBalance>
            {ethBalance.length < 5 ? (
              <h2>0.{ethBalance} ETH</h2>
            ) : (
              <h2>
                {ethBalance.slice(0, -4)}.{ethBalance.slice(-4)}
              </h2>
            )}
          </ETHBalance>
        </Container>
      ) : (
        <Connect>
          <span>Not Connected ...</span>
          <button type="button" onClick={connect}>
            CONNECT WALLET
          </button>
        </Connect>
      )}
    </Wrapper>
  );
};

export default Wallet;

const Wrapper = styled.div`
  border-radius: 5px;
  background-color: ${(props) => props.theme.black.lighter};
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0px 1px 2px 0px ${(props) => props.theme.green.neon},
    1px 2px 4px 0px ${(props) => props.theme.green.neon},
    2px 4px 8px 0px ${(props) => props.theme.green.neon},
    2px 4px 16px 0px ${(props) => props.theme.green.neon};
  border-radius: 5px;
  padding: 20px 50px;
`;

const Address = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: rgba(81, 249, 121, 0.2);
  color: ${(props) => props.theme.green.neon};
  font-weight: 350;
  margin-bottom: 15px;
  font-size: 14px;
  padding: 5px;
`;

const Circle = styled.div`
  background-color: ${(props) => props.theme.green.neon};
  width: 8px;
  height: 8px;
  border-radius: 4px;
`;

const ETHBalance = styled.div`
  font-size: 32px;
  font-weight: 700;
`;

const Connect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding: 20px 50px;
  background-color: ${(props) => props.theme.black.normal};

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: rgba(81, 249, 121, 0.2);
    color: ${(props) => props.theme.green.neon};
    font-weight: 350;
    margin-bottom: 15px;
    font-size: 12px;
    padding: 5px 20px;
  }

  button {
    color: ${(props) => props.theme.green.neon};
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.green.neon};
    padding: 10px 20px;
    cursor: pointer;
  }
`;
