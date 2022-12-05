import * as fs from 'node:fs/promises';
import * as path from 'node:path';

const create = async () => {
    fs.writeFile(
        path.join( './src/fs/files', 'fresh.txt'),
         'I am fresh and young', (error) => {
       if (error) throw error
      console.log(error,'FS operation failed');
    })
};

await create();