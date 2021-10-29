//import gendiff from '../bin/gendiff.js';
import fs from 'fs'
import path from 'path';
const gendiff = (file1, file2) => {
    const workingDir = process.cwd()
    console.log(workingDir)
   // console.log(program.filepath1)
   
    const absoluteWay1 = path.resolve(file1);
    const absoluteWay2 = path.resolve(file2);
    
    if (file2 !== absoluteWay1 && absoluteWay1.startsWith('/')) {
console.log(workingDir + "/" + file1)
console.log(workingDir + "/" + file2)
    }
   
    const extName1 = path.extname(file1)
const read1 = fs.readFileSync(file1, 'utf8')
const read2 = fs.readFileSync(file2, 'utf8')
console.log(read1, read2)
    console.log(absoluteWay1)
    console.log(extName1)
    let diff = {};
for (const key in read1) {
  if (read1[key] && read2.[key] !== ){
diff[key] = read1
  }
}
  const parseXZ = JSON.parse(read1)
  console.log(parseXZ)
  console.log(parseXZ.host)
    const string = 123;
    return absoluteWay1;
  };
  export default gendiff;