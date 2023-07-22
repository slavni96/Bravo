/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  Bravo,
  BravoInterface,
} from "../../../contracts/BravoLib.sol/Bravo";

const _abi = [
  {
    inputs: [],
    name: "BRAVO_DAPP",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6104cd610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c80635fd8e59a1461004557806384d6ff4a14610063575b600080fd5b61004d61008c565b60405161005a91906101a5565b60405180910390f35b81801561006f57600080fd5b5061008a60048036038101906100859190610280565b6100a4565b005b73f8c694fd58360de278d5ff2276b7130bfdc0192a81565b60008383836040516020016100bb93929190610361565b604051602081830303815290604052905073f8c694fd58360de278d5ff2276b7130bfdc0192a73ffffffffffffffffffffffffffffffffffffffff1663f32078e8826040518263ffffffff1660e01b81526004016101199190610412565b6020604051808303816000875af1158015610138573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061015c919061046a565b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061018f82610164565b9050919050565b61019f81610184565b82525050565b60006020820190506101ba6000830184610196565b92915050565b600080fd5b600080fd5b600281106101d757600080fd5b50565b6000813590506101e9816101ca565b92915050565b6101f881610184565b811461020357600080fd5b50565b600081359050610215816101ef565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126102405761023f61021b565b5b8235905067ffffffffffffffff81111561025d5761025c610220565b5b60208301915083600182028301111561027957610278610225565b5b9250929050565b6000806000806060858703121561029a576102996101c0565b5b60006102a8878288016101da565b94505060206102b987828801610206565b935050604085013567ffffffffffffffff8111156102da576102d96101c5565b5b6102e68782880161022a565b925092505092959194509250565b6102fd81610184565b82525050565b600082825260208201905092915050565b82818337600083830152505050565b6000601f19601f8301169050919050565b60006103408385610303565b935061034d838584610314565b61035683610323565b840190509392505050565b600060408201905061037660008301866102f4565b8181036020830152610389818486610334565b9050949350505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156103cd5780820151818401526020810190506103b2565b60008484015250505050565b60006103e482610393565b6103ee818561039e565b93506103fe8185602086016103af565b61040781610323565b840191505092915050565b6000602082019050818103600083015261042c81846103d9565b905092915050565b6000819050919050565b61044781610434565b811461045257600080fd5b50565b6000815190506104648161043e565b92915050565b6000602082840312156104805761047f6101c0565b5b600061048e84828501610455565b9150509291505056fea26469706673582212204ff22df987b53d9b27205ef88396b3b71503cf80e3c6ee80e73654ecf849fc8f64736f6c63430008130033";

type BravoConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BravoConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Bravo__factory extends ContractFactory {
  constructor(...args: BravoConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Bravo & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Bravo__factory {
    return super.connect(runner) as Bravo__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BravoInterface {
    return new Interface(_abi) as BravoInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Bravo {
    return new Contract(address, _abi, runner) as unknown as Bravo;
  }
}