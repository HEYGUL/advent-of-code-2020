#!/usr/bin/env node
const fs = require('fs')

const today = (new Date()).getUTCDate()

const input = fs.readFileSync(`./day${today}/input.txt`, 'utf8')

const { solvePart1, solvePart2 } = require(`./day${today}`)

console.log(solvePart1(input))
console.log(solvePart2(input))
