#!/usr/bin/env node
const fs = require('fs')
const _ = require('lodash')
const cli = require('cli')
const options = cli.parse({
  file: ['f', 'Input file', 'file']
})

const input = fs.readFileSync(options.file, 'utf8')

const day9 = require('./day9/day9')

const solution = day9.solvePart2(input)
console.log(solution)
