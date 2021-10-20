#!/usr/bin/env node

const { Command } = require('commander'); // (normal include)
const program = new Command();

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference');

program.parse(process.argv);

