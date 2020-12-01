#!/usr/bin/env node
const fs = require('fs')
const _ = require('lodash')
const cli = require('cli')
const options = cli.parse({
  file: ['f', 'Input file', 'file']
})

const input = fs.readFileSync(options.file, 'utf8').split('\n')
const normalizedInput = _.compact(input.map(i => parseInt(i, 10)))

const day1 = require('./day1')

const solution = day1.solvePart2(normalizedInput)
console.log(solution)
