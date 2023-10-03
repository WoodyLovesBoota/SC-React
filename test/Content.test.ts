import { expect, use } from "chai";
import { ethers } from "hardhat";
import { Contract, Signer } from "ethers";

describe("RewardPool", () => {
  let accounts: Signer[];
  let content: Contract;

  let owner: Signer;
  let userA: Signer;

  beforeEach(async () => {
    [owner, userA] = await ethers.getSigners();

    const ContentFactory = await ethers.getContractFactory("Contents");
    content = await ContentFactory.deploy();
    await content.connect(owner);
  });

  describe("test", () => {
    it("add content", async () => {
      await content.connect(owner).createContent("TESTCONTENT");
      expect((await content.getContentInfo(BigInt(0)))[0]).to.equal("TESTCONTENT");
    });
  });
});
