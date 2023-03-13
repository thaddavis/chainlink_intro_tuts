require("dotenv").config()

const ABI = require('../artifacts/contracts/APIConsumer.sol/APIConsumer.json')

const hre = require('hardhat')

async function main() {
    
    console.log(process.env.GOERLI_RPC_URL)
    
    await hre.run("compile")

    // console.log(ABI.abi)

    const [owner] = await hre.ethers.getSigners();
    
    // console.log('owner', owner)

    const apiConsumerContract = await hre.ethers.getContractAt(ABI.abi, "0xC2aD8EFCE670063c7534f1E67A3E4Afd8B3927A3", owner)
    
    console.log('apiConsumerContract', apiConsumerContract)

    // let txnResp = await apiConsumerContract.house("0x43F65FaB21AF387cb8ea99138DD6bFbfd3437610");
    // console.log('txnResp 2', txnResp)

}

main().catch((e) => {
    console.error(e)
    process.exitCode = 1
})