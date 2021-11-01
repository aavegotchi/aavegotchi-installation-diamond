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
    inputs: [
      {
        components: [
          {
            internalType: "uint16",
            name: "installationType",
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
        internalType: "struct InstallationType[]",
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
        internalType: "uint256[]",
        name: "_installationIds",
        type: "uint256[]",
      },
    ],
    name: "claimInstallations",
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
        name: "_installationTypeId",
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
        internalType: "struct InstallationType",
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
        name: "_installationTypeIds",
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
        internalType: "struct InstallationType[]",
        name: "installationTypes_",
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
    name: "installationBalancesOfToken",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "installationId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
        ],
        internalType: "struct InstallationFacet.InstallationIdIO[]",
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
    name: "installationBalancesOfTokenWithTypes",
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
            internalType: "struct InstallationType",
            name: "installationType",
            type: "tuple",
          },
        ],
        internalType: "struct ItemTypeIO[]",
        name: "installationBalancesOfTokenWithTypes_",
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
    name: "installationsBalances",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "installationId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
        ],
        internalType: "struct InstallationFacet.InstallationIdIO[]",
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
        name: "_owner",
        type: "address",
      },
    ],
    name: "installationsBalancesWithTypes",
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
            internalType: "struct InstallationType",
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
  "0x608060405234801561001057600080fd5b50612507806100206000396000f3fe608060405234801561001057600080fd5b50600436106100e95760003560e01c806355f804b31161008c5780637b55f07f116100665780637b55f07f1461025157806386638d6a14610271578063882ffab21461028457806392a038051461029757600080fd5b806355f804b314610216578063722b6cd21461022b578063763b948a1461023e57600080fd5b806342784f14116100c857806342784f1414610196578063494ea092146101b65780634e1273f4146101d657806355e2eb4b146101f657600080fd5b8062fdd58e146100ee5780630e89341c1461013657806339a209df14610156575b600080fd5b6101236100fc366004611e18565b6001600160a01b039091166000908152600b60209081526040808320938352929052205490565b6040519081526020015b60405180910390f35b610149610144366004611e42565b6102aa565b60405161012d9190611e8b565b610123610164366004611ebe565b6001600160a01b0390921660009081526008602090815260408083209383529281528282209382529290925290205490565b6101a96101a4366004611e42565b6103ae565b60405161012d9190611f7c565b6101c96101c4366004611e18565b6104da565b60405161012d9190611f8f565b6101e96101e436600461202a565b610637565b60405161012d9190612096565b6102096102043660046120da565b6107aa565b60405161012d91906120f5565b61022961022436600461218a565b6109ba565b005b610209610239366004611e18565b610a3a565b61022961024c36600461223b565b610a4d565b61026461025f36600461223b565b610d78565b60405161012d919061227d565b61022961027f36600461223b565b610fcc565b6101c96102923660046120da565b611182565b6102296102a536600461223b565b6112ba565b60035460609082106103115760405162461bcd60e51b815260206004820152602560248201527f496e7374616c6c6174696f6e46616365743a204974656d205f6964206e6f7420604482015264199bdd5b9960da1b60648201526084015b60405180910390fd5b6103a860006002018054610324906122df565b80601f0160208091040260200160405190810160405280929190818152602001828054610350906122df565b801561039d5780601f106103725761010080835404028352916020019161039d565b820191906000526020600020905b81548152906001019060200180831161038057829003601f168201915b5050505050836114f3565b92915050565b6103b6611cc5565b600354821061041a5760405162461bcd60e51b815260206004820152602a60248201527f496e7374616c6c6174696f6e46616365743a204974656d207479706520646f656044820152691cdb89dd08195e1a5cdd60b21b6064820152608401610308565b600380548390811061042e5761042e61231a565b60009182526020918290206040805160c0810182526006909302909101805461ffff90811684526001820154848601526002820154848401526003820154166060840152600481018054835181870281018701909452808452939491936080860193928301828280156104c057602002820191906000526020600020905b8154815260200190600101908083116104ac575b505050505081526020016005820154815250509050919050565b6001600160a01b03821660009081526009602090815260408083208484529091529020546060908067ffffffffffffffff81111561051a5761051a612174565b60405190808252806020026020018201604052801561055f57816020015b60408051808201909152600080825260208201528152602001906001900390816105385790505b50915060005b8181101561062f576001600160a01b038516600090815260096020908152604080832087845290915281208054839081106105a2576105a261231a565b90600052602060002001549050808483815181106105c2576105c261231a565b602090810291909101810151919091526001600160a01b038716600090815260088252604080822088835283528082208483529092522054845185908490811061060e5761060e61231a565b6020908102919091018101510152508061062781612346565b915050610565565b505092915050565b60608382146106ae5760405162461bcd60e51b815260206004820152603960248201527f496e7374616c6c6174696f6e46616365743a205f6f776e657273206c656e677460448201527f68206e6f742073616d65206173205f696473206c656e677468000000000000006064820152608401610308565b8367ffffffffffffffff8111156106c7576106c7612174565b6040519080825280602002602001820160405280156106f0578160200160208202803683370190505b50905060005b848110156107a15760008484838181106107125761071261231a565b905060200201359050600087878481811061072f5761072f61231a565b905060200201602081019061074491906120da565b6001600160a01b0381166000908152600b602090815260408083208684529091529020548551919250908590859081106107805761078061231a565b6020026020010181815250505050808061079990612346565b9150506106f6565b50949350505050565b6001600160a01b0381166000908152600c60205260409020546060908067ffffffffffffffff8111156107df576107df612174565b60405190808252806020026020018201604052801561081857816020015b610805611d03565b8152602001906001900390816107fd5790505b50915060005b818110156109b3576001600160a01b0384166000908152600c602052604081208054839081106108505761085061231a565b60009182526020808320909101546001600160a01b0388168352600b825260408084208285529092529120548551919250908590849081106108945761089461231a565b60200260200101516000018181525050808483815181106108b7576108b761231a565b602090810291909101810151015260038054829081106108d9576108d961231a565b60009182526020918290206040805160c0810182526006909302909101805461ffff908116845260018201548486015260028201548484015260038201541660608401526004810180548351818702810187019094528084529394919360808601939283018282801561096b57602002820191906000526020600020905b815481526020019060010190808311610957575b505050505081526020016005820154815250508483815181106109905761099061231a565b6020026020010151604001819052505080806109ab90612346565b91505061081e565b5050919050565b6109c2611603565b80516109d5906002906020840190611d29565b5060005b600354811015610a3657807f6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b610a0f84846114f3565b604051610a1c9190611e8b565b60405180910390a280610a2e81612346565b9150506109d9565b5050565b6060610a46838361168c565b9392505050565b60005b60ff8116821115610d735733600090815260046020526040812090848460ff8516818110610a8057610a8061231a565b90506020020135815260200190815260200160002060030160039054906101000a90046001600160a01b03166001600160a01b0316336001600160a01b031614610b0c5760405162461bcd60e51b815260206004820152601c60248201527f496e7374616c6c6174696f6e46616365743a206e6f74206f776e6572000000006044820152606401610308565b33600090815260046020526040812090848460ff8516818110610b3157610b3161231a565b90506020020135815260200190815260200160002060030160029054906101000a900460ff1615610baf5760405162461bcd60e51b815260206004820152602260248201527f496e7374616c6c6174696f6e46616365743a20616c726561647920636c61696d604482015261195960f21b6064820152608401610308565b33600090815260046020526040812060039082868660ff8716818110610bd757610bd761231a565b9050602002013581526020019081526020016000206002015481548110610c0057610c0061231a565b60009182526020808320600560069093020191909101543383526004909152604082209091868660ff8716818110610c3a57610c3a61231a565b90506020020135815260200190815260200160002060010154610c5d9190612361565b905080421015610cc15760405162461bcd60e51b815260206004820152602960248201527f496e7374616c6c6174696f6e46616365743a20696e7374616c6c6174696f6e206044820152686e6f7420726561647960b81b6064820152608401610308565b336000818152600460205260408120610d609291878760ff8816818110610cea57610cea61231a565b9050602002013581526020019081526020016000206002015460006004016000336001600160a01b03166001600160a01b03168152602001908152602001600020600088888860ff16818110610d4257610d4261231a565b905060200201358152602001908152602001600020600001546118c4565b5080610d6b81612379565b915050610a50565b505050565b606081610e6557600380546040805160208084028201810190925282815292919060009084015b82821015610e5a5760008481526020908190206040805160c08101825260068602909201805461ffff9081168452600182015484860152600282015484840152600382015416606084015260048101805483518187028101870190945280845293949193608086019392830182828015610e3857602002820191906000526020600020905b815481526020019060010190808311610e24575b5050505050815260200160058201548152505081526020019060010190610d9f565b5050505090506103a8565b8167ffffffffffffffff811115610e7e57610e7e612174565b604051908082528060200260200182016040528015610eb757816020015b610ea4611cc5565b815260200190600190039081610e9c5790505b50905060005b82811015610fc5576003848483818110610ed957610ed961231a565b9050602002013581548110610ef057610ef061231a565b60009182526020918290206040805160c0810182526006909302909101805461ffff9081168452600182015484860152600282015484840152600382015416606084015260048101805483518187028101870190945280845293949193608086019392830182828015610f8257602002820191906000526020600020905b815481526020019060010190808311610f6e575b50505050508152602001600582015481525050828281518110610fa757610fa761231a565b60200260200101819052508080610fbd90612346565b915050610ebd565b5092915050565b60005b60ff8116821115610d735760005b6003805460ff8416908110610ff457610ff461231a565b9060005260206000209060060201600401805490508160ff1610156110a95761109760006001018260ff168154811061102f5761102f61231a565b600091825260209091200154600380546001600160a01b03909216913391309160ff88169081106110625761106261231a565b90600052602060002090600602016004018560ff16815481106110875761108761231a565b9060005260206000200154611ad3565b816110a181612379565b925050610fdd565b506040805160c0810182526005805480835243602080850191825260ff87168587019081526001606087018181526000608089018181523360a08b01818152908352600487528b83209883529790955298892097518855935190870155516002860155905160039094018054915192516001600160a01b03166301000000026301000000600160b81b0319931515620100000262ffffff1990931661ffff969096169590951791909117919091169290921790915580549161116a83612346565b9190505550808061117a90612379565b915050610fcf565b6001600160a01b0381166000908152600c60205260409020546060908067ffffffffffffffff8111156111b7576111b7612174565b6040519080825280602002602001820160405280156111fc57816020015b60408051808201909152600080825260208201528152602001906001900390816111d55790505b50915060005b818110156109b3576001600160a01b0384166000908152600c602052604081208054839081106112345761123461231a565b60009182526020808320909101546001600160a01b0388168352600b825260408084208285529092529120548551919250908590849081106112785761127861231a565b602002602001015160200181815250508084838151811061129b5761129b61231a565b60209081029190910101515250806112b281612346565b915050611202565b6112c2611603565b60005b61ffff8116821115610d735760006003016040518060c0016040528085858561ffff168181106112f7576112f761231a565b90506020028101906113099190612399565b6113179060208101906123b9565b61ffff16815260200185858561ffff168181106113365761133661231a565b90506020028101906113489190612399565b60200135815260200185858561ffff168181106113675761136761231a565b90506020028101906113799190612399565b60400135815260200185858561ffff168181106113985761139861231a565b90506020028101906113aa9190612399565b6113bb9060808101906060016123b9565b61ffff16815260200185858561ffff168181106113da576113da61231a565b90506020028101906113ec9190612399565b6113fa9060808101906123dd565b80806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250505090825250602001858561ffff86168181106114475761144761231a565b90506020028101906114599190612399565b60a00135905281546001808201845560009384526020938490208351600690930201805461ffff1990811661ffff9485161782558486015192820192909255604084015160028201556060840151600382018054909316931692909217905560808201518051929391926114d39260048501920190611dad565b5060a08201518160050155505080806114eb90612427565b9150506112c5565b60608082611523578360405160200161150c9190612449565b6040516020818303038152906040529150506103a8565b8260005b811561153b57600101600a82049150611527565b8067ffffffffffffffff81111561155457611554612174565b6040519080825280601f01601f19166020018201604052801561157e576020820181803683370190505b50925084915060001981015b82156115d557600a830660300160f81b848280600190039350815181106115b3576115b361231a565b60200101906001600160f81b031916908160001a905350600a8304925061158a565b50505083816040516020016115eb92919061246e565b60405160208183030381529060405291505092915050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c600401546001600160a01b0316331461168a5760405162461bcd60e51b815260206004820152602260248201527f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60448201526132b960f11b6064820152608401610308565b565b6001600160a01b0382166000908152600960209081526040808320848452909152812054606091908067ffffffffffffffff8111156116cd576116cd612174565b60405190808252806020026020018201604052801561170657816020015b6116f3611d03565b8152602001906001900390816116eb5790505b50925060005b818110156118bb576001600160a01b03861660009081526009840160209081526040808320888452909152812080548390811061174b5761174b61231a565b60009182526020808320909101546001600160a01b038a16835260088701825260408084208a85528352808420828552909252912054865191925090829087908590811061179b5761179b61231a565b60200260200101516020018181525050808684815181106117be576117be61231a565b602090810291909101015152600385018054839081106117e0576117e061231a565b60009182526020918290206040805160c0810182526006909302909101805461ffff908116845260018201548486015260028201548484015260038201541660608401526004810180548351818702810187019094528084529394919360808601939283018282801561187257602002820191906000526020600020905b81548152602001906001019080831161185e575b505050505081526020016005820154815250508684815181106118975761189761231a565b602002602001015160400181905250505080806118b390612346565b91505061170c565b50505092915050565b6001600160a01b038316600090815260046020908152604080832084845290915281206003015462010000900460ff161561194b5760405162461bcd60e51b815260206004820152602160248201527f4c69624552433732313a20746f6b656e496420616c7265616479206d696e74656044820152601960fa1b6064820152608401610308565b6001600160a01b038085166000818152600484016020908152604080832087845290915290206003015463010000009004909116146119c55760405162461bcd60e51b81526020600482015260166024820152752634b122a9219b99189d103bb937b7339037bbb732b960511b6044820152606401610308565b6001600160a01b0384166000818152600c830160209081526040808320805460018101825590845282842001869055928252600b840181528282208683529052908120805491611a1483612346565b90915550506001600160a01b03841660008181526004830160209081526040808320868452825291829020600301805462ff000019166201000017905590518481528592917ff2bd7a0a4587b4c000ee36ad5681c67c7fcad9d00a80bf975ac2e315f8577c4d910160405180910390a360408051848152600160208201526001600160a01b0386169160009130917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a450505050565b833b80611b225760405162461bcd60e51b815260206004820152601d60248201527f4c696245524332303a204164647265737320686173206e6f20636f64650000006044820152606401610308565b604080516001600160a01b0386811660248301528581166044830152606480830186905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839290891691611b86919061249d565b6000604051808303816000865af19150503d8060008114611bc3576040519150601f19603f3d011682016040523d82523d6000602084013e611bc8565b606091505b5091509150611bd78282611be0565b50505050505050565b8115611c5c57805115610a365780806020019051810190611c0191906124af565b610a365760405162461bcd60e51b815260206004820152602660248201527f4c696245524332303a20636f6e74726163742063616c6c2072657475726e65646044820152652066616c736560d01b6064820152608401610308565b805115611c7d578060405162461bcd60e51b81526004016103089190611e8b565b60405162461bcd60e51b815260206004820181905260248201527f4c696245524332303a20636f6e74726163742063616c6c2072657665727465646044820152606401610308565b6040518060c00160405280600061ffff1681526020016000815260200160008152602001600061ffff16815260200160608152602001600081525090565b60405180606001604052806000815260200160008152602001611d24611cc5565b905290565b828054611d35906122df565b90600052602060002090601f016020900481019282611d575760008555611d9d565b82601f10611d7057805160ff1916838001178555611d9d565b82800160010185558215611d9d579182015b82811115611d9d578251825591602001919060010190611d82565b50611da9929150611de7565b5090565b828054828255906000526020600020908101928215611d9d5791602002820182811115611d9d578251825591602001919060010190611d82565b5b80821115611da95760008155600101611de8565b80356001600160a01b0381168114611e1357600080fd5b919050565b60008060408385031215611e2b57600080fd5b611e3483611dfc565b946020939093013593505050565b600060208284031215611e5457600080fd5b5035919050565b60005b83811015611e76578181015183820152602001611e5e565b83811115611e85576000848401525b50505050565b6020815260008251806020840152611eaa816040850160208701611e5b565b601f01601f19169190910160400192915050565b600080600060608486031215611ed357600080fd5b611edc84611dfc565b95602085013595506040909401359392505050565b600060c0830161ffff80845116855260208085015181870152604085015160408701528160608601511660608701526080850151915060c0608087015282825180855260e0880191508284019450600093505b80841015611f645784518252938201936001939093019290820190611f44565b5060a086015160a08801528094505050505092915050565b602081526000610a466020830184611ef1565b602080825282518282018190526000919060409081850190868401855b82811015611fd157815180518552860151868501529284019290850190600101611fac565b5091979650505050505050565b60008083601f840112611ff057600080fd5b50813567ffffffffffffffff81111561200857600080fd5b6020830191508360208260051b850101111561202357600080fd5b9250929050565b6000806000806040858703121561204057600080fd5b843567ffffffffffffffff8082111561205857600080fd5b61206488838901611fde565b9096509450602087013591508082111561207d57600080fd5b5061208a87828801611fde565b95989497509550505050565b6020808252825182820181905260009190848201906040850190845b818110156120ce578351835292840192918401916001016120b2565b50909695505050505050565b6000602082840312156120ec57600080fd5b610a4682611dfc565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b8381101561216657888303603f190185528151805184528781015188850152860151606087850181905261215281860183611ef1565b96890196945050509086019060010161211c565b509098975050505050505050565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561219c57600080fd5b813567ffffffffffffffff808211156121b457600080fd5b818401915084601f8301126121c857600080fd5b8135818111156121da576121da612174565b604051601f8201601f19908116603f0116810190838211818310171561220257612202612174565b8160405282815287602084870101111561221b57600080fd5b826020860160208301376000928101602001929092525095945050505050565b6000806020838503121561224e57600080fd5b823567ffffffffffffffff81111561226557600080fd5b61227185828601611fde565b90969095509350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156122d257603f198886030184526122c0858351611ef1565b945092850192908501906001016122a4565b5092979650505050505050565b600181811c908216806122f357607f821691505b6020821081141561231457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060001982141561235a5761235a612330565b5060010190565b6000821982111561237457612374612330565b500190565b600060ff821660ff81141561239057612390612330565b60010192915050565b6000823560be198336030181126123af57600080fd5b9190910192915050565b6000602082840312156123cb57600080fd5b813561ffff81168114610a4657600080fd5b6000808335601e198436030181126123f457600080fd5b83018035915067ffffffffffffffff82111561240f57600080fd5b6020019150600581901b360382131561202357600080fd5b600061ffff8083168181141561243f5761243f612330565b6001019392505050565b6000825161245b818460208701611e5b565b600360fc1b920191825250600101919050565b60008351612480818460208801611e5b565b835190830190612494818360208801611e5b565b01949350505050565b600082516123af818460208701611e5b565b6000602082840312156124c157600080fd5b81518015158114610a4657600080fdfea26469706673582212209f2d0b2f4d12849079a9f055d15f12ccb7b29c0b8b555305f3acf5d31ebf2ae764736f6c63430008090033";

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
