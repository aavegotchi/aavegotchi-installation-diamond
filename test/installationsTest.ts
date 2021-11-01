import { impersonate } from "../scripts/helperFunctions";
import { InstallationFacet, IERC20 } from "../typechain";
import { expect } from "chai";
import { ethers, network } from "hardhat";
import { deployDiamond } from "../scripts/deploy";
import { InstallationType } from "../types";

describe("Realm tests", async function () {
  const testAddress = "0xf3678737dC45092dBb3fc1f49D89e3950Abb866d";
  let diamondAddress;
  let installationFacet: InstallationFacet;
  let accounts;
  let ownerAddress: string;
  let ghst: IERC20;

  before(async function () {
    this.timeout(20000000);
    diamondAddress = await deployDiamond();
    accounts = await ethers.getSigners();
    ownerAddress = accounts[0].address;

    installationFacet = (await ethers.getContractAt(
      "InstallationFacet",
      diamondAddress
    )) as InstallationFacet;
    ghst = (await ethers.getContractAt(
      "IERC20",
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
  it("Add installation types", async function () {
    let installationsTypes = await installationFacet.getInstallationTypes([]);
    console.log("installationsType", installationsTypes);
    const installations = [];
    installations.push({
      installationType: 0,
      level: 0,
      width: 2,
      height: 4,
      alchemicaType: 0,
      alchemicaCost: [1, 2, 0, 3],
      installationsVars: [2, 0, 0, 0],
      craftTime: 10000,
    });
    installations.push({
      installationType: 1,
      level: 0,
      width: 6,
      height: 6,
      alchemicaType: 4,
      alchemicaCost: [4, 5, 6, 0],
      installationsVars: [0, 50000, 100, 100],
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
    await installationFacet.craftInstallations([0]);
    await expect(installationFacet.claimInstallations([0])).to.be.revertedWith(
      "InstallationFacet: installation not ready"
    );
    for (let i = 0; i < 11000; i++) {
      ethers.provider.send("evm_mine", []);
    }
    const balancePre = await installationFacet.balanceOf(testAddress, 0);
    await installationFacet.claimInstallations([0]);
    const balancePost = await installationFacet.balanceOf(testAddress, 0);
    expect(balancePost).to.above(balancePre);
  });
});
