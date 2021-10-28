import { impersonate } from "../scripts/helperFunctions";
import { InstallationFacet } from "../typechain";
import { expect } from "chai";
import { ethers } from "hardhat";
import { deployDiamond } from "../scripts/deploy";
import { Installation } from "../types";

let diamondAddress;
let installationFacet: InstallationFacet;
let accounts;
let ownerAddress: string;

describe("Realm tests", async function () {
  before(async function () {
    this.timeout(20000000);
    diamondAddress = await deployDiamond();
    accounts = await ethers.getSigners();
    ownerAddress = accounts[0].address;

    installationFacet = (await ethers.getContractAt(
      "InstallationFacet",
      diamondAddress
    )) as InstallationFacet;
  });
  it("Add installation types", async function () {
    let installationsType = await installationFacet.getInstallationTypes([]);
    console.log("installationsType", installationsType);
    const harvester = {
      installationType: 0,
      level: 0,
      width: 40,
      height: 40,
      alchemicaType: 1,
      alchemicaCost: [200, 20, 0, 100],
      craftTime: 10000,
    };
    const reservoir = {
      installationType: 1,
      level: 0,
      width: 60,
      height: 60,
      alchemicaType: 1,
      alchemicaCost: [50, 500, 250, 0],
      craftTime: 50000,
    };
    await installationFacet.addInstallationTypes([harvester, reservoir]);
    installationsType = await installationFacet.getInstallationTypes([]);
    console.log("installationsType", installationsType);
  });
});
