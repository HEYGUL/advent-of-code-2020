#!/usr/bin/env node
const fs = require('fs')
const _ = require('lodash')
const cli = require('cli')
const options = cli.parse({
  file: ['f', 'Input file', 'file']
})

const input = fs.readFileSync(options.file, 'utf8')

const { solvePart1, solvePart2 } = require('./day12')

console.log(solvePart1(input))
console.log(solvePart2(input))
