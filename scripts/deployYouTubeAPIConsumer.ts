require("dotenv").config()

const hre = require('hardhat')

async function main() {
    console.log(process.env.GOERLI_RPC_URL)

    await hre.run("compile")
    const YouTubeAPIConsumer = await hre.ethers.getContractFactory("YouTubeAPIConsumer")
    const youTubeAPIConsumer = await YouTubeAPIConsumer.deploy()
    await youTubeAPIConsumer.deployed()

    console.log(youTubeAPIConsumer.address)

    // let txnResponse = await apiConsumer.requestVolumeData()
    // console.log('requestVolumeData()', txnResponse)
}

main().catch((e) => {
    console.error(e)
    process.exitCode = 1
})