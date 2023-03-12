require("dotenv").config()

const ABI = require('../artifacts/contracts/VRFD20.sol/VRFD20.json')

const hre = require('hardhat')

async function main() {
    
    console.log(process.env.GOERLI_RPC_URL)
    
    await hre.run("compile")

    // console.log(ABI.abi)

    const [owner] = await hre.ethers.getSigners();
    
    // console.log('owner', owner)

    const vrfd20Contract = await hre.ethers.getContractAt(ABI.abi, "0x3fd2f889b61a46a7d71729760e0d5505460eb494", owner)
    
    console.log('vrfd20Contract', vrfd20Contract)

    let txnResp = await vrfd20Contract.house("0x43F65FaB21AF387cb8ea99138DD6bFbfd3437610");
    console.log('txnResp 2', txnResp)

}

main().catch((e) => {
    console.error(e)
    process.exitCode = 1
})