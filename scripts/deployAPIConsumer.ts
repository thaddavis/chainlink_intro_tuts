require("dotenv").config()

const hre = require('hardhat')

async function main() {
    console.log(process.env.GOERLI_RPC_URL)

    await hre.run("compile")
    const APIConsumer = await hre.ethers.getContractFactory("APIConsumer")
    const apiConsumer = await APIConsumer.deploy()
    await apiConsumer.deployed()

    console.log(apiConsumer.address)

    // let txnResponse = await apiConsumer.requestVolumeData()
    // console.log('requestVolumeData()', txnResponse)
}

main().catch((e) => {
    console.error(e)
    process.exitCode = 1
})