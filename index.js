#!/usr/bin/env node
const fs = require('fs')
const _ = require('lodash')
const cli = require('cli')
const options = cli.parse({
  file: ['f', 'Input file', 'file']
})

const input = fs.readFileSync(options.file, 'utf8').split('\n')
const normalizedInput = _.compact(input)

const day2 = require('./day2/day2')

const solution = day2.solvePart2(normalizedInput)
console.log(solution)
