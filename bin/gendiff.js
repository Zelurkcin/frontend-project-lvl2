#!/usr/bin/env node
//import { readFileSync } from 'fs';
import gendiff from './../src/index.js'


import { Command } from 'commander'; // (normal include)
//const program = new Command();
//import { Command } from 'commander';
const program = new Command();

program
  .version('0.0.1')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference')
  .option('-f, --format [type]',  'output format')
  .action((filepath1, filepath2) => {
    gendiff(filepath1, filepath2);
  });
const options = program.opts();
program.parse(process.argv);
