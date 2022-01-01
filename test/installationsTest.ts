import { impersonate } from "../scripts/helperFunctions";
import { InstallationFacet, ERC1155Facet, IERC20 } from "../typechain";
import { expect } from "chai";
import { ethers, network } from "hardhat";
import { deployDiamond } from "../scripts/deploy";
import { BigNumberish, Signer } from "ethers";

interface InstallationType {
  deprecated: boolean;
  installationType: BigNumberish;
  level: BigNumberish;
  width: BigNumberish;
  height: BigNumberish;
  alchemicaType: BigNumberish;
  alchemicaCost: BigNumberish[];
  harvestRate: BigNumberish;
  capacity: BigNumberish;
  spillRadius: BigNumberish;
  spillRate: BigNumberish;
  craftTime: BigNumberish;
  prerequisites: BigNumberish[];
}

describe("Installations tests", async function () {
  const testAddress = "0xf3678737dC45092dBb3fc1f49D89e3950Abb866d";
  const testAddress2 = "0xC99DF6B7A5130Dce61bA98614A2457DAA8d92d1c";
  let diamondAddress: string;
  let installationFacet: InstallationFacet;
  let erc1155Facet: ERC1155Facet;
  let ghst: IERC20;
  let accounts: Signer[];

  before(async function () {
    this.timeout(20000000);
    diamondAddress = await deployDiamond();
    accounts = await ethers.getSigners();

    installationFacet = (await ethers.getContractAt(
      "InstallationFacet",
      diamondAddress
    )) as InstallationFacet;
    erc1155Facet = (await ethers.getContractAt(
      "ERC1155Facet",
      diamondAddress
    )) as ERC1155Facet;

    console.log("diamond address:", diamondAddress);

    ghst = (await ethers.getContractAt(
      "contracts/interfaces/IERC20.sol:IERC20",
      "0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7"
    )) as IERC20;
  });
  it("Set alchemica addresses", async function () {
    const setAlchemicaAddresses = [
      "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7",
      "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7",
      "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7",
      "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7",
    ];
    await installationFacet.setAlchemicaAddresses(setAlchemicaAddresses);
    const getAlchemicaAddresses =
      await installationFacet.getAlchemicaAddresses();
    expect(setAlchemicaAddresses).to.eql(getAlchemicaAddresses);
  });

  it("Set Diamond Addresses", async function () {
    await installationFacet.setAddresses(
      "0x86935f11c86623dec8a25696e1c19a8659cbf95d",
      "0x1d0360bac7299c86ec8e99d0c1c9a95fefaf2a11",
      "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
    );
  });

  it("Add installation types", async function () {
    let installationsTypes = await installationFacet.getInstallationTypes([]);
    const installations: InstallationType[] = [];
    installations.push({
      deprecated: false,
      installationType: 0,
      level: 1,
      width: 2,
      height: 4,
      alchemicaType: 0,
      alchemicaCost: [1, 2, 0, 3],
      harvestRate: 2,
      capacity: 0,
      spillRadius: 0,
      spillRate: 0,
      craftTime: 10000,
      prerequisites: [],
    });
    installations.push({
      deprecated: false,
      prerequisites: [],
      installationType: 1,
      level: 1,
      width: 6,
      height: 6,
      alchemicaType: 4,
      alchemicaCost: [4, 5, 6, 0],
      harvestRate: 0,
      capacity: 50000,
      spillRadius: 100,
      spillRate: 100,
      craftTime: 50000,
    });
    await installationFacet.addInstallationTypes(installations);
    installationsTypes = await installationFacet.getInstallationTypes([]);
    expect(installationsTypes.length).to.equal(installations.length);
  });
  it("Craft installations", async function () {
    ghst = await impersonate(testAddress, ghst, ethers, network);
    installationFacet = await impersonate(
      testAddress,
      installationFacet,
      ethers,
      network
    );
    await ghst.approve(
      installationFacet.address,
      ethers.utils.parseUnits("1000000000")
    );
    await installationFacet.craftInstallations([0, 0, 0, 0, 0]);
    await expect(installationFacet.claimInstallations([0])).to.be.revertedWith(
      "InstallationFacet: installation not ready"
    );
    for (let i = 0; i < 11000; i++) {
      ethers.provider.send("evm_mine", []);
    }
    const balancePre = await installationFacet.balanceOf(testAddress, 0);
    await installationFacet.claimInstallations([0, 1, 2, 3, 4]);
    const balancePost = await installationFacet.balanceOf(testAddress, 0);
    expect(balancePost).to.above(balancePre);
  });
  it("Transfer installation", async function () {
    erc1155Facet = await impersonate(
      testAddress,
      erc1155Facet,
      ethers,
      network
    );

    const balancePre = await installationFacet.balanceOf(testAddress, 0);
    const balancePre2 = await installationFacet.balanceOf(testAddress2, 0);
    expect(balancePre).to.above(balancePre2);

    await erc1155Facet.safeTransferFrom(testAddress, testAddress2, 0, 3, []);
    const balancePost = await installationFacet.balanceOf(testAddress, 0);
    const balancePost2 = await installationFacet.balanceOf(testAddress2, 0);
    expect(balancePost2).to.above(balancePost);
  });
  it("Batch transfer installations", async function () {
    this.timeout(20000000);
    installationFacet = await impersonate(
      testAddress,
      installationFacet,
      ethers,
      network
    );
    erc1155Facet = await impersonate(
      testAddress,
      erc1155Facet,
      ethers,
      network
    );
    await installationFacet.craftInstallations([1, 1, 1]);
    for (let i = 0; i < 51000; i++) {
      ethers.provider.send("evm_mine", []);
    }
    await installationFacet.claimInstallations([5, 6, 7]);
    const balancePreHarv = ethers.utils.formatUnits(
      await installationFacet.balanceOf(testAddress, 0),
      0
    );
    const balancePreHarv2 = ethers.utils.formatUnits(
      await installationFacet.balanceOf(testAddress2, 0),
      0
    );
    const balancePreRes = ethers.utils.formatUnits(
      await installationFacet.balanceOf(testAddress, 1),
      0
    );
    const balancePreRes2 = ethers.utils.formatUnits(
      await installationFacet.balanceOf(testAddress2, 1),
      0
    );
    await erc1155Facet.safeBatchTransferFrom(
      testAddress,
      testAddress2,
      [0, 1],
      [2, 3],
      []
    );
    const balancePostHarv = ethers.utils.formatUnits(
      await installationFacet.balanceOf(testAddress, 0),
      0
    );
    const balancePostHarv2 = ethers.utils.formatUnits(
      await installationFacet.balanceOf(testAddress2, 0),
      0
    );
    const balancePostRes = ethers.utils.formatUnits(
      await installationFacet.balanceOf(testAddress, 1),
      0
    );
    const balancePostRes2 = ethers.utils.formatUnits(
      await installationFacet.balanceOf(testAddress2, 1),
      0
    );
    expect(Number(balancePreHarv) + Number(balancePreHarv2)).to.equal(
      Number(balancePostHarv) + Number(balancePostHarv2)
    );
    expect(Number(balancePreRes) + Number(balancePreRes2)).to.equal(
      Number(balancePostRes) + Number(balancePostRes2)
    );
  });
});
