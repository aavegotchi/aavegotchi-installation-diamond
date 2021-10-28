import { BigNumberish } from "@ethersproject/bignumber";

export interface Installation {
  installationType: BigNumberish;
  level: BigNumberish;
  width: BigNumberish;
  height: BigNumberish;
  alchemicaType: BigNumberish;
  alchemicaCost: BigNumberish[];
  craftTime: BigNumberish;
}
