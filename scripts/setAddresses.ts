import { ethers } from "hardhat";
import { InstallationFacet } from "../typechain";

export async function setAddresses() {
  const diamondAddress = "0x75139C13199A3470A0505AdBEa4f25570FFf362b";
  const installationFacet = (await ethers.getContractAt(
    "InstallationFacet",
    diamondAddress
  )) as InstallationFacet;

  await installationFacet.setAlchemicaAddresses(
    [
      "0x87E8f332f34984728Da4c0A008a495A5Ec4E09a2",
      "0x53E4DAFF2073f848DC3F7a8D7CC95b3607212A73",
      "0x1E2e9190Cea3A97b5Aa85d9757117F499D31C47d",
      "0x52c9dE743a250a4D8E1194E11e447bb45324436f",
    ],
    { gasPrice: ethers.utils.parseUnits("200", "gwei") }
  );

  await installationFacet.setDiamondsAddresses(
    "0x86935F11C86623deC8a25696E1C19a8659CbF95d",
    "0x1D0360BaC7299C86Ec8E99d0c1C9A95FEfaF2a11",
    { gasPrice: ethers.utils.parseUnits("200", "gwei") }
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
if (require.main === module) {
  setAddresses()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
