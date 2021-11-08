//import gendiff from '../bin/gendiff.js';
import fs from 'fs'
import path from 'path';
import _ from 'lodash';



const gendiff = (file1, file2) => {
    const workingDir = process.cwd()
    console.log(workingDir)
    
    const absoluteWay1 = path.resolve(file1);
    const absoluteWay2 = path.resolve(file2);
    
    if (file2 !== absoluteWay2 && absoluteWay2.startsWith('/')) {
console.log(workingDir + "/" + file1)
console.log(workingDir + "/" + file2)
    }
   
    const extName1 = path.extname(file1)
const read1 = fs.readFileSync(file1, 'utf8')
const read2 = fs.readFileSync(file2, 'utf8')
 

  const parseXZ = JSON.parse(read1)
  console.log(parseXZ)
  const parseXY = JSON.parse(read2)
  console.log(parseXY)
 
   //Get massive keys unique for 2 object
const allKeys = _.union(Object.keys(parseXZ), Object.keys(parseXY))
  console.log( allKeys)
 const filteredKeys = _.reduce(allKeys, (result, key) => {
   if(!_.isEqual(parseXZ[key], parseXY[key]) {
     result[key] = {parseXZ: parseXZ[key], parseXY: parseXY[key]}
   }
   return result;
  }, [])

 


  console.log(parseXZ.host)
    const string = 123;
    return absoluteWay1;
  };
  export default gendiff;