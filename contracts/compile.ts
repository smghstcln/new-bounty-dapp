import * as path from 'path';
import * as fs from 'fs-extra';
const solc = require('solc');

const contractPath = path.resolve(__dirname, '..', 'contracts', 'bountyplatform.sol');
const contractSource = fs.readFileSync(contractPath, 'utf-8');
const input = {
  language: 'Solidity',
  sources: {
    'bountyplatform.sol': {
      content: contractSource,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['abi', 'evm.bytecode'],
      },
    },
  },
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));

const contractName = 'bountyplatform';
const contractFileName = `${contractName}.json`;
const outputDir = path.resolve(__dirname, '..', 'build', 'contracts');
fs.ensureDirSync(outputDir);

const abi = output.contracts['bountyplatform.sol'][contractName].abi;
const bytecode = output.contracts['bountyplatform.sol'][contractName].evm.bytecode.object;
fs.writeFileSync(path.join(outputDir, contractFileName), JSON.stringify({ abi, bytecode }), { encoding: 'utf-8' });

console.log(`The ${contractFileName} file has been saved in the build/contracts directory.`);
