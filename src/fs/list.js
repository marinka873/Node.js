import { readdir } from 'node:fs/promises';

const list = async () => {

const PATH = './src/fs/files'

    try {
        const files = await readdir(PATH);
        for (const file of files)
          console.log(file);
      } catch (err) {
          throw 'FS operation failed';
      }
    };


await list();