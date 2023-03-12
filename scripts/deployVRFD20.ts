require("dotenv").config()

const hre = require('hardhat')

async function main() {
    console.log('Yup!', process.env.GOERLI_RPC_URL)

    await hre.run("compile")
    const VRFD20 = await hre.ethers.getContractFactory("VRFD20")
    const vrfd20 = await VRFD20.deploy("10683") // Subscription ID
    await vrfd20.deployed()

    console.log(vrfd20.address)

    // let txnResponse = await vrfd20.rollDice("0x43F65FaB21AF387cb8ea99138DD6bFbfd3437610")
    // console.log(txnResponse)
}

main().catch((e) => {
    console.error(e)
    process.exitCode = 1
})