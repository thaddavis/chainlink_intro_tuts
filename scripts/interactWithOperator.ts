require("dotenv").config()

const ABI = require('../artifacts/@chainlink/contracts/src/v0.7/Operator.sol/Operator.json')

const hre = require('hardhat')

async function main() {
    
    console.log(process.env.GOERLI_RPC_URL)
    
    await hre.run("compile")

    // console.log(ABI.abi)

    const [owner] = await hre.ethers.getSigners();
    
    // console.log('owner', owner)

    const operatorContract = await hre.ethers.getContractAt(ABI.abi, "0x03cd282a023cb0a7311a5049a68399cfd43bb870", owner)
    
    // console.log('operatorContract', operatorContract)

    // operatorContract.setAuthorizedSenders(["0x80395046Ed015CD9C196638e2011327912E696F4"])

    let txnResp = await operatorContract.getAuthorizedSenders()
    console.log('txnResp', txnResp)

}

main().catch((e) => {
    console.error(e)
    process.exitCode = 1
})