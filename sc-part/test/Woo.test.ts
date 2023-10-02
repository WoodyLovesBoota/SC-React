import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract, Signer } from "ethers";

describe("Woo", () => {
  let accounts: Signer[];
  let token: Contract;
  let owner: Signer;
  let userA: Signer;
  let userB: Signer;

  const decimals = 1_000_000_000_000_000_000;
  const SUPPLY_CAP = BigInt(1_000_000 * decimals);

  beforeEach(async () => {
    accounts = await ethers.getSigners();
    owner = accounts[0];
    userA = accounts[1];
    userB = accounts[2];

    const TokenFactory = await ethers.getContractFactory("Woo");
    token = await TokenFactory.deploy("WooToken", "WT", SUPPLY_CAP);
    await token.connect(owner);

    await token.connect(owner).mint(userA.getAddress(), BigInt(10_000 * decimals));
  });

  describe("transfer", () => {
    it("A->B", async () => {
      await token.connect(userA).transfer(userB, BigInt(1_000 * decimals));
      expect(await token.balanceOf(userA)).to.equal(BigInt(9_000 * decimals));
    });
  });
});
