import { ethers } from "hardhat";
import { InstallationFacet } from "../typechain";

export async function setAddresses() {
  const diamondAddress = "0x6Ead866C75B485d4d1c123dc51eb6f749a02C797";
  const installationFacet = (await ethers.getContractAt(
    "InstallationFacet",
    diamondAddress
  )) as InstallationFacet;

  const altar = [];
  const fudharv = [];
  const fomoharv = [];
  const alphaharv = [];
  const kekharv = [];
  const fudres = [];
  const fomores = [];
  const alphares = [];
  const kekres = [];
  const lodges = [];
  const walls = [];
  const nfts = [];
  altar.push({
    installationType: 0,
    level: 0,
    width: 0,
    height: 0,
    alchemicaType: 0,
    alchemicaCost: [0, 0, 0, 0],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 0,
    prerequisites: [],
  });
  altar.push({
    installationType: 2,
    level: 1,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [
      ethers.utils.parseUnits("100"),
      ethers.utils.parseUnits("100"),
      ethers.utils.parseUnits("100"),
      ethers.utils.parseUnits("100"),
    ],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 10000,
    prerequisites: [],
  });
  altar.push({
    installationType: 2,
    level: 2,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [
      ethers.utils.parseUnits("200"),
      ethers.utils.parseUnits("200"),
      ethers.utils.parseUnits("200"),
      ethers.utils.parseUnits("200"),
    ],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 10000,
    prerequisites: [1],
  });
  altar.push({
    installationType: 2,
    level: 3,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [
      ethers.utils.parseUnits("300"),
      ethers.utils.parseUnits("300"),
      ethers.utils.parseUnits("300"),
      ethers.utils.parseUnits("300"),
    ],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 10000,
    prerequisites: [2],
  });
  altar.push({
    installationType: 2,
    level: 4,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [
      ethers.utils.parseUnits("400"),
      ethers.utils.parseUnits("400"),
      ethers.utils.parseUnits("400"),
      ethers.utils.parseUnits("400"),
    ],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 10000,
    prerequisites: [3],
  });
  altar.push({
    installationType: 2,
    level: 5,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [
      ethers.utils.parseUnits("500"),
      ethers.utils.parseUnits("500"),
      ethers.utils.parseUnits("500"),
      ethers.utils.parseUnits("500"),
    ],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 10000,
    prerequisites: [4],
  });
  altar.push({
    installationType: 2,
    level: 6,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [
      ethers.utils.parseUnits("600"),
      ethers.utils.parseUnits("600"),
      ethers.utils.parseUnits("600"),
      ethers.utils.parseUnits("600"),
    ],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 10000,
    prerequisites: [5],
  });
  altar.push({
    installationType: 2,
    level: 7,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [
      ethers.utils.parseUnits("700"),
      ethers.utils.parseUnits("700"),
      ethers.utils.parseUnits("700"),
      ethers.utils.parseUnits("700"),
    ],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 10000,
    prerequisites: [6],
  });
  altar.push({
    installationType: 2,
    level: 8,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [
      ethers.utils.parseUnits("800"),
      ethers.utils.parseUnits("800"),
      ethers.utils.parseUnits("800"),
      ethers.utils.parseUnits("800"),
    ],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 10000,
    prerequisites: [7],
  });
  altar.push({
    installationType: 2,
    level: 9,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [
      ethers.utils.parseUnits("900"),
      ethers.utils.parseUnits("900"),
      ethers.utils.parseUnits("900"),
      ethers.utils.parseUnits("900"),
    ],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 10000,
    prerequisites: [8],
  });
  fudharv.push({
    installationType: 0,
    level: 1,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("100"), 0, 0, 0],
    harvestRate: ethers.utils.parseUnits("1"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [1],
  });
  fudharv.push({
    installationType: 0,
    level: 2,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("200"), 0, 0, 0],
    harvestRate: ethers.utils.parseUnits("2"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [2],
  });
  fudharv.push({
    installationType: 0,
    level: 3,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("300"), 0, 0, 0],
    harvestRate: ethers.utils.parseUnits("3"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [3],
  });
  fudharv.push({
    installationType: 0,
    level: 4,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("400"), 0, 0, 0],
    harvestRate: ethers.utils.parseUnits("4"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [4],
  });
  fudharv.push({
    installationType: 0,
    level: 5,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("500"), 0, 0, 0],
    harvestRate: ethers.utils.parseUnits("5"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [5],
  });
  fudharv.push({
    installationType: 0,
    level: 6,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("600"), 0, 0, 0],
    harvestRate: ethers.utils.parseUnits("6"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [6],
  });
  fudharv.push({
    installationType: 0,
    level: 7,
    width: 2,
    height: 2,
    alchemicaType: 1,
    alchemicaCost: [0, ethers.utils.parseUnits("700"), 0, 0],
    harvestRate: ethers.utils.parseUnits("7"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [7],
  });
  fudharv.push({
    installationType: 0,
    level: 8,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("800"), 0, 0, 0],
    harvestRate: ethers.utils.parseUnits("8"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [8],
  });
  fudharv.push({
    installationType: 0,
    level: 9,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("900"), 0, 0, 0],
    harvestRate: ethers.utils.parseUnits("9"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [9],
  });
  fomoharv.push({
    installationType: 0,
    level: 1,
    width: 2,
    height: 2,
    alchemicaType: 1,
    alchemicaCost: [0, ethers.utils.parseUnits("100"), 0, 0],
    harvestRate: ethers.utils.parseUnits("1"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [1],
  });
  fomoharv.push({
    installationType: 0,
    level: 2,
    width: 2,
    height: 2,
    alchemicaType: 1,
    alchemicaCost: [0, ethers.utils.parseUnits("200"), 0, 0],
    harvestRate: ethers.utils.parseUnits("2"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [2],
  });
  fomoharv.push({
    installationType: 0,
    level: 3,
    width: 2,
    height: 2,
    alchemicaType: 1,
    alchemicaCost: [0, ethers.utils.parseUnits("300"), 0, 0],
    harvestRate: ethers.utils.parseUnits("3"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [3],
  });
  fomoharv.push({
    installationType: 0,
    level: 4,
    width: 2,
    height: 2,
    alchemicaType: 1,
    alchemicaCost: [0, ethers.utils.parseUnits("400"), 0, 0],
    harvestRate: ethers.utils.parseUnits("4"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [4],
  });
  fomoharv.push({
    installationType: 0,
    level: 5,
    width: 2,
    height: 2,
    alchemicaType: 1,
    alchemicaCost: [0, ethers.utils.parseUnits("500"), 0, 0],
    harvestRate: ethers.utils.parseUnits("5"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [5],
  });
  fomoharv.push({
    installationType: 0,
    level: 6,
    width: 2,
    height: 2,
    alchemicaType: 1,
    alchemicaCost: [0, ethers.utils.parseUnits("600"), 0, 0],
    harvestRate: ethers.utils.parseUnits("6"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [6],
  });
  fomoharv.push({
    installationType: 0,
    level: 7,
    width: 2,
    height: 2,
    alchemicaType: 1,
    alchemicaCost: [0, ethers.utils.parseUnits("700"), 0, 0],
    harvestRate: ethers.utils.parseUnits("7"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [7],
  });
  fomoharv.push({
    installationType: 0,
    level: 8,
    width: 2,
    height: 2,
    alchemicaType: 1,
    alchemicaCost: [0, ethers.utils.parseUnits("800"), 0, 0],
    harvestRate: ethers.utils.parseUnits("8"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [8],
  });
  fomoharv.push({
    installationType: 0,
    level: 9,
    width: 2,
    height: 2,
    alchemicaType: 1,
    alchemicaCost: [0, ethers.utils.parseUnits("900"), 0, 0],
    harvestRate: ethers.utils.parseUnits("9"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [9],
  });
  alphaharv.push({
    installationType: 0,
    level: 1,
    width: 2,
    height: 2,
    alchemicaType: 2,
    alchemicaCost: [0, 0, ethers.utils.parseUnits("100"), 0],
    harvestRate: ethers.utils.parseUnits("1"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [1],
  });
  alphaharv.push({
    installationType: 0,
    level: 2,
    width: 2,
    height: 2,
    alchemicaType: 2,
    alchemicaCost: [0, 0, ethers.utils.parseUnits("200"), 0],
    harvestRate: ethers.utils.parseUnits("2"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [2],
  });
  alphaharv.push({
    installationType: 0,
    level: 3,
    width: 2,
    height: 2,
    alchemicaType: 2,
    alchemicaCost: [0, 0, ethers.utils.parseUnits("300"), 0],
    harvestRate: ethers.utils.parseUnits("3"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [3],
  });
  alphaharv.push({
    installationType: 0,
    level: 4,
    width: 2,
    height: 2,
    alchemicaType: 2,
    alchemicaCost: [0, 0, ethers.utils.parseUnits("400"), 0],
    harvestRate: ethers.utils.parseUnits("4"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [4],
  });
  alphaharv.push({
    installationType: 0,
    level: 5,
    width: 2,
    height: 2,
    alchemicaType: 2,
    alchemicaCost: [0, 0, ethers.utils.parseUnits("500"), 0],
    harvestRate: ethers.utils.parseUnits("5"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [5],
  });
  alphaharv.push({
    installationType: 0,
    level: 6,
    width: 2,
    height: 2,
    alchemicaType: 2,
    alchemicaCost: [0, 0, ethers.utils.parseUnits("600"), 0],
    harvestRate: ethers.utils.parseUnits("6"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [6],
  });
  alphaharv.push({
    installationType: 0,
    level: 7,
    width: 2,
    height: 2,
    alchemicaType: 2,
    alchemicaCost: [0, 0, ethers.utils.parseUnits("700"), 0],
    harvestRate: ethers.utils.parseUnits("7"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [7],
  });
  alphaharv.push({
    installationType: 0,
    level: 8,
    width: 2,
    height: 2,
    alchemicaType: 2,
    alchemicaCost: [0, 0, ethers.utils.parseUnits("800"), 0],
    harvestRate: ethers.utils.parseUnits("8"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [8],
  });
  alphaharv.push({
    installationType: 0,
    level: 9,
    width: 2,
    height: 2,
    alchemicaType: 2,
    alchemicaCost: [0, 0, ethers.utils.parseUnits("900"), 0],
    harvestRate: ethers.utils.parseUnits("9"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [9],
  });
  kekharv.push({
    installationType: 0,
    level: 1,
    width: 2,
    height: 2,
    alchemicaType: 3,
    alchemicaCost: [0, 0, 0, ethers.utils.parseUnits("100")],
    harvestRate: ethers.utils.parseUnits("1"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [1],
  });
  kekharv.push({
    installationType: 0,
    level: 2,
    width: 2,
    height: 2,
    alchemicaType: 3,
    alchemicaCost: [0, 0, 0, ethers.utils.parseUnits("200")],
    harvestRate: ethers.utils.parseUnits("2"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [2],
  });
  kekharv.push({
    installationType: 0,
    level: 3,
    width: 2,
    height: 2,
    alchemicaType: 3,
    alchemicaCost: [0, 0, 0, ethers.utils.parseUnits("300")],
    harvestRate: ethers.utils.parseUnits("3"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [3],
  });
  kekharv.push({
    installationType: 0,
    level: 4,
    width: 2,
    height: 2,
    alchemicaType: 3,
    alchemicaCost: [0, 0, 0, ethers.utils.parseUnits("400")],
    harvestRate: ethers.utils.parseUnits("4"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [4],
  });
  kekharv.push({
    installationType: 0,
    level: 5,
    width: 2,
    height: 2,
    alchemicaType: 3,
    alchemicaCost: [0, 0, 0, ethers.utils.parseUnits("500")],
    harvestRate: ethers.utils.parseUnits("5"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [5],
  });
  kekharv.push({
    installationType: 0,
    level: 6,
    width: 2,
    height: 2,
    alchemicaType: 3,
    alchemicaCost: [0, 0, 0, ethers.utils.parseUnits("600")],
    harvestRate: ethers.utils.parseUnits("6"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [6],
  });
  kekharv.push({
    installationType: 0,
    level: 7,
    width: 2,
    height: 2,
    alchemicaType: 3,
    alchemicaCost: [0, 0, 0, ethers.utils.parseUnits("700")],
    harvestRate: ethers.utils.parseUnits("7"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [7],
  });
  kekharv.push({
    installationType: 0,
    level: 8,
    width: 2,
    height: 2,
    alchemicaType: 3,
    alchemicaCost: [0, 0, 0, ethers.utils.parseUnits("800")],
    harvestRate: ethers.utils.parseUnits("8"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [8],
  });
  kekharv.push({
    installationType: 0,
    level: 9,
    width: 2,
    height: 2,
    alchemicaType: 3,
    alchemicaCost: [0, 0, 0, ethers.utils.parseUnits("900")],
    harvestRate: ethers.utils.parseUnits("9"),
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 20000,
    prerequisites: [9],
  });
  fudres.push({
    installationType: 1,
    level: 1,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("100"), 0, 0, 0],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("1000"),
    spillRadius: ethers.utils.parseUnits("100"),
    spillRate: ethers.utils.parseUnits("50"),
    craftTime: 20000,
    prerequisites: [1],
  });
  fudres.push({
    installationType: 1,
    level: 2,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("200"), 0, 0, 0],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("2000"),
    spillRadius: ethers.utils.parseUnits("90"),
    spillRate: ethers.utils.parseUnits("45"),
    craftTime: 20000,
    prerequisites: [2],
  });
  fudres.push({
    installationType: 1,
    level: 3,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("300"), 0, 0, 0],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("3000"),
    spillRadius: ethers.utils.parseUnits("80"),
    spillRate: ethers.utils.parseUnits("40"),
    craftTime: 20000,
    prerequisites: [3],
  });
  fudres.push({
    installationType: 1,
    level: 4,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("400"), 0, 0, 0],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("4000"),
    spillRadius: ethers.utils.parseUnits("70"),
    spillRate: ethers.utils.parseUnits("35"),
    craftTime: 20000,
    prerequisites: [4],
  });
  fudres.push({
    installationType: 1,
    level: 5,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("500"), 0, 0, 0],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("5000"),
    spillRadius: ethers.utils.parseUnits("60"),
    spillRate: ethers.utils.parseUnits("30"),
    craftTime: 20000,
    prerequisites: [5],
  });
  fudres.push({
    installationType: 1,
    level: 6,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("600"), 0, 0, 0],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("6000"),
    spillRadius: ethers.utils.parseUnits("50"),
    spillRate: ethers.utils.parseUnits("25"),
    craftTime: 20000,
    prerequisites: [6],
  });
  fudres.push({
    installationType: 1,
    level: 7,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("700"), 0, 0, 0],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("7000"),
    spillRadius: ethers.utils.parseUnits("40"),
    spillRate: ethers.utils.parseUnits("20"),
    craftTime: 20000,
    prerequisites: [7],
  });
  fudres.push({
    installationType: 1,
    level: 8,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("800"), 0, 0, 0],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("8000"),
    spillRadius: ethers.utils.parseUnits("30"),
    spillRate: ethers.utils.parseUnits("15"),
    craftTime: 20000,
    prerequisites: [8],
  });
  fudres.push({
    installationType: 1,
    level: 9,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("900"), 0, 0, 0],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("9000"),
    spillRadius: ethers.utils.parseUnits("20"),
    spillRate: ethers.utils.parseUnits("10"),
    craftTime: 20000,
    prerequisites: [9],
  });
  fomores.push({
    installationType: 1,
    level: 1,
    width: 2,
    height: 2,
    alchemicaType: 1,
    alchemicaCost: [0, ethers.utils.parseUnits("100"), 0, 0],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("1000"),
    spillRadius: ethers.utils.parseUnits("100"),
    spillRate: ethers.utils.parseUnits("50"),
    craftTime: 20000,
    prerequisites: [1],
  });
  fomores.push({
    installationType: 1,
    level: 2,
    width: 2,
    height: 2,
    alchemicaType: 1,
    alchemicaCost: [0, ethers.utils.parseUnits("200"), 0, 0],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("2000"),
    spillRadius: ethers.utils.parseUnits("90"),
    spillRate: ethers.utils.parseUnits("45"),
    craftTime: 20000,
    prerequisites: [2],
  });
  fomores.push({
    installationType: 1,
    level: 3,
    width: 2,
    height: 2,
    alchemicaType: 1,
    alchemicaCost: [0, ethers.utils.parseUnits("300"), 0, 0],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("3000"),
    spillRadius: ethers.utils.parseUnits("80"),
    spillRate: ethers.utils.parseUnits("40"),
    craftTime: 20000,
    prerequisites: [3],
  });
  fomores.push({
    installationType: 1,
    level: 4,
    width: 2,
    height: 2,
    alchemicaType: 1,
    alchemicaCost: [0, ethers.utils.parseUnits("400"), 0, 0],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("4000"),
    spillRadius: ethers.utils.parseUnits("70"),
    spillRate: ethers.utils.parseUnits("35"),
    craftTime: 20000,
    prerequisites: [4],
  });
  fomores.push({
    installationType: 1,
    level: 5,
    width: 2,
    height: 2,
    alchemicaType: 1,
    alchemicaCost: [0, ethers.utils.parseUnits("500"), 0, 0],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("5000"),
    spillRadius: ethers.utils.parseUnits("60"),
    spillRate: ethers.utils.parseUnits("30"),
    craftTime: 20000,
    prerequisites: [5],
  });
  fomores.push({
    installationType: 1,
    level: 6,
    width: 2,
    height: 2,
    alchemicaType: 1,
    alchemicaCost: [0, ethers.utils.parseUnits("600"), 0, 0],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("6000"),
    spillRadius: ethers.utils.parseUnits("50"),
    spillRate: ethers.utils.parseUnits("25"),
    craftTime: 20000,
    prerequisites: [6],
  });
  fomores.push({
    installationType: 1,
    level: 7,
    width: 2,
    height: 2,
    alchemicaType: 1,
    alchemicaCost: [0, ethers.utils.parseUnits("700"), 0, 0],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("7000"),
    spillRadius: ethers.utils.parseUnits("40"),
    spillRate: ethers.utils.parseUnits("20"),
    craftTime: 20000,
    prerequisites: [7],
  });
  fomores.push({
    installationType: 1,
    level: 8,
    width: 2,
    height: 2,
    alchemicaType: 1,
    alchemicaCost: [0, ethers.utils.parseUnits("800"), 0, 0],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("8000"),
    spillRadius: ethers.utils.parseUnits("30"),
    spillRate: ethers.utils.parseUnits("15"),
    craftTime: 20000,
    prerequisites: [8],
  });
  fomores.push({
    installationType: 1,
    level: 9,
    width: 2,
    height: 2,
    alchemicaType: 1,
    alchemicaCost: [0, ethers.utils.parseUnits("900"), 0, 0],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("9000"),
    spillRadius: ethers.utils.parseUnits("20"),
    spillRate: ethers.utils.parseUnits("10"),
    craftTime: 20000,
    prerequisites: [9],
  });
  alphares.push({
    installationType: 1,
    level: 1,
    width: 2,
    height: 2,
    alchemicaType: 2,
    alchemicaCost: [0, 0, ethers.utils.parseUnits("100"), 0],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("1000"),
    spillRadius: ethers.utils.parseUnits("100"),
    spillRate: ethers.utils.parseUnits("50"),
    craftTime: 20000,
    prerequisites: [1],
  });
  alphares.push({
    installationType: 1,
    level: 2,
    width: 2,
    height: 2,
    alchemicaType: 2,
    alchemicaCost: [0, 0, ethers.utils.parseUnits("200"), 0],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("2000"),
    spillRadius: ethers.utils.parseUnits("90"),
    spillRate: ethers.utils.parseUnits("45"),
    craftTime: 20000,
    prerequisites: [2],
  });
  alphares.push({
    installationType: 1,
    level: 3,
    width: 2,
    height: 2,
    alchemicaType: 2,
    alchemicaCost: [0, 0, ethers.utils.parseUnits("300"), 0],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("3000"),
    spillRadius: ethers.utils.parseUnits("80"),
    spillRate: ethers.utils.parseUnits("40"),
    craftTime: 20000,
    prerequisites: [3],
  });
  alphares.push({
    installationType: 1,
    level: 4,
    width: 2,
    height: 2,
    alchemicaType: 2,
    alchemicaCost: [0, 0, ethers.utils.parseUnits("400"), 0],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("4000"),
    spillRadius: ethers.utils.parseUnits("70"),
    spillRate: ethers.utils.parseUnits("35"),
    craftTime: 20000,
    prerequisites: [4],
  });
  alphares.push({
    installationType: 1,
    level: 5,
    width: 2,
    height: 2,
    alchemicaType: 2,
    alchemicaCost: [0, 0, ethers.utils.parseUnits("500"), 0],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("5000"),
    spillRadius: ethers.utils.parseUnits("60"),
    spillRate: ethers.utils.parseUnits("30"),
    craftTime: 20000,
    prerequisites: [5],
  });
  alphares.push({
    installationType: 1,
    level: 6,
    width: 2,
    height: 2,
    alchemicaType: 2,
    alchemicaCost: [0, 0, ethers.utils.parseUnits("600"), 0],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("6000"),
    spillRadius: ethers.utils.parseUnits("50"),
    spillRate: ethers.utils.parseUnits("25"),
    craftTime: 20000,
    prerequisites: [6],
  });
  alphares.push({
    installationType: 1,
    level: 7,
    width: 2,
    height: 2,
    alchemicaType: 2,
    alchemicaCost: [0, 0, ethers.utils.parseUnits("700"), 0],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("7000"),
    spillRadius: ethers.utils.parseUnits("40"),
    spillRate: ethers.utils.parseUnits("20"),
    craftTime: 20000,
    prerequisites: [7],
  });
  alphares.push({
    installationType: 1,
    level: 8,
    width: 2,
    height: 2,
    alchemicaType: 2,
    alchemicaCost: [0, 0, ethers.utils.parseUnits("800"), 0],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("8000"),
    spillRadius: ethers.utils.parseUnits("30"),
    spillRate: ethers.utils.parseUnits("15"),
    craftTime: 20000,
    prerequisites: [8],
  });
  alphares.push({
    installationType: 1,
    level: 9,
    width: 2,
    height: 2,
    alchemicaType: 2,
    alchemicaCost: [0, 0, ethers.utils.parseUnits("900"), 0],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("9000"),
    spillRadius: ethers.utils.parseUnits("20"),
    spillRate: ethers.utils.parseUnits("10"),
    craftTime: 20000,
    prerequisites: [9],
  });
  kekres.push({
    installationType: 1,
    level: 1,
    width: 2,
    height: 2,
    alchemicaType: 3,
    alchemicaCost: [0, 0, 0, ethers.utils.parseUnits("100")],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("1000"),
    spillRadius: ethers.utils.parseUnits("100"),
    spillRate: ethers.utils.parseUnits("50"),
    craftTime: 20000,
    prerequisites: [1],
  });
  kekres.push({
    installationType: 1,
    level: 2,
    width: 2,
    height: 2,
    alchemicaType: 3,
    alchemicaCost: [0, 0, 0, ethers.utils.parseUnits("200")],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("2000"),
    spillRadius: ethers.utils.parseUnits("90"),
    spillRate: ethers.utils.parseUnits("45"),
    craftTime: 20000,
    prerequisites: [2],
  });
  kekres.push({
    installationType: 1,
    level: 3,
    width: 2,
    height: 2,
    alchemicaType: 3,
    alchemicaCost: [0, 0, 0, ethers.utils.parseUnits("300")],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("3000"),
    spillRadius: ethers.utils.parseUnits("80"),
    spillRate: ethers.utils.parseUnits("40"),
    craftTime: 20000,
    prerequisites: [3],
  });
  kekres.push({
    installationType: 1,
    level: 4,
    width: 2,
    height: 2,
    alchemicaType: 3,
    alchemicaCost: [0, 0, 0, ethers.utils.parseUnits("400")],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("4000"),
    spillRadius: ethers.utils.parseUnits("70"),
    spillRate: ethers.utils.parseUnits("35"),
    craftTime: 20000,
    prerequisites: [4],
  });
  kekres.push({
    installationType: 1,
    level: 5,
    width: 2,
    height: 2,
    alchemicaType: 3,
    alchemicaCost: [0, 0, 0, ethers.utils.parseUnits("500")],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("5000"),
    spillRadius: ethers.utils.parseUnits("60"),
    spillRate: ethers.utils.parseUnits("30"),
    craftTime: 20000,
    prerequisites: [5],
  });
  kekres.push({
    installationType: 1,
    level: 6,
    width: 2,
    height: 2,
    alchemicaType: 3,
    alchemicaCost: [0, 0, 0, ethers.utils.parseUnits("600")],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("6000"),
    spillRadius: ethers.utils.parseUnits("50"),
    spillRate: ethers.utils.parseUnits("25"),
    craftTime: 20000,
    prerequisites: [6],
  });
  kekres.push({
    installationType: 1,
    level: 7,
    width: 2,
    height: 2,
    alchemicaType: 3,
    alchemicaCost: [0, 0, 0, ethers.utils.parseUnits("700")],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("7000"),
    spillRadius: ethers.utils.parseUnits("40"),
    spillRate: ethers.utils.parseUnits("20"),
    craftTime: 20000,
    prerequisites: [7],
  });
  kekres.push({
    installationType: 1,
    level: 8,
    width: 2,
    height: 2,
    alchemicaType: 3,
    alchemicaCost: [0, 0, 0, ethers.utils.parseUnits("800")],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("8000"),
    spillRadius: ethers.utils.parseUnits("30"),
    spillRate: ethers.utils.parseUnits("15"),
    craftTime: 20000,
    prerequisites: [8],
  });
  kekres.push({
    installationType: 1,
    level: 9,
    width: 2,
    height: 2,
    alchemicaType: 3,
    alchemicaCost: [0, 0, 0, ethers.utils.parseUnits("900")],
    harvestRate: 0,
    capacity: ethers.utils.parseUnits("9000"),
    spillRadius: ethers.utils.parseUnits("20"),
    spillRate: ethers.utils.parseUnits("10"),
    craftTime: 20000,
    prerequisites: [9],
  });
  lodges.push({
    installationType: 3,
    level: 1,
    width: 5,
    height: 5,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("1000"), 0, 0, 0],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 30000,
    prerequisites: [4],
  });
  lodges.push({
    installationType: 3,
    level: 2,
    width: 5,
    height: 5,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("2000"), 0, 0, 0],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 30000,
    prerequisites: [82],
  });
  lodges.push({
    installationType: 3,
    level: 3,
    width: 5,
    height: 5,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("3000"), 0, 0, 0],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 30000,
    prerequisites: [83],
  });
  lodges.push({
    installationType: 3,
    level: 4,
    width: 5,
    height: 5,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("4000"), 0, 0, 0],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 30000,
    prerequisites: [6, 84],
  });
  lodges.push({
    installationType: 3,
    level: 5,
    width: 5,
    height: 5,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("5000"), 0, 0, 0],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 30000,
    prerequisites: [85],
  });
  lodges.push({
    installationType: 3,
    level: 6,
    width: 5,
    height: 5,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("6000"), 0, 0, 0],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 30000,
    prerequisites: [86],
  });
  lodges.push({
    installationType: 3,
    level: 7,
    width: 5,
    height: 5,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("7000"), 0, 0, 0],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 30000,
    prerequisites: [9, 87],
  });
  lodges.push({
    installationType: 3,
    level: 8,
    width: 5,
    height: 5,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("8000"), 0, 0, 0],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 30000,
    prerequisites: [88],
  });
  lodges.push({
    installationType: 3,
    level: 9,
    width: 5,
    height: 5,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("9000"), 0, 0, 0],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 30000,
    prerequisites: [89],
  });
  walls.push({
    installationType: 4,
    level: 1,
    width: 1,
    height: 1,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("100"), 0, 0, 0],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 5000,
    prerequisites: [1],
  });
  walls.push({
    installationType: 4,
    level: 2,
    width: 1,
    height: 1,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("200"), 0, 0, 0],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 5000,
    prerequisites: [2],
  });
  walls.push({
    installationType: 4,
    level: 3,
    width: 1,
    height: 1,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("300"), 0, 0, 0],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 5000,
    prerequisites: [3],
  });
  walls.push({
    installationType: 4,
    level: 4,
    width: 1,
    height: 1,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("400"), 0, 0, 0],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 5000,
    prerequisites: [4],
  });
  walls.push({
    installationType: 4,
    level: 5,
    width: 1,
    height: 1,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("500"), 0, 0, 0],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 5000,
    prerequisites: [5],
  });
  walls.push({
    installationType: 4,
    level: 6,
    width: 1,
    height: 1,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("600"), 0, 0, 0],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 5000,
    prerequisites: [6],
  });
  walls.push({
    installationType: 4,
    level: 7,
    width: 1,
    height: 1,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("700"), 0, 0, 0],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 5000,
    prerequisites: [7],
  });
  walls.push({
    installationType: 4,
    level: 8,
    width: 1,
    height: 1,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("800"), 0, 0, 0],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 5000,
    prerequisites: [8],
  });
  walls.push({
    installationType: 4,
    level: 9,
    width: 1,
    height: 1,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("900"), 0, 0, 0],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 5000,
    prerequisites: [9],
  });
  nfts.push({
    installationType: 5,
    level: 1,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("100"), 0, 0, 0],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 5000,
    prerequisites: [1],
  });
  nfts.push({
    installationType: 5,
    level: 2,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("200"), 0, 0, 0],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 5000,
    prerequisites: [2],
  });
  nfts.push({
    installationType: 5,
    level: 3,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("300"), 0, 0, 0],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 5000,
    prerequisites: [3],
  });
  nfts.push({
    installationType: 5,
    level: 4,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("400"), 0, 0, 0],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 5000,
    prerequisites: [4],
  });
  nfts.push({
    installationType: 5,
    level: 5,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("500"), 0, 0, 0],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 5000,
    prerequisites: [5],
  });
  nfts.push({
    installationType: 5,
    level: 6,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("600"), 0, 0, 0],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 5000,
    prerequisites: [6],
  });
  nfts.push({
    installationType: 5,
    level: 7,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("700"), 0, 0, 0],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 5000,
    prerequisites: [7],
  });
  nfts.push({
    installationType: 5,
    level: 8,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("800"), 0, 0, 0],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 5000,
    prerequisites: [8],
  });
  nfts.push({
    installationType: 5,
    level: 9,
    width: 2,
    height: 2,
    alchemicaType: 0,
    alchemicaCost: [ethers.utils.parseUnits("900"), 0, 0, 0],
    harvestRate: 0,
    capacity: 0,
    spillRadius: 0,
    spillRate: 0,
    craftTime: 5000,
    prerequisites: [9],
  });

  await installationFacet.addInstallationTypes(altar);
  await installationFacet.addInstallationTypes(fudharv);
  await installationFacet.addInstallationTypes(fomoharv);
  await installationFacet.addInstallationTypes(alphaharv);
  await installationFacet.addInstallationTypes(kekharv);
  await installationFacet.addInstallationTypes(fudres);
  await installationFacet.addInstallationTypes(fomores);
  await installationFacet.addInstallationTypes(alphares);
  await installationFacet.addInstallationTypes(kekres);
  await installationFacet.addInstallationTypes(lodges);
  await installationFacet.addInstallationTypes(walls);
  await installationFacet.addInstallationTypes(nfts);
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
