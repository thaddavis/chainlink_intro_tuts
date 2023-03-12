require("dotenv").config()

const hre = require('hardhat')

async function main() {
    console.log('Yup!', process.env.GOERLI_RPC_URL)

    await hre.run("compile")
    const DataFeed = await hre.ethers.getContractFactory("DataFeed")
    const dataFeed = await DataFeed.deploy()
    await dataFeed.deployed()

    console.log(dataFeed.address)

    let txnResponse = await dataFeed.getLatestPrice()
    console.log('getLatestPrice()', txnResponse)
}

main().catch((e) => {
    console.error(e)
    process.exitCode = 1
})