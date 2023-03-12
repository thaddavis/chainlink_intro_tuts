# Welcome

## Create boilerplate

npx hardhat

## Write SimpleStorage.sol contract and deploy

npx hardhat run scripts/deploy_and_store.ts

## Add dotenv to both the `hardhat.config.ts` and the `deploy_and_store.ts` files

npm i dotenv

## Sign up for a node provider unless you have your own node

ie: https://www.quicknode.com/
ie: https://www.alchemy.com/

## Deploy to Goerli

npx hardhat run scripts/deploy_and_store.ts --network goerli

## Verify Contract on Etherscan

npx hardhat verify --network goerli 0xcC01C821Bf5F13DCf772Ed9711333B535e0e57A7

## Classic `Source file requires different compiler version` error

- Ctrl+Shift+P
- Solidity: Change global compiler version (Remote)

## Compiling Contracts

- npx hardhat compile
