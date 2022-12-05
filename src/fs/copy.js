import * as fs from 'node:fs/promises';

const copy = async () => {
    
fs.cp('./src/fs/files', './src/fs/files_copy', 
(error) => {
    if (error) throw 'FS operation failed'
   console.log('FS operation failed');
 }
  );
};

copy();