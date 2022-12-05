import * as fs from 'node:fs/promises';

const remove = async () => {

    fs.unlink('./src/fs/files/fileToRemove.txt', (error) => {
        if (error) throw error
       console.log( error,'FS operation failed');
     })
};

await remove();