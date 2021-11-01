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
            internalType: "uint256[]",
            name: "installationsVars",
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
    inputs: [],
    name: "getAlchemicaAddresses",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
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
            internalType: "uint256[]",
            name: "installationsVars",
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
            internalType: "uint256[]",
            name: "installationsVars",
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
                internalType: "uint256[]",
                name: "installationsVars",
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
                internalType: "uint256[]",
                name: "installationsVars",
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
        internalType: "address[]",
        name: "_addresses",
        type: "address[]",
      },
    ],
    name: "setAlchemicaAddresses",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x608060405234801561001057600080fd5b50612a0f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ff5760003560e01c806355e2eb4b11610097578063763b948a11610066578063763b948a1461028f5780637b55f07f146102a257806386638d6a146102c2578063882ffab2146102d557600080fd5b806355e2eb4b1461023457806355e92e531461025457806355f804b314610269578063722b6cd21461027c57600080fd5b806339a209df116100d357806339a209df1461019457806342784f14146101d4578063494ea092146101f45780634e1273f41461021457600080fd5b8062fdd58e146101045780630e89341c1461014c5780631783231f1461016c57806318d939a114610181575b600080fd5b6101396101123660046121f1565b6001600160a01b039091166000908152600b60209081526040808320938352929052205490565b6040519081526020015b60405180910390f35b61015f61015a36600461221b565b6102e8565b6040516101439190612264565b61017f61017a3660046122dd565b6103ec565b005b61017f61018f3660046123d4565b61040b565b6101396101a2366004612415565b6001600160a01b0390921660009081526008602090815260408083209383529281528282209382529290925290205490565b6101e76101e236600461221b565b61072d565b6040516101439190612506565b6102076102023660046121f1565b6108c0565b6040516101439190612519565b610227610222366004612568565b610a1c565b60405161014391906125d3565b610247610242366004612617565b610b8e565b6040516101439190612632565b61025c610e04565b60405161014391906126b1565b61017f6102773660046126f2565b610e69565b61024761028a3660046121f1565b610ee5565b61017f61029d3660046123d4565b610ef8565b6102b56102b03660046123d4565b611218565b6040516101439190612786565b61017f6102d03660046123d4565b611539565b6102076102e3366004612617565b6116d4565b600354606090821061034f5760405162461bcd60e51b815260206004820152602560248201527f496e7374616c6c6174696f6e46616365743a204974656d205f6964206e6f7420604482015264199bdd5b9960da1b60648201526084015b60405180910390fd5b6103e660006002018054610362906127e8565b80601f016020809104026020016040519081016040528092919081815260200182805461038e906127e8565b80156103db5780601f106103b0576101008083540402835291602001916103db565b820191906000526020600020905b8154815290600101906020018083116103be57829003601f168201915b50505050508361180b565b92915050565b6103f461191a565b8051610407906001906020840190612036565b5050565b61041361191a565b60005b61ffff811682111561072857600060030160405180610100016040528085858561ffff1681811061044957610449612823565b905060200281019061045b9190612839565b610469906020810190612859565b61ffff16815260200185858561ffff1681811061048857610488612823565b905060200281019061049a9190612839565b6104ab906040810190602001612859565b61ffff16815260200185858561ffff168181106104ca576104ca612823565b90506020028101906104dc9190612839565b60400135815260200185858561ffff168181106104fb576104fb612823565b905060200281019061050d9190612839565b60600135815260200185858561ffff1681811061052c5761052c612823565b905060200281019061053e9190612839565b61054f9060a0810190608001612859565b61ffff16815260200185858561ffff1681811061056e5761056e612823565b90506020028101906105809190612839565b61058e9060a081019061287d565b80806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250505090825250602001858561ffff86168181106105db576105db612823565b90506020028101906105ed9190612839565b6105fb9060c081019061287d565b80806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250505090825250602001858561ffff861681811061064857610648612823565b905060200281019061065a9190612839565b60e0013590528154600181810184556000938452602093849020835160079093020180548585015161ffff908116620100000263ffffffff19909216948116949094171781556040840151918101919091556060830151600282015560808301516003820180549190931661ffff19919091161790915560a08201518051929391926106ec926004850192019061209b565b5060c0820151805161070891600584019160209091019061209b565b5060e0820151816006015550508080610720906128dc565b915050610416565b505050565b6107356120d6565b60035482106107995760405162461bcd60e51b815260206004820152602a60248201527f496e7374616c6c6174696f6e46616365743a204974656d207479706520646f656044820152691cdb89dd08195e1a5cdd60b21b6064820152608401610346565b60038054839081106107ad576107ad612823565b600091825260209182902060408051610100810182526007909302909101805461ffff8082168552620100009091048116848601526001820154848401526002820154606085015260038201541660808401526004810180548351818702810187019094528084529394919360a08601939283018282801561084e57602002820191906000526020600020905b81548152602001906001019080831161083a575b50505050508152602001600582018054806020026020016040519081016040528092919081815260200182805480156108a657602002820191906000526020600020905b815481526020019060010190808311610892575b505050505081526020016006820154815250509050919050565b6001600160a01b0382166000908152600960209081526040808320848452909152902054606090806001600160401b038111156108ff576108ff612297565b60405190808252806020026020018201604052801561094457816020015b604080518082019091526000808252602082015281526020019060019003908161091d5790505b50915060005b81811015610a14576001600160a01b0385166000908152600960209081526040808320878452909152812080548390811061098757610987612823565b90600052602060002001549050808483815181106109a7576109a7612823565b602090810291909101810151919091526001600160a01b03871660009081526008825260408082208883528352808220848352909252205484518590849081106109f3576109f3612823565b60209081029190910181015101525080610a0c816128fe565b91505061094a565b505092915050565b6060838214610a935760405162461bcd60e51b815260206004820152603960248201527f496e7374616c6c6174696f6e46616365743a205f6f776e657273206c656e677460448201527f68206e6f742073616d65206173205f696473206c656e677468000000000000006064820152608401610346565b836001600160401b03811115610aab57610aab612297565b604051908082528060200260200182016040528015610ad4578160200160208202803683370190505b50905060005b84811015610b85576000848483818110610af657610af6612823565b9050602002013590506000878784818110610b1357610b13612823565b9050602002016020810190610b289190612617565b6001600160a01b0381166000908152600b60209081526040808320868452909152902054855191925090859085908110610b6457610b64612823565b60200260200101818152505050508080610b7d906128fe565b915050610ada565b50949350505050565b6001600160a01b0381166000908152600c6020526040902054606090806001600160401b03811115610bc257610bc2612297565b604051908082528060200260200182016040528015610bfb57816020015b610be8612127565b815260200190600190039081610be05790505b50915060005b81811015610dfd576001600160a01b0384166000908152600c60205260408120805483908110610c3357610c33612823565b60009182526020808320909101546001600160a01b0388168352600b82526040808420828552909252912054855191925090859084908110610c7757610c77612823565b6020026020010151600001818152505080848381518110610c9a57610c9a612823565b60209081029190910181015101526003805482908110610cbc57610cbc612823565b600091825260209182902060408051610100810182526007909302909101805461ffff8082168552620100009091048116848601526001820154848401526002820154606085015260038201541660808401526004810180548351818702810187019094528084529394919360a086019392830182828015610d5d57602002820191906000526020600020905b815481526020019060010190808311610d49575b5050505050815260200160058201805480602002602001604051908101604052809291908181526020018280548015610db557602002820191906000526020600020905b815481526020019060010190808311610da1575b50505050508152602001600682015481525050848381518110610dda57610dda612823565b602002602001015160400181905250508080610df5906128fe565b915050610c01565b5050919050565b60606000600101805480602002602001604051908101604052809291908181526020018280548015610e5f57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610e41575b5050505050905090565b610e7161191a565b8051610e8490600290602084019061214d565b5060005b60035481101561040757807f6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b610ebe848461180b565b604051610ecb9190612264565b60405180910390a280610edd816128fe565b915050610e88565b6060610ef183836119a3565b9392505050565b60005b60ff81168211156107285733600090815260046020526040812090848460ff8516818110610f2b57610f2b612823565b90506020020135815260200190815260200160002060030160019054906101000a90046001600160a01b03166001600160a01b0316336001600160a01b031614610fb75760405162461bcd60e51b815260206004820152601c60248201527f496e7374616c6c6174696f6e46616365743a206e6f74206f776e6572000000006044820152606401610346565b33600090815260046020526040812090848460ff8516818110610fdc57610fdc612823565b602090810292909201358352508101919091526040016000206003015460ff16156110545760405162461bcd60e51b815260206004820152602260248201527f496e7374616c6c6174696f6e46616365743a20616c726561647920636c61696d604482015261195960f21b6064820152608401610346565b33600090815260046020526040812060039082868660ff871681811061107c5761107c612823565b90506020020135815260200190815260200160002060020154815481106110a5576110a5612823565b60009182526020808320600660079093020191909101543383526004909152604082209091868660ff87168181106110df576110df612823565b905060200201358152602001908152602001600020600101546111029190612919565b9050804310156111665760405162461bcd60e51b815260206004820152602960248201527f496e7374616c6c6174696f6e46616365743a20696e7374616c6c6174696f6e206044820152686e6f7420726561647960b81b6064820152608401610346565b3360008181526004602052604081206112059291878760ff881681811061118f5761118f612823565b9050602002013581526020019081526020016000206002015460006004016000336001600160a01b03166001600160a01b03168152602001908152602001600020600088888860ff168181106111e7576111e7612823565b90506020020135815260200190815260200160002060000154611c41565b508061121081612931565b915050610efb565b60608161136c57600380546040805160208084028201810190925282815292919060009084015b82821015611361576000848152602090819020604080516101008101825260078602909201805461ffff8082168552620100009091048116848601526001820154848401526002820154606085015260038201541660808401526004810180548351818702810187019094528084529394919360a0860193928301828280156112e757602002820191906000526020600020905b8154815260200190600101908083116112d3575b505050505081526020016005820180548060200260200160405190810160405280929190818152602001828054801561133f57602002820191906000526020600020905b81548152602001906001019080831161132b575b505050505081526020016006820154815250508152602001906001019061123f565b5050505090506103e6565b816001600160401b0381111561138457611384612297565b6040519080825280602002602001820160405280156113bd57816020015b6113aa6120d6565b8152602001906001900390816113a25790505b50905060005b828110156115325760038484838181106113df576113df612823565b90506020020135815481106113f6576113f6612823565b600091825260209182902060408051610100810182526007909302909101805461ffff8082168552620100009091048116848601526001820154848401526002820154606085015260038201541660808401526004810180548351818702810187019094528084529394919360a08601939283018282801561149757602002820191906000526020600020905b815481526020019060010190808311611483575b50505050508152602001600582018054806020026020016040519081016040528092919081815260200182805480156114ef57602002820191906000526020600020905b8154815260200190600101908083116114db575b5050505050815260200160068201548152505082828151811061151457611514612823565b6020026020010181905250808061152a906128fe565b9150506113c3565b5092915050565b60005b60ff81168211156107285760005b6003805460ff841690811061156157611561612823565b9060005260206000209060070201600401805490508160ff1610156116165761160460006001018260ff168154811061159c5761159c612823565b600091825260209091200154600380546001600160a01b03909216913391309160ff88169081106115cf576115cf612823565b90600052602060002090600702016004018560ff16815481106115f4576115f4612823565b9060005260206000200154611e44565b8061160e81612931565b91505061154a565b506040805160a0810182526005805480835243602080850191825260ff871685870190815260006060870181815233608089018181529083526004855289832096835295909352968720955186559151600186015590516002850155516003909301805491516001600160a81b0319909216931515610100600160a81b031916939093176101006001600160a01b0390921691909102179091558054916116bc836128fe565b919050555080806116cc90612931565b91505061153c565b6001600160a01b0381166000908152600c6020526040902054606090806001600160401b0381111561170857611708612297565b60405190808252806020026020018201604052801561174d57816020015b60408051808201909152600080825260208201528152602001906001900390816117265790505b50915060005b81811015610dfd576001600160a01b0384166000908152600c6020526040812080548390811061178557611785612823565b60009182526020808320909101546001600160a01b0388168352600b825260408084208285529092529120548551919250908590849081106117c9576117c9612823565b60200260200101516020018181525050808483815181106117ec576117ec612823565b6020908102919091010151525080611803816128fe565b915050611753565b6060808261183b57836040516020016118249190612951565b6040516020818303038152906040529150506103e6565b8260005b811561185357600101600a8204915061183f565b806001600160401b0381111561186b5761186b612297565b6040519080825280601f01601f191660200182016040528015611895576020820181803683370190505b50925084915060001981015b82156118ec57600a830660300160f81b848280600190039350815181106118ca576118ca612823565b60200101906001600160f81b031916908160001a905350600a830492506118a1565b5050508381604051602001611902929190612976565b60405160208183030381529060405291505092915050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c600401546001600160a01b031633146119a15760405162461bcd60e51b815260206004820152602260248201527f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60448201526132b960f11b6064820152608401610346565b565b6001600160a01b038216600090815260096020908152604080832084845290915281205460609190806001600160401b038111156119e3576119e3612297565b604051908082528060200260200182016040528015611a1c57816020015b611a09612127565b815260200190600190039081611a015790505b50925060005b81811015611c38576001600160a01b038616600090815260098401602090815260408083208884529091528120805483908110611a6157611a61612823565b60009182526020808320909101546001600160a01b038a16835260088701825260408084208a855283528084208285529092529120548651919250908290879085908110611ab157611ab1612823565b6020026020010151602001818152505080868481518110611ad457611ad4612823565b60209081029190910101515260038501805483908110611af657611af6612823565b600091825260209182902060408051610100810182526007909302909101805461ffff8082168552620100009091048116848601526001820154848401526002820154606085015260038201541660808401526004810180548351818702810187019094528084529394919360a086019392830182828015611b9757602002820191906000526020600020905b815481526020019060010190808311611b83575b5050505050815260200160058201805480602002602001604051908101604052809291908181526020018280548015611bef57602002820191906000526020600020905b815481526020019060010190808311611bdb575b50505050508152602001600682015481525050868481518110611c1457611c14612823565b60200260200101516040018190525050508080611c30906128fe565b915050611a22565b50505092915050565b6001600160a01b038316600090815260046020908152604080832084845290915281206003015460ff1615611cc25760405162461bcd60e51b815260206004820152602160248201527f4c69624552433732313a20746f6b656e496420616c7265616479206d696e74656044820152601960fa1b6064820152608401610346565b6001600160a01b0380851660008181526004840160209081526040808320878452909152902060030154610100900490911614611d3a5760405162461bcd60e51b81526020600482015260166024820152752634b122a9219b99189d103bb937b7339037bbb732b960511b6044820152606401610346565b6001600160a01b0384166000818152600c830160209081526040808320805460018101825590845282842001869055928252600b840181528282208683529052908120805491611d89836128fe565b90915550506001600160a01b03841660008181526004830160209081526040808320868452825291829020600301805460ff1916600117905590518481528592917ff2bd7a0a4587b4c000ee36ad5681c67c7fcad9d00a80bf975ac2e315f8577c4d910160405180910390a360408051848152600160208201526001600160a01b0386169160009130917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a450505050565b833b80611e935760405162461bcd60e51b815260206004820152601d60248201527f4c696245524332303a204164647265737320686173206e6f20636f64650000006044820152606401610346565b604080516001600160a01b0386811660248301528581166044830152606480830186905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839290891691611ef791906129a5565b6000604051808303816000865af19150503d8060008114611f34576040519150601f19603f3d011682016040523d82523d6000602084013e611f39565b606091505b5091509150611f488282611f51565b50505050505050565b8115611fcd578051156104075780806020019051810190611f7291906129b7565b6104075760405162461bcd60e51b815260206004820152602660248201527f4c696245524332303a20636f6e74726163742063616c6c2072657475726e65646044820152652066616c736560d01b6064820152608401610346565b805115611fee578060405162461bcd60e51b81526004016103469190612264565b60405162461bcd60e51b815260206004820181905260248201527f4c696245524332303a20636f6e74726163742063616c6c2072657665727465646044820152606401610346565b82805482825590600052602060002090810192821561208b579160200282015b8281111561208b57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190612056565b506120979291506121c0565b5090565b82805482825590600052602060002090810192821561208b579160200282015b8281111561208b5782518255916020019190600101906120bb565b604051806101000160405280600061ffff168152602001600061ffff1681526020016000815260200160008152602001600061ffff1681526020016060815260200160608152602001600081525090565b604051806060016040528060008152602001600081526020016121486120d6565b905290565b828054612159906127e8565b90600052602060002090601f01602090048101928261217b576000855561208b565b82601f1061219457805160ff191683800117855561208b565b8280016001018555821561208b579182018281111561208b5782518255916020019190600101906120bb565b5b8082111561209757600081556001016121c1565b80356001600160a01b03811681146121ec57600080fd5b919050565b6000806040838503121561220457600080fd5b61220d836121d5565b946020939093013593505050565b60006020828403121561222d57600080fd5b5035919050565b60005b8381101561224f578181015183820152602001612237565b8381111561225e576000848401525b50505050565b6020815260008251806020840152612283816040850160208701612234565b601f01601f19169190910160400192915050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156122d5576122d5612297565b604052919050565b600060208083850312156122f057600080fd5b82356001600160401b038082111561230757600080fd5b818501915085601f83011261231b57600080fd5b81358181111561232d5761232d612297565b8060051b915061233e8483016122ad565b818152918301840191848101908884111561235857600080fd5b938501935b8385101561237d5761236e856121d5565b8252938501939085019061235d565b98975050505050505050565b60008083601f84011261239b57600080fd5b5081356001600160401b038111156123b257600080fd5b6020830191508360208260051b85010111156123cd57600080fd5b9250929050565b600080602083850312156123e757600080fd5b82356001600160401b038111156123fd57600080fd5b61240985828601612389565b90969095509350505050565b60008060006060848603121561242a57600080fd5b612433846121d5565b95602085013595506040909401359392505050565b600081518084526020808501945080840160005b838110156124785781518752958201959082019060010161245c565b509495945050505050565b600061010061ffff80845116855280602085015116602086015260408401516040860152606084015160608601528060808501511660808601525060a08301518160a08601526124d582860182612448565b91505060c083015184820360c08601526124ef8282612448565b91505060e083015160e08501528091505092915050565b602081526000610ef16020830184612483565b602080825282518282018190526000919060409081850190868401855b8281101561255b57815180518552860151868501529284019290850190600101612536565b5091979650505050505050565b6000806000806040858703121561257e57600080fd5b84356001600160401b038082111561259557600080fd5b6125a188838901612389565b909650945060208701359150808211156125ba57600080fd5b506125c787828801612389565b95989497509550505050565b6020808252825182820181905260009190848201906040850190845b8181101561260b578351835292840192918401916001016125ef565b50909695505050505050565b60006020828403121561262957600080fd5b610ef1826121d5565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b838110156126a357888303603f190185528151805184528781015188850152860151606087850181905261268f81860183612483565b968901969450505090860190600101612659565b509098975050505050505050565b6020808252825182820181905260009190848201906040850190845b8181101561260b5783516001600160a01b0316835292840192918401916001016126cd565b6000602080838503121561270557600080fd5b82356001600160401b038082111561271c57600080fd5b818501915085601f83011261273057600080fd5b81358181111561274257612742612297565b612754601f8201601f191685016122ad565b9150808252868482850101111561276a57600080fd5b8084840185840137600090820190930192909252509392505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156127db57603f198886030184526127c9858351612483565b945092850192908501906001016127ad565b5092979650505050505050565b600181811c908216806127fc57607f821691505b6020821081141561281d57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b6000823560fe1983360301811261284f57600080fd5b9190910192915050565b60006020828403121561286b57600080fd5b813561ffff81168114610ef157600080fd5b6000808335601e1984360301811261289457600080fd5b8301803591506001600160401b038211156128ae57600080fd5b6020019150600581901b36038213156123cd57600080fd5b634e487b7160e01b600052601160045260246000fd5b600061ffff808316818114156128f4576128f46128c6565b6001019392505050565b6000600019821415612912576129126128c6565b5060010190565b6000821982111561292c5761292c6128c6565b500190565b600060ff821660ff811415612948576129486128c6565b60010192915050565b60008251612963818460208701612234565b600360fc1b920191825250600101919050565b60008351612988818460208801612234565b83519083019061299c818360208801612234565b01949350505050565b6000825161284f818460208701612234565b6000602082840312156129c957600080fd5b81518015158114610ef157600080fdfea2646970667358221220a143390aa49d1a732afe5b6240b226b2e5e256f0ce01fa012d541c037bad13e064736f6c63430008090033";

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
