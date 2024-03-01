/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IMessageDropCallback,
  IMessageDropCallbackInterface,
} from "../../../../src/libraries/callbacks/IMessageDropCallback";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "onDropMessage",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export class IMessageDropCallback__factory {
  static readonly abi = _abi;
  static createInterface(): IMessageDropCallbackInterface {
    return new Interface(_abi) as IMessageDropCallbackInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IMessageDropCallback {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IMessageDropCallback;
  }
}
