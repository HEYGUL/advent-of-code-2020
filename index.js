#!/usr/bin/env node
const fs = require('fs')
const _ = require('lodash')
const cli = require('cli')
const options = cli.parse({
  file: ['f', 'Input file', 'file']
})

const input = fs.readFileSync(options.file, 'utf8')

const day6 = require('./day6/day6')

const solution = day6.solvePart2(input)
console.log(solution)
