require("dotenv").config()

const hre = require('hardhat')

async function main() {
    console.log('Yup!', process.env.GOERLI_RPC_URL)

    await hre.run("compile")
    // const Operator = await hre.ethers.getContractFactory("Operator")
    // const operator = await Operator.deploy('0x326C977E6efc84E512bB9C30f76E30c160eD06FB', '0x43F65FaB21AF387cb8ea99138DD6bFbfd3437610')
    // await operator.deployed()

    // console.log(operator.address)
}

main().catch((e) => {
    console.error(e)
    process.exitCode = 1
})