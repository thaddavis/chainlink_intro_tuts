require("dotenv").config()

const hre = require('hardhat')

async function main() {
    console.log('Yup!', process.env.GOERLI_RPC_URL)

    await hre.run("compile")
    const HelloWorld = await hre.ethers.getContractFactory("HelloWorld")
    const helloWorld = await HelloWorld.deploy("Yes")
    await helloWorld.deployed()

    console.log(helloWorld.address)

    let txnResponse = await helloWorld.message()
    console.log(txnResponse)

    txnResponse = await helloWorld.updateMessage('--- --- ---')
    const txnReceipt = await txnResponse.wait()

    txnResponse = await helloWorld.message()
    console.log(txnResponse)
}

main().catch((e) => {
    console.error(e)
    process.exitCode = 1
})