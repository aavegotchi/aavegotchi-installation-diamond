import { ethers } from "hardhat";
import { InstallationFacet } from "../typechain";

export async function setAddresses() {
  const diamondAddress = "0x1B84ADcD1DC7F2890D6e4889232cc349b3517F92";
  const installationFacet = (await ethers.getContractAt(
    "InstallationFacet",
    diamondAddress
  )) as InstallationFacet;

  await installationFacet.setAlchemicaAddresses([
    "0x598b89001Ca5803F6d89Add48A97093cbeb0E357",
    "0x5aB0C511c53d71454922b26ff30ac2B5E9Eaa943",
    "0x6633A0655735fAAEa559743b45b24BD721D99926",
    "0x01D97D3d2Dc484C2F6a68c99747d9664d1adB64f",
  ]);

  await installationFacet.setDiamondsAddresses(
    "0x98d1c377451702FA39215e674a678D277C82404b",
    "0x98d1c377451702FA39215e674a678D277C82404b"
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
