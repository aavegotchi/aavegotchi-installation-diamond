/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  InstallationFacet,
  InstallationFacetInterface,
} from "../InstallationFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_toContract",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_toTokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_tokenTypeId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "TransferToParent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_itemIds",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_quantities",
        type: "uint256[]",
      },
    ],
    name: "UseConsumables",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint16",
            name: "installationType",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "level",
            type: "uint16",
          },
          {
            internalType: "uint256",
            name: "width",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "height",
            type: "uint256",
          },
          {
            internalType: "uint16",
            name: "alchemicaType",
            type: "uint16",
          },
          {
            internalType: "uint256[]",
            name: "alchemicaCost",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "craftTime",
            type: "uint256",
          },
        ],
        internalType: "struct Installation[]",
        name: "_installationTypes",
        type: "tuple[]",
      },
    ],
    name: "addInstallationTypes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "bal_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_owners",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "bals",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "balanceOfToken",
    outputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_queueId",
        type: "uint256",
      },
    ],
    name: "claimInstallation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_installationTypes",
        type: "uint256[]",
      },
    ],
    name: "craftInstallations",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
    ],
    name: "getInstallationType",
    outputs: [
      {
        components: [
          {
            internalType: "uint16",
            name: "installationType",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "level",
            type: "uint16",
          },
          {
            internalType: "uint256",
            name: "width",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "height",
            type: "uint256",
          },
          {
            internalType: "uint16",
            name: "alchemicaType",
            type: "uint16",
          },
          {
            internalType: "uint256[]",
            name: "alchemicaCost",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "craftTime",
            type: "uint256",
          },
        ],
        internalType: "struct Installation",
        name: "installationType",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_itemIds",
        type: "uint256[]",
      },
    ],
    name: "getInstallationTypes",
    outputs: [
      {
        components: [
          {
            internalType: "uint16",
            name: "installationType",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "level",
            type: "uint16",
          },
          {
            internalType: "uint256",
            name: "width",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "height",
            type: "uint256",
          },
          {
            internalType: "uint16",
            name: "alchemicaType",
            type: "uint16",
          },
          {
            internalType: "uint256[]",
            name: "alchemicaCost",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "craftTime",
            type: "uint256",
          },
        ],
        internalType: "struct Installation[]",
        name: "itemTypes_",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "itemBalances",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
        ],
        internalType: "struct InstallationFacet.ItemIdIO[]",
        name: "bals_",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "itemBalancesOfToken",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
        ],
        internalType: "struct InstallationFacet.ItemIdIO[]",
        name: "bals_",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "itemBalancesOfTokenWithTypes",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint16",
                name: "installationType",
                type: "uint16",
              },
              {
                internalType: "uint16",
                name: "level",
                type: "uint16",
              },
              {
                internalType: "uint256",
                name: "width",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "height",
                type: "uint256",
              },
              {
                internalType: "uint16",
                name: "alchemicaType",
                type: "uint16",
              },
              {
                internalType: "uint256[]",
                name: "alchemicaCost",
                type: "uint256[]",
              },
              {
                internalType: "uint256",
                name: "craftTime",
                type: "uint256",
              },
            ],
            internalType: "struct Installation",
            name: "installationType",
            type: "tuple",
          },
        ],
        internalType: "struct ItemTypeIO[]",
        name: "itemBalancesOfTokenWithTypes_",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "itemBalancesWithTypes",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint16",
                name: "installationType",
                type: "uint16",
              },
              {
                internalType: "uint16",
                name: "level",
                type: "uint16",
              },
              {
                internalType: "uint256",
                name: "width",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "height",
                type: "uint256",
              },
              {
                internalType: "uint16",
                name: "alchemicaType",
                type: "uint16",
              },
              {
                internalType: "uint256[]",
                name: "alchemicaCost",
                type: "uint256[]",
              },
              {
                internalType: "uint256",
                name: "craftTime",
                type: "uint256",
              },
            ],
            internalType: "struct Installation",
            name: "installationType",
            type: "tuple",
          },
        ],
        internalType: "struct ItemTypeIO[]",
        name: "output_",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_value",
        type: "string",
      },
    ],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint16",
            name: "installationType",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "level",
            type: "uint16",
          },
          {
            internalType: "uint256",
            name: "width",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "height",
            type: "uint256",
          },
          {
            internalType: "uint16",
            name: "alchemicaType",
            type: "uint16",
          },
          {
            internalType: "uint256[]",
            name: "alchemicaCost",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "craftTime",
            type: "uint256",
          },
        ],
        internalType: "struct Installation",
        name: "_updatedInstallation",
        type: "tuple",
      },
    ],
    name: "updateInstallationType",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506122c0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100f45760003560e01c80637e2cd18d11610097578063d72fecea11610066578063d72fecea1461026f578063ea97843214610282578063f105908c146102a2578063fcdbbe1d146102b557600080fd5b80637e2cd18d1461021657806386638d6a146102365780638f984b24146102495780639623af4d1461025c57600080fd5b806342784f14116100d357806342784f14146101a15780634e1273f4146101c157806355f804b3146101e15780637b55f07f146101f657600080fd5b8062fdd58e146100f95780630e89341c1461014157806339a209df14610161575b600080fd5b61012e610107366004611a6e565b6001600160a01b039091166000908152600960209081526040808320938352929052205490565b6040519081526020015b60405180910390f35b61015461014f366004611a98565b6102c8565b6040516101389190611ae1565b61012e61016f366004611b14565b6001600160a01b0390921660009081526006602090815260408083209383529281528282209382529290925290205490565b6101b46101af366004611a98565b6103cc565b6040516101389190611be7565b6101d46101cf366004611c45565b610506565b6040516101389190611cb0565b6101f46101ef366004611d31565b610678565b005b610209610204366004611dc5565b6106f8565b6040516101389190611e06565b610229610224366004611a6e565b610967565b6040516101389190611e68565b6101f4610244366004611dc5565b610ac3565b6101f4610257366004611f48565b610c3e565b6101f461026a366004611a98565b610c49565b61022961027d366004612008565b610d47565b610295610290366004611a6e565b610e85565b6040516101389190612023565b6101f46102b0366004611dc5565b610e98565b6102956102c3366004612008565b61112b565b600354606090821061032f5760405162461bcd60e51b815260206004820152602560248201527f496e7374616c6c6174696f6e46616365743a204974656d205f6964206e6f7420604482015264199bdd5b9960da1b60648201526084015b60405180910390fd5b6103c660006002018054610342906120a2565b80601f016020809104026020016040519081016040528092919081815260200182805461036e906120a2565b80156103bb5780601f10610390576101008083540402835291602001916103bb565b820191906000526020600020905b81548152906001019060200180831161039e57829003601f168201915b505050505083611341565b92915050565b6103d4611910565b60035482106104385760405162461bcd60e51b815260206004820152602a60248201527f496e7374616c6c6174696f6e46616365743a204974656d207479706520646f656044820152691cdb89dd08195e1a5cdd60b21b6064820152608401610326565b600380548390811061044c5761044c6120dd565b60009182526020918290206040805160e0810182526006909302909101805461ffff8082168552620100009091048116848601526001820154848401526002820154606085015260038201541660808401526004810180548351818702810187019094528084529394919360a0860193928301828280156104ec57602002820191906000526020600020905b8154815260200190600101908083116104d8575b505050505081526020016005820154815250509050919050565b606083821461057d5760405162461bcd60e51b815260206004820152603960248201527f496e7374616c6c6174696f6e46616365743a205f6f776e657273206c656e677460448201527f68206e6f742073616d65206173205f696473206c656e677468000000000000006064820152608401610326565b836001600160401b0381111561059557610595611cc3565b6040519080825280602002602001820160405280156105be578160200160208202803683370190505b50905060005b8481101561066f5760008484838181106105e0576105e06120dd565b90506020020135905060008787848181106105fd576105fd6120dd565b90506020020160208101906106129190612008565b6001600160a01b038116600090815260096020908152604080832086845290915290205485519192509085908590811061064e5761064e6120dd565b6020026020010181815250505050808061066790612109565b9150506105c4565b50949350505050565b610680611450565b8051610693906002906020840190611959565b5060005b6003548110156106f457807f6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b6106cd8484611341565b6040516106da9190611ae1565b60405180910390a2806106ec81612109565b915050610697565b5050565b6060816107f357600380546040805160208084028201810190925282815292919060009084015b828210156107e85760008481526020908190206040805160e08101825260068602909201805461ffff8082168552620100009091048116848601526001820154848401526002820154606085015260038201541660808401526004810180548351818702810187019094528084529394919360a0860193928301828280156107c657602002820191906000526020600020905b8154815260200190600101908083116107b2575b505050505081526020016005820154815250508152602001906001019061071f565b5050505090506103c6565b816001600160401b0381111561080b5761080b611cc3565b60405190808252806020026020018201604052801561084457816020015b610831611910565b8152602001906001900390816108295790505b50905060005b82811015610960576003848483818110610866576108666120dd565b905060200201358154811061087d5761087d6120dd565b60009182526020918290206040805160e0810182526006909302909101805461ffff8082168552620100009091048116848601526001820154848401526002820154606085015260038201541660808401526004810180548351818702810187019094528084529394919360a08601939283018282801561091d57602002820191906000526020600020905b815481526020019060010190808311610909575b50505050508152602001600582015481525050828281518110610942576109426120dd565b6020026020010181905250808061095890612109565b91505061084a565b5092915050565b6001600160a01b0382166000908152600760209081526040808320848452909152902054606090806001600160401b038111156109a6576109a6611cc3565b6040519080825280602002602001820160405280156109eb57816020015b60408051808201909152600080825260208201528152602001906001900390816109c45790505b50915060005b81811015610abb576001600160a01b03851660009081526007602090815260408083208784529091528120805483908110610a2e57610a2e6120dd565b9060005260206000200154905080848381518110610a4e57610a4e6120dd565b602090810291909101810151919091526001600160a01b0387166000908152600682526040808220888352835280822084835290925220548451859084908110610a9a57610a9a6120dd565b60209081029190910181015101525080610ab381612109565b9150506109f1565b505092915050565b60005b60ff8116821115610c395760005b6003805460ff8416908110610aeb57610aeb6120dd565b9060005260206000209060060201600401805490508160ff161015610ba057610b8e60006001018260ff1681548110610b2657610b266120dd565b600091825260209091200154600380546001600160a01b03909216913391309160ff8816908110610b5957610b596120dd565b90600052602060002090600602016004018560ff1681548110610b7e57610b7e6120dd565b90600052602060002001546114d9565b81610b9881612124565b925050610ad4565b50604080516060810182523380825243602080840191825260ff8616848601908152600084815260048352868120600580855288832080548452918552978220965187546001600160a01b0319166001600160a01b0390911617875593516001870155905160029095019490945591835292905281549190610c2183612109565b91905055508080610c3190612124565b915050610ac6565b505050565b610c46611450565b50565b3360008181526004602090815260408083208584529091529020546001600160a01b031614610c7757600080fd5b336000908152600460209081526040808320848452909152812060020154600380549091908110610caa57610caa6120dd565b6000918252602080832060056006909302019190910154338352600482526040808420868552909252912060010154610ce39190612144565b9050804210156106f45760405162461bcd60e51b815260206004820152602960248201527f496e7374616c6c6174696f6e46616365743a20696e7374616c6c6174696f6e206044820152686e6f7420726561647960b81b6064820152608401610326565b6001600160a01b0381166000908152600a6020526040902054606090806001600160401b03811115610d7b57610d7b611cc3565b604051908082528060200260200182016040528015610dc057816020015b6040805180820190915260008082526020820152815260200190600190039081610d995790505b50915060005b81811015610e7e576001600160a01b0384166000908152600a60205260408120805483908110610df857610df86120dd565b60009182526020808320909101546001600160a01b0388168352600982526040808420828552909252912054855191925090859084908110610e3c57610e3c6120dd565b6020026020010151602001818152505080848381518110610e5f57610e5f6120dd565b6020908102919091010151525080610e7681612109565b915050610dc6565b5050919050565b6060610e9183836115e6565b9392505050565b610ea0611450565b60005b61ffff8116821115610c395760006003016040518060e0016040528085858561ffff16818110610ed557610ed56120dd565b9050602002810190610ee7919061215c565b610ef590602081019061217c565b61ffff16815260200185858561ffff16818110610f1457610f146120dd565b9050602002810190610f26919061215c565b610f3790604081019060200161217c565b61ffff16815260200185858561ffff16818110610f5657610f566120dd565b9050602002810190610f68919061215c565b60400135815260200185858561ffff16818110610f8757610f876120dd565b9050602002810190610f99919061215c565b60600135815260200185858561ffff16818110610fb857610fb86120dd565b9050602002810190610fca919061215c565b610fdb9060a081019060800161217c565b61ffff16815260200185858561ffff16818110610ffa57610ffa6120dd565b905060200281019061100c919061215c565b61101a9060a0810190612197565b80806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250505090825250602001858561ffff8616818110611067576110676120dd565b9050602002810190611079919061215c565b60c0013590528154600181810184556000938452602093849020835160069093020180548585015161ffff908116620100000263ffffffff19909216948116949094171781556040840151918101919091556060830151600282015560808301516003820180549190931661ffff19919091161790915560a082015180519293919261110b92600485019201906119dd565b5060c0820151816005015550508080611123906121e0565b915050610ea3565b6001600160a01b0381166000908152600a6020526040902054606090806001600160401b0381111561115f5761115f611cc3565b60405190808252806020026020018201604052801561119857816020015b611185611a17565b81526020019060019003908161117d5790505b50915060005b81811015610e7e576001600160a01b0384166000908152600a602052604081208054839081106111d0576111d06120dd565b60009182526020808320909101546001600160a01b0388168352600982526040808420828552909252912054855191925090859084908110611214576112146120dd565b6020026020010151600001818152505080848381518110611237576112376120dd565b60209081029190910181015101526003805482908110611259576112596120dd565b60009182526020918290206040805160e0810182526006909302909101805461ffff8082168552620100009091048116848601526001820154848401526002820154606085015260038201541660808401526004810180548351818702810187019094528084529394919360a0860193928301828280156112f957602002820191906000526020600020905b8154815260200190600101908083116112e5575b5050505050815260200160058201548152505084838151811061131e5761131e6120dd565b60200260200101516040018190525050808061133990612109565b91505061119e565b60608082611371578360405160200161135a9190612202565b6040516020818303038152906040529150506103c6565b8260005b811561138957600101600a82049150611375565b806001600160401b038111156113a1576113a1611cc3565b6040519080825280601f01601f1916602001820160405280156113cb576020820181803683370190505b50925084915060001981015b821561142257600a830660300160f81b84828060019003935081518110611400576114006120dd565b60200101906001600160f81b031916908160001a905350600a830492506113d7565b5050508381604051602001611438929190612227565b60405160208183030381529060405291505092915050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c600401546001600160a01b031633146114d75760405162461bcd60e51b815260206004820152602260248201527f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60448201526132b960f11b6064820152608401610326565b565b833b806115285760405162461bcd60e51b815260206004820152601d60248201527f4c696245524332303a204164647265737320686173206e6f20636f64650000006044820152606401610326565b604080516001600160a01b0386811660248301528581166044830152606480830186905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283929089169161158c9190612256565b6000604051808303816000865af19150503d80600081146115c9576040519150601f19603f3d011682016040523d82523d6000602084013e6115ce565b606091505b50915091506115dd828261182b565b50505050505050565b6001600160a01b038216600090815260076020908152604080832084845290915281205460609190806001600160401b0381111561162657611626611cc3565b60405190808252806020026020018201604052801561165f57816020015b61164c611a17565b8152602001906001900390816116445790505b50925060005b81811015611822576001600160a01b0386166000908152600784016020908152604080832088845290915281208054839081106116a4576116a46120dd565b60009182526020808320909101546001600160a01b038a16835260068701825260408084208a8552835280842082855290925291205486519192509082908790859081106116f4576116f46120dd565b6020026020010151602001818152505080868481518110611717576117176120dd565b60209081029190910101515260038501805483908110611739576117396120dd565b60009182526020918290206040805160e0810182526006909302909101805461ffff8082168552620100009091048116848601526001820154848401526002820154606085015260038201541660808401526004810180548351818702810187019094528084529394919360a0860193928301828280156117d957602002820191906000526020600020905b8154815260200190600101908083116117c5575b505050505081526020016005820154815250508684815181106117fe576117fe6120dd565b6020026020010151604001819052505050808061181a90612109565b915050611665565b50505092915050565b81156118a7578051156106f4578080602001905181019061184c9190612268565b6106f45760405162461bcd60e51b815260206004820152602660248201527f4c696245524332303a20636f6e74726163742063616c6c2072657475726e65646044820152652066616c736560d01b6064820152608401610326565b8051156118c8578060405162461bcd60e51b81526004016103269190611ae1565b60405162461bcd60e51b815260206004820181905260248201527f4c696245524332303a20636f6e74726163742063616c6c2072657665727465646044820152606401610326565b6040518060e00160405280600061ffff168152602001600061ffff1681526020016000815260200160008152602001600061ffff16815260200160608152602001600081525090565b828054611965906120a2565b90600052602060002090601f01602090048101928261198757600085556119cd565b82601f106119a057805160ff19168380011785556119cd565b828001600101855582156119cd579182015b828111156119cd5782518255916020019190600101906119b2565b506119d9929150611a3d565b5090565b8280548282559060005260206000209081019282156119cd57916020028201828111156119cd5782518255916020019190600101906119b2565b60405180606001604052806000815260200160008152602001611a38611910565b905290565b5b808211156119d95760008155600101611a3e565b80356001600160a01b0381168114611a6957600080fd5b919050565b60008060408385031215611a8157600080fd5b611a8a83611a52565b946020939093013593505050565b600060208284031215611aaa57600080fd5b5035919050565b60005b83811015611acc578181015183820152602001611ab4565b83811115611adb576000848401525b50505050565b6020815260008251806020840152611b00816040850160208701611ab1565b601f01601f19169190910160400192915050565b600080600060608486031215611b2957600080fd5b611b3284611a52565b95602085013595506040909401359392505050565b600081518084526020808501945080840160005b83811015611b7757815187529582019590820190600101611b5b565b509495945050505050565b600061ffff80835116845280602084015116602085015260408301516040850152606083015160608501528060808401511660808501525060a082015160e060a0850152611bd360e0850182611b47565b60c093840151949093019390935250919050565b602081526000610e916020830184611b82565b60008083601f840112611c0c57600080fd5b5081356001600160401b03811115611c2357600080fd5b6020830191508360208260051b8501011115611c3e57600080fd5b9250929050565b60008060008060408587031215611c5b57600080fd5b84356001600160401b0380821115611c7257600080fd5b611c7e88838901611bfa565b90965094506020870135915080821115611c9757600080fd5b50611ca487828801611bfa565b95989497509550505050565b602081526000610e916020830184611b47565b634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b0381118282101715611cfb57611cfb611cc3565b60405290565b604051601f8201601f191681016001600160401b0381118282101715611d2957611d29611cc3565b604052919050565b60006020808385031215611d4457600080fd5b82356001600160401b0380821115611d5b57600080fd5b818501915085601f830112611d6f57600080fd5b813581811115611d8157611d81611cc3565b611d93601f8201601f19168501611d01565b91508082528684828501011115611da957600080fd5b8084840185840137600090820190930192909252509392505050565b60008060208385031215611dd857600080fd5b82356001600160401b03811115611dee57600080fd5b611dfa85828601611bfa565b90969095509350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015611e5b57603f19888603018452611e49858351611b82565b94509285019290850190600101611e2d565b5092979650505050505050565b602080825282518282018190526000919060409081850190868401855b82811015611eaa57815180518552860151868501529284019290850190600101611e85565b5091979650505050505050565b803561ffff81168114611a6957600080fd5b600082601f830112611eda57600080fd5b813560206001600160401b03821115611ef557611ef5611cc3565b8160051b611f04828201611d01565b9283528481018201928281019087851115611f1e57600080fd5b83870192505b84831015611f3d57823582529183019190830190611f24565b979650505050505050565b600060208284031215611f5a57600080fd5b81356001600160401b0380821115611f7157600080fd5b9083019060e08286031215611f8557600080fd5b611f8d611cd9565b611f9683611eb7565b8152611fa460208401611eb7565b60208201526040830135604082015260608301356060820152611fc960808401611eb7565b608082015260a083013582811115611fe057600080fd5b611fec87828601611ec9565b60a08301525060c083013560c082015280935050505092915050565b60006020828403121561201a57600080fd5b610e9182611a52565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b8381101561209457888303603f190185528151805184528781015188850152860151606087850181905261208081860183611b82565b96890196945050509086019060010161204a565b509098975050505050505050565b600181811c908216806120b657607f821691505b602082108114156120d757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060001982141561211d5761211d6120f3565b5060010190565b600060ff821660ff81141561213b5761213b6120f3565b60010192915050565b60008219821115612157576121576120f3565b500190565b6000823560de1983360301811261217257600080fd5b9190910192915050565b60006020828403121561218e57600080fd5b610e9182611eb7565b6000808335601e198436030181126121ae57600080fd5b8301803591506001600160401b038211156121c857600080fd5b6020019150600581901b3603821315611c3e57600080fd5b600061ffff808316818114156121f8576121f86120f3565b6001019392505050565b60008251612214818460208701611ab1565b600360fc1b920191825250600101919050565b60008351612239818460208801611ab1565b83519083019061224d818360208801611ab1565b01949350505050565b60008251612172818460208701611ab1565b60006020828403121561227a57600080fd5b81518015158114610e9157600080fdfea2646970667358221220b64b152674786296b9940da2e3bbdcc77f15638a4e3704229c4bcfbf8057fdf864736f6c63430008090033";

export class InstallationFacet__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<InstallationFacet> {
    return super.deploy(overrides || {}) as Promise<InstallationFacet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): InstallationFacet {
    return super.attach(address) as InstallationFacet;
  }
  connect(signer: Signer): InstallationFacet__factory {
    return super.connect(signer) as InstallationFacet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InstallationFacetInterface {
    return new utils.Interface(_abi) as InstallationFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InstallationFacet {
    return new Contract(address, _abi, signerOrProvider) as InstallationFacet;
  }
}