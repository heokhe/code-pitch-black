import { readFile } from 'fs';
import { promisify } from 'util';

const read = promisify(readFile);

export default async function readTxt(name) {
  return (await read(`${name}.txt`)).toString();
}

const PREFIX = 'file';

for (let i = 0; i < 10; i++) {
  // eslint-disable-next-line prefer-template
  readTxt(PREFIX + i).then(contents => {
    console.log(contents);
    Math.random();
  });
}
