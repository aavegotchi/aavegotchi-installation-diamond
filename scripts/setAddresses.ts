import { ethers } from "hardhat";
import { InstallationFacet } from "../typechain";

export async function setAddresses() {
  const diamondAddress = "0x071f9431276F63aaA14b759Bd41143Cb1654AB93";
  const installationFacet = (await ethers.getContractAt(
    "InstallationFacet",
    diamondAddress
  )) as InstallationFacet;

  await installationFacet.setAlchemicaAddresses(
    [
      "0x9Fee2dbFceB39103F9cA732A38531BDcd14F7ED7",
      "0x5a2347fb5dd05c9F05474108B3a77e511D977dBb",
      "0x7Fe83e7E44cFDA7BBA8abd7F93a11A607470668d",
      "0x06975058C9701f1626c152f61De8348D5CFdd837",
    ],
    { gasPrice: ethers.utils.parseUnits("200", "gwei") }
  );

  await installationFacet.setDiamondsAddresses(
    "0x705F32B7D678eE71085ed11ddcba7378367f1582",
    "0xCDe6B59B6AcBbdBf5D6Ef4c291481feCA70cf1aa",
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
