require("dotenv").config()

const ABI = require('../abis/LINK.json')

// const API_ABI = require('../artifacts/contracts/APIConsumer.sol/APIConsumer.json')

const hre = require('hardhat')

async function main() {
    const BigNumber = hre.ethers.BigNumber
    const pointOneLink = BigNumber.from("100000000000000000") // 0.1

    console.log(process.env.GOERLI_RPC_URL)

    // await hre.run("compile")
    const [owner] = await hre.ethers.getSigners();

    const linkContract = await hre.ethers.getContractAt(ABI, "0x326C977E6efc84E512bB9C30f76E30c160eD06FB", owner)
    // console.log('linkContract', linkContract)

    let txnResp = await linkContract.transfer(
        '0x574B45Fb1e555c6499ccC0d1AADEc5D059809e95',
        pointOneLink
    )
    console.log(txnResp)

    // const apiConsumerContract = await hre.ethers.getContractAt(API_ABI.abi, "0xF2e03403D8Ef643351826bFBaC6eD6ae493E738B", owner)  
    // // console.log('apiConsumerContract', apiConsumerContract)

    // let txnResp = await apiConsumerContract.requestVolumeData();
    // console.log('txnResp requestVolumeData', txnResp)

    // txnResp = await apiConsumerContract.volume();
    // console.log('txnResp volume', txnResp)
}

main().catch((e) => {
    console.error(e)
    process.exitCode = 1
})