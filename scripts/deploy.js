const {ethers} = require('hardhat')

async function main() {
    const chainId = await ethers.provider.getNetwork()
    console.log(chainId)
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
});