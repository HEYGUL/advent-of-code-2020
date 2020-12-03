#!/usr/bin/env node
const fs = require('fs')
const _ = require('lodash')
const cli = require('cli')
const options = cli.parse({
  file: ['f', 'Input file', 'file']
})

const input = fs.readFileSync(options.file, 'utf8').split('\n')
const normalizedInput = _.compact(input)

const day3 = require('./day3/day3')

const solution = day3.solvePart1(normalizedInput)
console.log(solution)
