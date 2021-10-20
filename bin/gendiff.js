#!/usr/bin/env node

const { Command } = require('commander'); // (normal include)
const program = new Command();

program
  .version('0.0.1')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .description('Compares two configuration files and shows a difference')
  .option('-f, --format [type]',  'output format');

program.parse(process.argv);

