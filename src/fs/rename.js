import * as fs from 'node:fs/promises';

const rename = async () => {
    const WRONG_FILE_NAME = './src/fs/files/wrongFilename.txt'
    const PROPER_FILE_NAME = './src/fs/files/properFilename.md'
    
    fs.rename(WRONG_FILE_NAME, PROPER_FILE_NAME , (error) => {
        if (error) throw error
       console.log('FS operation failed');
     })

};

await rename();