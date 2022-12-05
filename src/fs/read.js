import { readFile } from 'node:fs';

const read = async () => {

    readFile('./src/fs/files/fileToRead.txt', 'utf8',(error, data) => {
        if (error) throw error
        console.log(data)
    })
};

await read();