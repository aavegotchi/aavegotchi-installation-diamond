import { BigNumberish } from "@ethersproject/bignumber";

export interface InstallationType {
  installationType: BigNumberish;
  width: BigNumberish;
  height: BigNumberish;
  alchemicaType: BigNumberish;
  alchemicaCost: BigNumberish[];
  craftTime: BigNumberish;
}
