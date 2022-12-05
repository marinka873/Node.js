import { readFileSync } from 'node:fs';
import {
    createReadStream
  } from 'node:fs';
const {
    createHash
  } = await import('node:crypto');



const calculateHash = async () => {

    const file = readFileSync('../../files/filToCalculateHashFor.txt')
    const hash = createHash('sha256')
    hash.update(file)

    const fileToHex = hash.digest('hex')
    console.log(fileToHex);

};

await calculateHash();