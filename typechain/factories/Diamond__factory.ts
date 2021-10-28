/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Diamond, DiamondInterface } from "../Diamond";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_contractOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_diamondCutFacet",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x6080604052604051620020e1380380620020e1833981016040819052620000269162000ddb565b6200003c826200015660201b620000b01760201c565b604080516001808252818301909252600091816020015b60408051606080820183526000808352602083015291810191909152815260200190600190039081620000535750506040805160018082528183019092529192506000919060208083019080368337019050509050631f931c1c60e01b81600081518110620000c657620000c662000e13565b6001600160e01b031990921660209283029190910182015260408051606081019091526001600160a01b038516815290810160008152602001828152508260008151811062000119576200011962000e13565b60200260200101819052506200014c82600060405180602001604052806000815250620001da60201b620001331760201c565b5050505062001068565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c132080546001600160a01b031981166001600160a01b038481169182179093556040516000805160206200204d833981519152939092169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131e546000805160206200204d8339815191529061ffff811690819060009060071615620002395750600381901c60009081526001840160205260409020545b60005b8751811015620002d557620002bb83838a848151811062000261576200026162000e13565b6020026020010151600001518b858151811062000282576200028262000e13565b6020026020010151602001518c8681518110620002a357620002a362000e13565b6020026020010151604001516200036760201b60201c565b909350915080620002cc8162000e55565b9150506200023c565b50828214620002f25760028401805461ffff191661ffff84161790555b60078216156200031557600382901c600090815260018501602052604090208190555b7f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb6738787876040516200034a9392919062000ed0565b60405180910390a16200035e868662000b75565b50505050505050565b600080806000805160206200204d83398151915290506000845111620003e85760405162461bcd60e51b815260206004820152602b60248201527f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660448201526a1858d95d081d1bc818dd5d60aa1b60648201526084015b60405180910390fd5b6000856002811115620003ff57620003ff62000e29565b141562000586576200042b866040518060600160405280602481526020016200206d6024913962000d9a565b60005b84518110156200057f5760008582815181106200044f576200044f62000e13565b6020908102919091018101516001600160e01b03198116600090815291859052604090912054909150606081901c15620004f25760405162461bcd60e51b815260206004820152603560248201527f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f60448201527f6e207468617420616c72656164792065786973747300000000000000000000006064820152608401620003df565b6001600160e01b031980831660008181526020879052604090206001600160601b031960608d901b168e17905560e060058e901b811692831c199c909c1690821c179a811415620005575760038c901c600090815260018601602052604081209b909b555b8b620005638162000e55565b9c50505050508080620005769062000e55565b9150506200042e565b5062000b69565b60018560028111156200059d576200059d62000e29565b1415620007b957620005c986604051806060016040528060288152602001620020b96028913962000d9a565b60005b84518110156200057f576000858281518110620005ed57620005ed62000e13565b6020908102919091018101516001600160e01b03198116600090815291859052604090912054909150606081901c30811415620006855760405162461bcd60e51b815260206004820152602f60248201527f4c69624469616d6f6e644375743a2043616e2774207265706c61636520696d6d60448201526e3aba30b1363290333ab731ba34b7b760891b6064820152608401620003df565b896001600160a01b0316816001600160a01b03161415620006fe5760405162461bcd60e51b815260206004820152603860248201526000805160206200202d83398151915260448201527f6374696f6e20776974682073616d652066756e6374696f6e00000000000000006064820152608401620003df565b6001600160a01b0381166200076b5760405162461bcd60e51b815260206004820152603860248201526000805160206200202d83398151915260448201527f6374696f6e207468617420646f65736e277420657869737400000000000000006064820152608401620003df565b506001600160e01b031990911660009081526020849052604090206001600160601b03919091166001600160601b031960608a901b1617905580620007b08162000e55565b915050620005cc565b6002856002811115620007d057620007d062000e29565b141562000b10576001600160a01b03861615620008565760405162461bcd60e51b815260206004820152603660248201527f4c69624469616d6f6e644375743a2052656d6f7665206661636574206164647260448201527f657373206d7573742062652061646472657373283029000000000000000000006064820152608401620003df565b600388901c6007891660005b865181101562000aeb57896200089f57826200087e8162000fd7565b60008181526001870160205260409020549b50935060079250620008af9050565b81620008ab8162000fd7565b9250505b6000806000808a8581518110620008ca57620008ca62000e13565b6020908102919091018101516001600160e01b031981166000908152918a9052604090912054909150606081901c6200096c5760405162461bcd60e51b815260206004820152603760248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360448201527f74696f6e207468617420646f65736e27742065786973740000000000000000006064820152608401620003df565b606081901c301415620009d95760405162461bcd60e51b815260206004820152602e60248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560448201526d3a30b1363290333ab731ba34b7b760911b6064820152608401620003df565b600587901b8f901b94506001600160e01b03198086169083161462000a2b576001600160e01b03198516600090815260208a90526040902080546001600160601b0319166001600160601b0383161790555b6001600160e01b031991909116600090815260208990526040812055600381901c611fff16925060051b60e016905085821462000a92576000828152600188016020526040902080546001600160e01b031980841c19909116908516831c17905562000ab6565b80836001600160e01b031916901c816001600160e01b031960001b901c198e16179c505b8462000ad257600086815260018801602052604081208190559c505b505050808062000ae29062000e55565b91505062000862565b508062000afa83600862000ff1565b62000b06919062001013565b9950505062000b69565b60405162461bcd60e51b815260206004820152602760248201527f4c69624469616d6f6e644375743a20496e636f727265637420466163657443756044820152663a20b1ba34b7b760c91b6064820152608401620003df565b50959694955050505050565b6001600160a01b03821662000bff5780511562000bfb5760405162461bcd60e51b815260206004820152603c60248201527f4c69624469616d6f6e644375743a205f696e697420697320616464726573732860448201527f3029206275745f63616c6c64617461206973206e6f7420656d707479000000006064820152608401620003df565b5050565b600081511162000c785760405162461bcd60e51b815260206004820152603d60248201527f4c69624469616d6f6e644375743a205f63616c6c6461746120697320656d707460448201527f7920627574205f696e6974206973206e6f7420616464726573732830290000006064820152608401620003df565b6001600160a01b038216301462000cae5762000cae82604051806060016040528060288152602001620020916028913962000d9a565b600080836001600160a01b03168360405162000ccb91906200102e565b600060405180830381855af49150503d806000811462000d08576040519150601f19603f3d011682016040523d82523d6000602084013e62000d0d565b606091505b50915091508162000d945780511562000d3c578060405162461bcd60e51b8152600401620003df91906200104c565b60405162461bcd60e51b815260206004820152602660248201527f4c69624469616d6f6e644375743a205f696e69742066756e6374696f6e2072656044820152651d995c9d195960d21b6064820152608401620003df565b50505050565b813b818162000d945760405162461bcd60e51b8152600401620003df91906200104c565b80516001600160a01b038116811462000dd657600080fd5b919050565b6000806040838503121562000def57600080fd5b62000dfa8362000dbe565b915062000e0a6020840162000dbe565b90509250929050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060001982141562000e6c5762000e6c62000e3f565b5060010190565b60005b8381101562000e9057818101518382015260200162000e76565b8381111562000d945750506000910152565b6000815180845262000ebc81602086016020860162000e73565b601f01601f19169290920160200192915050565b60006060808301818452808751808352608092508286019150828160051b8701016020808b0160005b8481101562000fa557898403607f19018652815180516001600160a01b0316855283810151898601906003811062000f4157634e487b7160e01b600052602160045260246000fd5b868601526040918201519186018a905281519081905290840190600090898701905b8083101562000f8f5783516001600160e01b031916825292860192600192909201919086019062000f63565b5097850197955050509082019060010162000ef9565b50506001600160a01b038a1690880152868103604088015262000fc9818962000ea2565b9a9950505050505050505050565b60008162000fe95762000fe962000e3f565b506000190190565b60008160001904831182151516156200100e576200100e62000e3f565b500290565b6000821982111562001029576200102962000e3f565b500190565b600082516200104281846020870162000e73565b9190910192915050565b60208152600062001061602083018462000ea2565b9392505050565b610fb580620010786000396000f3fe60806040523661000b57005b600080356001600160e01b0319168152600080516020610eec8339815191526020819052604090912054819060601c8061008c5760405162461bcd60e51b815260206004820181905260248201527f4469616d6f6e643a2046756e6374696f6e20646f6573206e6f7420657869737460448201526064015b60405180910390fd5b3660008037600080366000845af43d6000803e8080156100ab573d6000f35b3d6000fd5b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c132080546001600160a01b031981166001600160a01b03848116918217909355604051600080516020610eec833981519152939092169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131e54600080516020610eec8339815191529061ffff8116908190600090600716156101905750600381901c60009081526001840160205260409020545b60005b87518110156102175761020083838a84815181106101b3576101b3610cb2565b6020026020010151600001518b85815181106101d1576101d1610cb2565b6020026020010151602001518c86815181106101ef576101ef610cb2565b6020026020010151604001516102a3565b90935091508061020f81610cde565b915050610193565b508282146102335760028401805461ffff191661ffff84161790555b600782161561025557600382901c600090815260018501602052604090208190555b7f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb67387878760405161028893929190610d67565b60405180910390a161029a8686610a7e565b50505050505050565b60008080600080516020610eec8339815191529050600084511161031d5760405162461bcd60e51b815260206004820152602b60248201527f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660448201526a1858d95d081d1bc818dd5d60aa1b6064820152608401610083565b600085600281111561033157610331610cf9565b141561049f5761035986604051806060016040528060248152602001610f0c60249139610c91565b60005b845181101561049957600085828151811061037957610379610cb2565b6020908102919091018101516001600160e01b03198116600090815291859052604090912054909150606081901c156104125760405162461bcd60e51b815260206004820152603560248201527f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f6044820152746e207468617420616c72656164792065786973747360581b6064820152608401610083565b6001600160e01b031980831660008181526020879052604090206001600160601b031960608d901b168e17905560e060058e901b811692831c199c909c1690821c179a8114156104765760038c901c600090815260018601602052604081209b909b555b8b61048081610cde565b9c5050505050808061049190610cde565b91505061035c565b50610a72565b60018560028111156104b3576104b3610cf9565b14156106e5576104db86604051806060016040528060288152602001610f5860289139610c91565b60005b84518110156104995760008582815181106104fb576104fb610cb2565b6020908102919091018101516001600160e01b03198116600090815291859052604090912054909150606081901c308114156105915760405162461bcd60e51b815260206004820152602f60248201527f4c69624469616d6f6e644375743a2043616e2774207265706c61636520696d6d60448201526e3aba30b1363290333ab731ba34b7b760891b6064820152608401610083565b896001600160a01b0316816001600160a01b031614156106195760405162461bcd60e51b815260206004820152603860248201527f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60448201527f6374696f6e20776974682073616d652066756e6374696f6e00000000000000006064820152608401610083565b6001600160a01b0381166106955760405162461bcd60e51b815260206004820152603860248201527f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60448201527f6374696f6e207468617420646f65736e277420657869737400000000000000006064820152608401610083565b506001600160e01b031990911660009081526020849052604090206bffffffffffffffffffffffff919091166001600160601b031960608a901b16179055806106dd81610cde565b9150506104de565b60028560028111156106f9576106f9610cf9565b1415610a1a576001600160a01b038616156107755760405162461bcd60e51b815260206004820152603660248201527f4c69624469616d6f6e644375743a2052656d6f76652066616365742061646472604482015275657373206d757374206265206164647265737328302960501b6064820152608401610083565b600388901c6007891660005b86518110156109fa57896107b9578261079981610e67565b60008181526001870160205260409020549b509350600792506107c79050565b816107c381610e67565b9250505b6000806000808a85815181106107df576107df610cb2565b6020908102919091018101516001600160e01b031981166000908152918a9052604090912054909150606081901c61087f5760405162461bcd60e51b815260206004820152603760248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360448201527f74696f6e207468617420646f65736e27742065786973740000000000000000006064820152608401610083565b606081901c3014156108ea5760405162461bcd60e51b815260206004820152602e60248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560448201526d3a30b1363290333ab731ba34b7b760911b6064820152608401610083565b600587901b8f901b94506001600160e01b031980861690831614610940576001600160e01b03198516600090815260208a90526040902080546001600160601b0319166bffffffffffffffffffffffff83161790555b6001600160e01b031991909116600090815260208990526040812055600381901c611fff16925060051b60e01690508582146109a5576000828152600188016020526040902080546001600160e01b031980841c19909116908516831c1790556109c9565b80836001600160e01b031916901c816001600160e01b031960001b901c198e16179c505b846109e457600086815260018801602052604081208190559c505b50505080806109f290610cde565b915050610781565b5080610a07836008610e7e565b610a119190610e9d565b99505050610a72565b60405162461bcd60e51b815260206004820152602760248201527f4c69624469616d6f6e644375743a20496e636f727265637420466163657443756044820152663a20b1ba34b7b760c91b6064820152608401610083565b50959694955050505050565b6001600160a01b038216610b0557805115610b015760405162461bcd60e51b815260206004820152603c60248201527f4c69624469616d6f6e644375743a205f696e697420697320616464726573732860448201527f3029206275745f63616c6c64617461206973206e6f7420656d707479000000006064820152608401610083565b5050565b6000815111610b7c5760405162461bcd60e51b815260206004820152603d60248201527f4c69624469616d6f6e644375743a205f63616c6c6461746120697320656d707460448201527f7920627574205f696e6974206973206e6f7420616464726573732830290000006064820152608401610083565b6001600160a01b0382163014610bae57610bae82604051806060016040528060288152602001610f3060289139610c91565b600080836001600160a01b031683604051610bc99190610eb5565b600060405180830381855af49150503d8060008114610c04576040519150601f19603f3d011682016040523d82523d6000602084013e610c09565b606091505b509150915081610c8b57805115610c34578060405162461bcd60e51b81526004016100839190610ed1565b60405162461bcd60e51b815260206004820152602660248201527f4c69624469616d6f6e644375743a205f696e69742066756e6374696f6e2072656044820152651d995c9d195960d21b6064820152608401610083565b50505050565b813b8181610c8b5760405162461bcd60e51b81526004016100839190610ed1565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415610cf257610cf2610cc8565b5060010190565b634e487b7160e01b600052602160045260246000fd5b60005b83811015610d2a578181015183820152602001610d12565b83811115610c8b5750506000910152565b60008151808452610d53816020860160208601610d0f565b601f01601f19169290920160200192915050565b60006060808301818452808751808352608092508286019150828160051b8701016020808b0160005b84811015610e3757898403607f19018652815180516001600160a01b03168552838101518986019060038110610dd657634e487b7160e01b600052602160045260246000fd5b868601526040918201519186018a905281519081905290840190600090898701905b80831015610e225783516001600160e01b0319168252928601926001929092019190860190610df8565b50978501979550505090820190600101610d90565b50506001600160a01b038a16908801528681036040880152610e598189610d3b565b9a9950505050505050505050565b600081610e7657610e76610cc8565b506000190190565b6000816000190483118215151615610e9857610e98610cc8565b500290565b60008219821115610eb057610eb0610cc8565b500190565b60008251610ec7818460208701610d0f565b9190910192915050565b602081526000610ee46020830184610d3b565b939250505056fec8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c4c69624469616d6f6e644375743a2041646420666163657420686173206e6f20636f64654c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a205265706c61636520666163657420686173206e6f20636f6465a2646970667358221220e4d7e6286bf579989ed4664eefc8abc10d8a93fda4f92bdcdd6e60a0df0c87c864736f6c634300080900334c69624469616d6f6e644375743a2043616e2774207265706c6163652066756ec8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c4c69624469616d6f6e644375743a2041646420666163657420686173206e6f20636f64654c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a205265706c61636520666163657420686173206e6f20636f6465";

export class Diamond__factory extends ContractFactory {
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
    _contractOwner: string,
    _diamondCutFacet: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<Diamond> {
    return super.deploy(
      _contractOwner,
      _diamondCutFacet,
      overrides || {}
    ) as Promise<Diamond>;
  }
  getDeployTransaction(
    _contractOwner: string,
    _diamondCutFacet: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _contractOwner,
      _diamondCutFacet,
      overrides || {}
    );
  }
  attach(address: string): Diamond {
    return super.attach(address) as Diamond;
  }
  connect(signer: Signer): Diamond__factory {
    return super.connect(signer) as Diamond__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DiamondInterface {
    return new utils.Interface(_abi) as DiamondInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Diamond {
    return new Contract(address, _abi, signerOrProvider) as Diamond;
  }
}
