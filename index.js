#!/usr/bin/env node
const fs = require('fs')
const _ = require('lodash')
const cli = require('cli')
const options = cli.parse({
  file: ['f', 'Input file', 'file']
})

const input = fs.readFileSync(options.file, 'utf8').split('\n')

const day5 = require('./day5/day5')

const solution = day5.solvePart1(input)
console.log(solution)
