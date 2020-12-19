const { solvePart1, solvePart2 } = require('./')

test('solves part 1', () => {
  const input = '0: 4 1 5\n' +
      '1: 2 3 | 3 2\n' +
      '2: 4 4 | 5 5\n' +
      '3: 4 5 | 5 4\n' +
      '4: "a"\n' +
      '5: "b"\n' +
      '\n' +
      'ababbb\n' +
      'bababa\n' +
      'abbbab\n' +
      'aaabbb\n' +
      'aaaabbb'

  const solution = solvePart1(input)

  expect(solution).toEqual(2)
})

test('solves part 1 - puzzle', () => {
  const input = '58: 127 99 | 105 36\n' +
      '56: 71 99 | 102 36\n' +
      '116: 36 | 99\n' +
      '42: 19 36 | 68 99\n' +
      '67: 36 71 | 99 73\n' +
      '117: 81 99 | 80 36\n' +
      '77: 99 37 | 36 83\n' +
      '106: 27 99 | 32 36\n' +
      '73: 36 99 | 99 99\n' +
      '126: 15 36 | 73 99\n' +
      '133: 99 99 | 36 116\n' +
      '92: 99 51 | 36 14\n' +
      '61: 99 21 | 36 6\n' +
      '6: 54 116\n' +
      '33: 36 103 | 99 9\n' +
      '131: 54 99 | 15 36\n' +
      '81: 36 38 | 99 78\n' +
      '93: 99 100 | 36 87\n' +
      '1: 113 99 | 129 36\n' +
      '36: "b"\n' +
      '70: 99 130 | 36 122\n' +
      '76: 99 4 | 36 44\n' +
      '79: 65 99 | 48 36\n' +
      '99: "a"\n' +
      '108: 118 99 | 96 36\n' +
      '15: 36 36\n' +
      '2: 99 102 | 36 27\n' +
      '103: 109 99 | 136 36\n' +
      '9: 23 99 | 63 36\n' +
      '12: 15 99 | 123 36\n' +
      '137: 36 54 | 99 20\n' +
      '13: 36 30 | 99 70\n' +
      '7: 99 32 | 36 102\n' +
      '94: 18 36 | 59 99\n' +
      '71: 36 99\n' +
      '3: 99 104 | 36 62\n' +
      '4: 72 99 | 114 36\n' +
      '32: 36 36 | 99 36\n' +
      '21: 27 99 | 122 36\n' +
      '52: 99 20 | 36 73\n' +
      '135: 99 116 | 36 99\n' +
      '31: 95 99 | 89 36\n' +
      '24: 99 107 | 36 125\n' +
      '19: 36 77 | 99 28\n' +
      '112: 15 36 | 15 99\n' +
      '89: 99 50 | 36 111\n' +
      '23: 99 34 | 36 73\n' +
      '69: 36 54 | 99 73\n' +
      '85: 12 99 | 25 36\n' +
      '53: 36 54\n' +
      '95: 36 76 | 99 117\n' +
      '124: 106 99 | 22 36\n' +
      '10: 102 99 | 122 36\n' +
      '107: 99 133 | 36 34\n' +
      '129: 54 99 | 71 36\n' +
      '16: 36 130 | 99 27\n' +
      '86: 36 122 | 99 102\n' +
      '45: 97 36 | 41 99\n' +
      '102: 99 99 | 116 36\n' +
      '25: 32 36 | 133 99\n' +
      '87: 99 52 | 36 115\n' +
      '119: 91 99 | 101 36\n' +
      '34: 99 99\n' +
      '121: 36 91 | 99 52\n' +
      '29: 102 36 | 27 99\n' +
      '20: 116 116\n' +
      '47: 36 36 | 99 99\n' +
      '49: 123 99\n' +
      '38: 99 98 | 36 86\n' +
      '123: 36 36 | 36 99\n' +
      '48: 36 123 | 99 54\n' +
      '51: 36 54 | 99 102\n' +
      '98: 73 99 | 47 36\n' +
      '26: 20 99 | 34 36\n' +
      '68: 36 88 | 99 108\n' +
      '111: 75 36 | 5 99\n' +
      '54: 99 36 | 99 99\n' +
      '109: 47 36 | 20 99\n' +
      '0: 8 11\n' +
      '17: 36 57 | 99 120\n' +
      '66: 99 132 | 36 35\n' +
      '62: 36 130 | 99 32\n' +
      '59: 36 130 | 99 122\n' +
      '44: 99 60 | 36 92\n' +
      '122: 99 36\n' +
      '74: 126 99 | 16 36\n' +
      '37: 82 99 | 85 36\n' +
      '65: 130 36 | 27 99\n' +
      '80: 58 36 | 43 99\n' +
      '55: 99 130 | 36 20\n' +
      '118: 66 36 | 3 99\n' +
      '5: 24 36 | 124 99\n' +
      '14: 36 54 | 99 71\n' +
      '11: 42 31\n' +
      '96: 40 99 | 61 36\n' +
      '22: 36 34 | 99 135\n' +
      '97: 36 27 | 99 20\n' +
      '43: 99 128 | 36 29\n' +
      '101: 73 36 | 133 99\n' +
      '91: 133 36 | 54 99\n' +
      '114: 36 112 | 99 52\n' +
      '83: 79 99 | 74 36\n' +
      '28: 134 99 | 39 36\n' +
      '72: 99 26 | 36 49\n' +
      '78: 36 25 | 99 90\n' +
      '30: 102 99 | 133 36\n' +
      '27: 99 36 | 36 99\n' +
      '35: 99 27 | 36 15\n' +
      '84: 2 36 | 64 99\n' +
      '75: 1 36 | 119 99\n' +
      '115: 130 36 | 71 99\n' +
      '39: 99 84 | 36 121\n' +
      '40: 99 69 | 36 110\n' +
      '63: 36 32\n' +
      '88: 17 99 | 93 36\n' +
      '120: 53 99 | 55 36\n' +
      '105: 99 133 | 36 123\n' +
      '127: 36 123 | 99 47\n' +
      '134: 99 46 | 36 45\n' +
      '50: 36 33 | 99 138\n' +
      '82: 131 99 | 59 36\n' +
      '104: 122 99 | 27 36\n' +
      '8: 42\n' +
      '113: 34 36 | 123 99\n' +
      '125: 99 123 | 36 54\n' +
      '64: 54 36\n' +
      '46: 36 10 | 99 107\n' +
      '130: 99 36 | 36 116\n' +
      '18: 36 54 | 99 34\n' +
      '110: 99 34 | 36 27\n' +
      '136: 99 15 | 36 73\n' +
      '132: 122 36 | 133 99\n' +
      '128: 15 99 | 102 36\n' +
      '57: 36 56 | 99 67\n' +
      '100: 99 63 | 36 137\n' +
      '60: 7 99 | 63 36\n' +
      '90: 36 122 | 99 133\n' +
      '41: 34 36\n' +
      '138: 99 94 | 36 13\n' +
      '\n' +
      'babbbbababbbababaabaabab\n' +
      'aaababbaababbabbaababbabbaaabaab\n' +
      'abaaaabbaabaaabaababbbbaabbaaaba\n' +
      'abbaabbbbbaaaaaabaaaaaaa\n' +
      'aabaaaababababababaaababbabbbaaa\n' +
      'aaabaaabbbabbaaabbaababb\n' +
      'aaabbabbabbbaababbbabbab\n' +
      'bbbabbbbaaabbabbbaabbaab\n' +
      'babbbaabbaaabbaaaabaaaabaabbbaabaabbbaaaaabbbbbb\n' +
      'abbaaabbabbabaaaaaaaaabb\n' +
      'bbbabbaaabaabbbbaaabbabbaabbbbbbbaababab\n' +
      'ababbbabbabbababbaabbbbbbbbabaabaabbbbbb\n' +
      'bbbbbbbbaabababababbbbba\n' +
      'aaabbbbbabbababbabbaaaaa\n' +
      'aaabbabbbaabbbaabaababbabbbbbbabaabaaabaababaaba\n' +
      'abaaaabaabaaababaabbbbbb\n' +
      'bbbbbabbaababbbbaabbaaba\n' +
      'bbbaabaabaabbbbaabbabaaabababaaaaabbbabaababaababbbbabaa\n' +
      'abaaaabbbbaabbbabaababab\n' +
      'abababbabbaabaaaabbbbaba\n' +
      'babbbabbbbabbabaaaababbb\n' +
      'aabbaabaaabbbaaabbabaaaa\n' +
      'abbabaaababbbbababbbbaaabbabbbaa\n' +
      'babababaabbaabbbbabbbbabbaaabaabbbabbbaa\n' +
      'abababababbbbbbbaaabaabb\n' +
      'bbbbbbaabaababaabbbaabba\n' +
      'bbabaababbababbbbaabbaba\n' +
      'aaaabaabaaababbbabaabbabbaaaaaaaaaaaabba\n' +
      'babaabaaabbababbaabbbbaa\n' +
      'aababbbbabaabbabbbbabbbaababbbababbaaaabbabaaaab\n' +
      'babaabbbbababababbababab\n' +
      'babababbbababbaaabbbaabaaaaabbbbaaaabaabaaabaaabaabaabbbbaaaaaaabaababab\n' +
      'ababbababbbbaaabbabababbabaaaabbbbaabbbbaaaaabbabbaaaabbbbbbbbbabbbaaabbaababbbaaaabbaaaabbabbba\n' +
      'aaabaaabaabababaabbababaabbbaabaaaabaabb\n' +
      'bbbbbbaabbaaabbabbaaababaaaababbbaaabbba\n' +
      'bbbbbaaaaabaabbaabbabaabaabbbbbababbaababaaabbabaabbabab\n' +
      'bbaaabbbbaabbbabbbbaaaabbabbbabaaaaaabaabbaabbbbbbbabbab\n' +
      'baabaaabbbbabbbabbbaaabbaabbbbbb\n' +
      'bbbbaabaaabbbaababbbbaaaabbbbbab\n' +
      'bbbabbbabbbaaabbbbbaabbb\n' +
      'abbbaababaababaabaaaaaaa\n' +
      'bbbbbabbbabbaabaabaababa\n' +
      'aababaaabababbabbabbbaaa\n' +
      'aabbabbbbbaaaabbbbaabbbbababbbbabbbaaaaa\n' +
      'bbabaaabbabbbbbbbbbbaabb\n' +
      'babbababaaabbabbbaaabbbb\n' +
      'abaaabbaabaaabbaaabbbbba\n' +
      'baababbbabbabbaabbababbbbaabaabaabababaabaabbaba\n' +
      'bbaabbbabaaabbaabaababab\n' +
      'bbbbbabbabbababbbbaabbbb\n' +
      'bbbbaaaaabbababaababbbaa\n' +
      'bababababaababaabaababbaabaaaaaa\n' +
      'bbbbaaaaaababaabbbbaaaaa\n' +
      'aababaabbaaaabbbabbabbbb\n' +
      'abbbababaaabbbbaabbbbbbbaabaaaaa\n' +
      'aaabaaaaaaabbbaabbbabbabbaaaabbbabbabbabaabbabaababaabba\n' +
      'bbaaabbababaaaaababaaabb\n' +
      'bbbabbbbbbaabbbbbabbbbbbbabbbaababaabbbbaabaaaaa\n' +
      'bbbbabbbabababbaaaabbaab\n' +
      'abaabbabaababaabbaaaabba\n' +
      'ababababbbbbbabbaaaaabaaabbbbbbbbababbbbaaabbbab\n' +
      'bbbbbbbabbbbbaabbbbabbaaaaaabbababbaabbbabbaaaab\n' +
      'abbbaababbaabaaaaabbbbaa\n' +
      'bbaaaabaaaaaaabaabababbb\n' +
      'babbabbbbbbbbbbbaabbbaaa\n' +
      'abababbaaabaabbaaaabbabbaaabbbaabaaaabaa\n' +
      'babaabaaabbabbabababbaab\n' +
      'abbababaabaaabbbaaabaaaaaaaaabbbbbbaabbb\n' +
      'babbabbaabbababbbaabbaba\n' +
      'babbabababababaaabbbaababaabbbbbaababbabbbaaaabaaaaabaaaabbbaaab\n' +
      'babaaaaaaaabbaaaabaaaaaa\n' +
      'bababaaabbbbbbbabaaababa\n' +
      'bbaababaaaabbbbaaabaabaabbaaabaa\n' +
      'abaaabbaabbabbabaababbaa\n' +
      'abbaaabbbaabbbaabaabbbab\n' +
      'bbbaaaabbbabbaabaabaabab\n' +
      'babbbbaaabaaabbabaaabbaaabaaabaa\n' +
      'bbbbbbaaaabababaababbbbb\n' +
      'abaabbaaabbbbbbbbabbbbba\n' +
      'abaabbbbbabbabbbbbbabaaa\n' +
      'baaaabbbabbbbbbbaaaabbba\n' +
      'aabababaabaabaaaabbabbba\n' +
      'bbaaabbababbbbabbbbbaabaaaaabbabaaabbaaaabbbbabbabbbbaababaaaaab\n' +
      'abbbbaabababaaaabbbaaaabaababaabbbbabbbbaaaaaaaabaaababbaaababaa\n' +
      'aabbabaaaabaaababaabbbab\n' +
      'babbabbbbbaabaaaaaabaaaababbbbbbaabbabba\n' +
      'abaaaabbaaabaabababbbaaa\n' +
      'aaaababbbbbaaaabaabbbaaa\n' +
      'bbbabaabbbbbabbaabaaabaa\n' +
      'ababbabbaababaaaabaaaabbbbaaabbbbabaabab\n' +
      'babbbbabaaabaaabaaaaabaaaabbabab\n' +
      'aababbabbabaabbbbaaabaab\n' +
      'aabaaababbbabaababaabbbaaabaabbabaabaaba\n' +
      'bbbbabbbbbaaaabaaaabbbbbbbbabababaaabaaa\n' +
      'abaabbbbbabaaaaaaaaababa\n' +
      'abbbbaaaaaababbaabbbaaaaabbababaaabbbaaababaabab\n' +
      'babaaabaabaababbaaabbaab\n' +
      'abaabbbbbbabbabaabbababbabaaabbabaaaaaaa\n' +
      'bababbabbaabbbbbbbbbaaab\n' +
      'bbbaaaabbbaabaaabaaaaaaa\n' +
      'bbaabbbbbbbaaaababbbabaa\n' +
      'baabbbbabbbbbbbbbabaaaabbaabbbbbabbbaaaabaababbaaabbbabaaaabaaabbababbbbaaabbaba\n' +
      'abaabbbaaabbabaabbbbaababbaaaabbaaabaabb\n' +
      'abbbababababababbbbabaaa\n' +
      'bbbabbaaaaabaababaabbbaaabbaaabbabbbaaabbbaaabbb\n' +
      'abbbaaaababababbaabbabbb\n' +
      'baabbbaaaaababbaaabaabab\n' +
      'aaabbbbbaaabaabaabaabaaaabaabaaaaabbaaba\n' +
      'bababbbbbabbaaabaaabaabaaabbbabbaabaaababbababbbbbabbbaabbbabbbaababbbaabbbababb\n' +
      'abbabaaaabaabaabbaaaabbbaabbbbbb\n' +
      'abbaabbbaaaaabbbbababbaaaabbbaba\n' +
      'babbabbbbabababbbaabaaba\n' +
      'babbabbabaababaaaabbbbab\n' +
      'aababaabbbbbabbbbbbbabbaabbaaabaababbaab\n' +
      'bbbaabbaaabaaababbabbabaaaaabbaaabbbabbbaabbabbaabaaabab\n' +
      'ababababababaabbbaaaaaabbabbbbabbbbbbbababababababbbbaabaaababaaaabbbbbbaabababbbbbbbaba\n' +
      'aaabaaababbbaabaabaabaaabbabbbab\n' +
      'bbabbaabbbabbababbabbbbb\n' +
      'ababababaababaabbaaaabab\n' +
      'bababaaaaaababbabbbbbaba\n' +
      'babbbbabbbaaababbbbbabbbbabaabbaabaabaab\n' +
      'ababaabbbbbbbbabbbbbbaba\n' +
      'abbbaaaababbaabbbabbaaab\n' +
      'bbbbabbaabbbaababbabaabb\n' +
      'bbbbbabbbbbbabbbababaaab\n' +
      'babbabbbbbbabaabbbbaaaba\n' +
      'baababaabbbbabbbbababaab\n' +
      'aaaabaabaaaabbbbaaabbaab\n' +
      'bbbaaaabbabbababababaaab\n' +
      'abaaaababbbbaaaaababbaba\n' +
      'bbbbaaaaaaabbaaaaabaabab\n' +
      'babababbbabbabaaaaababbb\n' +
      'babbbaabbbaaabababbbbaba\n' +
      'aaabbabaababbaaabaaaaababababbaaabaabaabaaabbbbaaaaaaabbbabbaaba\n' +
      'abaaaabbabaabbbabaaaabbababaaabaababaabbaaaaabbbbabaaaba\n' +
      'bbbbaaaaabbbbbbbbaaabaab\n' +
      'bbaabaaaabbaaabbabbbbbaa\n' +
      'abbbbbaabababababbbbbaba\n' +
      'bbbabbbaabaababbbbbbabaa\n' +
      'bbbaaaabababbabbbbabbbba\n' +
      'abaababbbababaaabaaaaabb\n' +
      'bbabaaabbbaabbbbbaabaaaa\n' +
      'bbbaabaabbbbbbbabaabbaab\n' +
      'aabbabbbbbbbbabbbbaabaab\n' +
      'aabbabbbaaaaabbbbbbabbbbbaababbababaaabaaaababbabbaababbbaabbaba\n' +
      'abbbbbbbbababaaabaababab\n' +
      'bbbbbbbababbbbbbaaabaabaabbbbbba\n' +
      'abaabbabbbbaaabbaaaaaaaa\n' +
      'bbaaabababaaababbbbabbbabbababba\n' +
      'abbababbbabbabbbabaabaabbaababaaabbbabba\n' +
      'abbbbbbbbbbbbaabaabaabab\n' +
      'bababbabbbbbbaabbaabbbab\n' +
      'aaaaabaaaaaaaababaababbb\n' +
      'aabbabbbaabaabaaabaaabaa\n' +
      'abbabaaabbabaabaabbababaaaabbbaabaababbaabaaaaabaaaabababbbabbab\n' +
      'aaabbbbbbbabbaaaabaaaaab\n' +
      'aaaabbbbbbbbbaabbbabbbba\n' +
      'ababbabbabbbabbbbabaaabb\n' +
      'bbbaaabbaaababbbaababbbbabaabbabbbbbaaaaaaabababaaaabaabaaabbababaabababbabbbbabbbabaaba\n' +
      'ababababbaababaabbbaaaba\n' +
      'baaabbaabbbabbbaabbabbba\n' +
      'abaaabbbbbaaaabbabababbbbaaabaabbabaaabb\n' +
      'abaaaabbababbbbabaababab\n' +
      'baaaabbbaaabbabbaaaabaaa\n' +
      'baabbbaaaabbabaababbbaaa\n' +
      'bbbbbbbbbaaaaaabaaababbabbbbabbbabababaaaaaaabbaabbbbbabaabaabbbaaaaababaaabbabaaaaababa\n' +
      'bababaaabbaaababbbbbbbbabbbbbbababbbabaa\n' +
      'aababaaaabbabbabbababbabbaabaaba\n' +
      'bbbbabbabbbbababbababaaabbbbaabb\n' +
      'abbaaabbbaabbbbabbbabbab\n' +
      'baaaabbbbaababbabababbbb\n' +
      'aaaabbabbabbbbbbbbabbbaa\n' +
      'bababbababbbbbabbbbabbab\n' +
      'abbabbabbbbabbaaabbbabba\n' +
      'ababbabbbaabbbbbababaaab\n' +
      'abbabbabbbabaabaabbabbababaabbaabaaaaaaa\n' +
      'abbbababbbaabbabaabbbaaa\n' +
      'aaaababbabbbbaaaabbabbaa\n' +
      'bbabbaaaabbbbbbbbbbabbbbbaaaaabbbbbbbaba\n' +
      'baabbabbbbbaabbbaabbababbbababba\n' +
      'baabbbaaaaaabbbbaabbabba\n' +
      'aababaaabababaaabbaaabbabababbaaabbaabbbababaaab\n' +
      'bbaabbbbaaaabaababbbababbbbabbbaaababaaaabbaaaba\n' +
      'abaaaabaabababaaaabaabbb\n' +
      'aaabaabababbabbaababaaaa\n' +
      'babababbbbabaaababaaabbaaaaaaaaaaaaabbababbabaaabaaaabbabaaaaabbaaababbbaaaaabaaaaabbaab\n' +
      'ababaaaababbbaaababbbbaababbabaabaaaabaaabaabbaaabbbaababaaababbabbaabaa\n' +
      'abbbbbbbbaaabbababbbbbab\n' +
      'abbbbaaababbabaaabbbbbba\n' +
      'aaabbaaaabbaabbbbaaaaaaa\n' +
      'aaaabaabbbbbbbabbbbbbbbbbbbbbabbbbbababa\n' +
      'babbabaaababaabbbabbaabbaaababbb\n' +
      'baabbaaabaaababaabbabbbabababbaababaaabbbbbbaaaabbaabbbbabababababaabbbb\n' +
      'abbababbbabaaabaaaabbbbbbbaabbbbaabababbbbbbbabaaabbaaaa\n' +
      'bbaabbbaabbaabbbabaaaabbaabbbbaa\n' +
      'aaabbbbbbababbbaabbaaaba\n' +
      'abbbbaaababababbaaaabbba\n' +
      'abbaaabbabbababaaaaaabba\n' +
      'abbbabbbabaaaabbbabaabbbbbabbbbaabbbaabb\n' +
      'abbbababbabbbabbbbaaaabb\n' +
      'baabaaabbbbbabbbababbabbbbbababb\n' +
      'bbabaaabbbaabbabbbaabbbbbbbbabbbbbbbababbbaaabaa\n' +
      'babbabaaaaababbbbaaababaaaaabbbbaabbbaababbaabaabbbaabab\n' +
      'bbbbababaabaaabaabaaaaabababbbbbbabbaaaaaabaabaa\n' +
      'bbbabbbaaaabbbaabbaaaabaaabbaaba\n' +
      'bbabaabaabaabbbbaaabbaba\n' +
      'bbaababaaaaabbabbbabbbaa\n' +
      'bbbbbbbababababaaabbbbab\n' +
      'abaabaaaaaabbabbbaaababb\n' +
      'bbaaaabababaaaaabaaaaabb\n' +
      'bbbaabaaabaabaaabbbbbaabbbaaababaaaaabbbabbabbbaaababbaa\n' +
      'baabbbbbabbbaaaaaaaaabba\n' +
      'aaaaaabaaabaabbaabbabbaa\n' +
      'abaaabbaabbaabbbbbbabbbabbaaabababaabbaaabbbaaabbaabbbab\n' +
      'abaabbababbababbabbbbaaaababbabbabbabbabbaababbb\n' +
      'abababbababbbaabbbbababa\n' +
      'babaabbbbbaabaaabaabaaba\n' +
      'bbaaabbbbbbababbaaabababaabbaaabaabaabbb\n' +
      'abbaaabbbabbaabbabbaabaa\n' +
      'abababbaaabaabbaabbbbaba\n' +
      'abaabaaababaabbbbbbbbbaaaabbaaba\n' +
      'abaababbabbabaaaaabbaabb\n' +
      'baababaaabbabaaaabababaabbaaabababaababaaabbabab\n' +
      'aaaaabaababbaababaabbaba\n' +
      'aaabbbbbbbbbbbaaabbbbabb\n' +
      'aaaabaabbbbbbabbbbbbbaba\n' +
      'bbbbbabbabbbbaaaababaaba\n' +
      'bbabbaabbabbaababbbaabbb\n' +
      'bbabaaabbabbabbbaabaabab\n' +
      'babbbaababaabbbbbabbbbbbbaaaababbbaaaaab\n' +
      'babbabbbababababbbbabaaa\n' +
      'aaaaaabaaababaaababbaababababbaabaaaabbaabbbbaba\n' +
      'aababaabbbabbababbbbabaa\n' +
      'babbaabbbabbabaaabbabbaa\n' +
      'babbbbabbbaabaabbaaababbbbbbbbbaabbbbbbbaaaabbbb\n' +
      'aabbabaaaababbbbbabbaababbbabaaa\n' +
      'abaabbababababbababaabab\n' +
      'baababaaaaabbbbaaaabaabb\n' +
      'bbbabbaabbabaabaabaaabaa\n' +
      'bbbabbbbbbbbbbabbbbbaaab\n' +
      'baabbbbababaaabaaaabaaaabbbaabab\n' +
      'aabaaababbabaaabbaabbbab\n' +
      'aaabbabbbbabaaabbababaaababbbbaabbaaababbabbbbbbabbbabaabbaaaaab\n' +
      'abaababbbabaaabababaabba\n' +
      'bbabbbbbbbbabaaaabaabababaababbbaabbaaabbaaababbbbbabbba\n' +
      'baabbabbbabbbbababbabbababbabababbaabbabaaaaabaaababaabaabababab\n' +
      'baaaaaababaaabbbaababbaa\n' +
      'aaabbbbaabababaaaaababab\n' +
      'baaaabbbbabaabbbbaaaabba\n' +
      'abbbabababbbbaaabbabbabaaabaabbbbbababba\n' +
      'bbaabbabbbbaaabbabababaababbbaabaabbbbaa\n' +
      'bababbabaabbbaabbbbbbaba\n' +
      'aaaabbbbbbbbbbabaabbbaba\n' +
      'baaabaaabbabbaaabababbbbbbbbababbbabaaabaabaabbabbbbbbababbababb\n' +
      'baaabbaaabaababbaabababaaaaababbbaaabaab\n' +
      'aababaabbbaaababbbbaabba\n' +
      'bbbabbbbbabbbaabbbbbbbabaaabbabaabbbbbba\n' +
      'ababababaabbabbbbbaabbbbaabaabbb\n' +
      'aabaaabaaaaabaabbabaaabb\n' +
      'bbbbaaaaababababbabbbbbbbabaabbbabbaaaba\n' +
      'bbaaaababbbabaabaababbba\n' +
      'bbaabbabbabaaaaabababbaababbbbbb\n' +
      'baaaaababaabababaaabaabbbabaabbbbabaabbbbbbbbaab\n' +
      'abbabaaabbbbbabbbbbaaaba\n' +
      'babbbabbabaabbbaaaababbb\n' +
      'abababaabababbbaabbaabba\n' +
      'babbabbbabbbaaaabbaabbaa\n' +
      'babbbbabbaababbaababbaba\n' +
      'bbbbaaaabbbbabbbbbaaabaa\n' +
      'bbababbbbabbbbabaaaabaabaabbbbbbaaaabbaa\n' +
      'bbbbbbabababbabbaaabbbaabbbaabbabaaaabab\n' +
      'aaabaaaaabababbabaaabaaa\n' +
      'ababaabbaabaabbaababbbaa\n' +
      'babababaabaabbaabbaaabaa\n' +
      'bbaaaababaabbbaaaabbbaabaababbabbbbbbaababababababbabaab\n' +
      'bbababbbaabaabbabbaabbbbaaabbabbbabbbaaa\n' +
      'aaaababbabbababbaababaaabbabbbab\n' +
      'bbabbaaaaabaaaabbbbabaaa\n' +
      'aaaaabaaaaabbbaaabbabbba\n' +
      'abbbaababbbbbbabbbaabababbbbaaab\n' +
      'babbabaaababbabbabbaaaab\n' +
      'babaaabaaaaaaabaabbabbbb\n' +
      'bababbaabbababbbaabaaababbaabbabaababbbbaabbbaabbbbababb\n' +
      'aaaaaaabbbbabbaaabbbabab\n' +
      'bbabaabaaabbabbbbaaababa\n' +
      'abbabbabbbbaabaaaaaababa\n' +
      'bbbabbbbabbbbaaabaaabbbb\n' +
      'babbbabbbbbbabbbaabbbbaa\n' +
      'baaaabbbaaababbaababaaaa\n' +
      'aaaaaabababbbbabbababaab\n' +
      'bbaabbbbabbababababbaabbbbbbabaa\n' +
      'baabaaabbbbaaabbaabbbbba\n' +
      'bbabaababbaabbbbbbbabbab\n' +
      'bababbabaababbabbaabbabb\n' +
      'aaabbabbaababaabababaaaa\n' +
      'baababbaabaabbbbabbbaababbababbbbaabbababbbababaabbaaaba\n' +
      'aababaaaaaabaaabaaaabaabaabaabbbbbbababa\n' +
      'abbbbaaaaaabbbbaabaabbbababaaabbababaaaa\n' +
      'abbbabbbaaaababbbbbbabaa\n' +
      'bbabbaaababaabaaaaabaabb\n' +
      'aabaaababbabbaaabbaabbbbaabaaaabbaaabbabbaaaaababaababbbbbaaabbb\n' +
      'aaabbbbabaaaabbbbbababba\n' +
      'aaaabbbababbabaaabbabbbbaaabbaaaabbababbbaabbbab\n' +
      'aaabbbaaababbbbabbbbaaab\n' +
      'aaaababbaaabbabbaababbba\n' +
      'babbbbbbbaababaabbbbbaba\n' +
      'abbbaaaababbbabbbabbbaaa\n' +
      'aabbbaabababababbbbbbbaabbbbbabbbaabbabb\n' +
      'aaabbbaabaaabbabaababbba\n' +
      'abbbaabaaaabbbbabbbbbbababbaaaba\n' +
      'bbbabaabbabbbabbbabababb\n' +
      'aaaaaaabbbababbbbbaaaaab\n' +
      'abbabbbbbaabbbbbaaababbbbabbbbabbaabbabb\n' +
      'aabaabbabbbbaabaaaaaaaabbababababaaabbaabbaababbbbbbbaaabaaaabbabbbbbaba\n' +
      'aaaabaababaaaaaabaaaabba\n' +
      'bbbaaabbababababbbbbbaaa\n' +
      'abbbabababaabbbabbbbaababbbaaabbbbbbbbbaaabaaabb\n' +
      'bbaaaabaababaabbaaabaabb\n' +
      'aaaabbabaaabbabbbbbbabbaabababaaabaabbabbaabbaba\n' +
      'bbababbbbaaaabbbababaaaa\n' +
      'bbababbbabaaaabababaabab\n' +
      'aababababaababbaabbaaaba\n' +
      'baabbbaaabaabbbbaabbabbbabaabbbaaaabbaab\n' +
      'bbbbbaabbabbabbabbbabbbbabbbbbaaaaaaabba\n' +
      'baaaabbbbbbabbaabbbaabab\n' +
      'abbbabbbbbbbbabbbabababaabbbbbbbbababaaababbaaab\n' +
      'abbaabaaaabbabaabbbaaabaabbbbaabaabbaababbaababbbaaabaaaaabbaaaa\n' +
      'baaabbabababbbabbaabaaaa\n' +
      'aaabaabaaababbbbababbaba\n' +
      'bbaabbbaaaaababbababaaaa\n' +
      'abbbbaaabaaaaaabbbbaabab\n' +
      'abbbbbaaababbbababbaabaa\n' +
      'ababbabbbbbabbbbbbabbabb\n' +
      'bbbbbbaaaaaaaabaaaabbaab\n' +
      'aababbababaaababbbbbaaaabbbaabbaababbaba\n' +
      'aaababbaabbabababbbababa\n' +
      'abbabbabaaaaaabaabababaababbbaabbbabbaab\n' +
      'aabaaababbabaaabbaaabaab\n' +
      'aaabbbbaabbbbbaaabaaabaa\n' +
      'aaabaaaababbbaabaabbaaba\n' +
      'abaaaabaaabbbaabaabaabab\n' +
      'babaabbaabbbbbbbabbabaaababaaabbbbbababa\n' +
      'babbaababbbaaaababbbabbbabbaaabaabbaabaa\n' +
      'abaabbbabbbbaaaabbbbbbbbbbbabbaaabbaaabbaabaababbaabbbab\n' +
      'bbaaaaaaaabbabbbabaaaabbaaaabbaa\n' +
      'bbaabbbbbbaababbaaaaaaaabbbaaabaaaababbbbbbaaaababbbabbababaaaabbbbaabbaabaabbbaabbaaaaa\n' +
      'bbabaababbaabaaababbbaaa\n' +
      'aaaababbaaabaaabaaaabbba\n' +
      'aaaabaabbabbabbabbaabaaaabbaabbbaaaaabba\n' +
      'bbaabbbbabaababbbabbaababbbbbbaabaabaaababaabababbbababb\n' +
      'aaaaabbbaabbabbbabaaabbaababbbbbaaabbbbbbbabaaabbabaaaabbbbbaabb\n' +
      'bbbbaababababbaaababbbabaaaabbaa\n' +
      'abbbbaaaaababbabbbababaaaaabbbabbbaabaabbaaabaab\n' +
      'abaabaaaaabaabbaaaabbaaaabbbbabb\n' +
      'bbabaabaaaaaaaabbbbababa\n' +
      'bbbbbabbabababaaabbaaaab\n' +
      'aaabbbabbaabababbbabbbbaabbbaaaaaaabbbab\n' +
      'abbababaabaabbbaaaaabaaa\n' +
      'bbbabbaaaabbbaabaaabaaabbbbbabaa\n' +
      'abbababaabaaababbbbaaaba\n' +
      'babaabbaabaaabbbbabbabbaaabbbaaa\n' +
      'aaabaabaabaaababbabbbbbbbaabbabbabbabbbbbbaabaaabbaababbaaaaaaaaaaaaaabbbbbabaaa\n' +
      'babbbabbabbbaaaaabbaabbabbbabbabbbababbaaabaaaaa\n' +
      'bbbbbbababbaaabbbaaaabab\n' +
      'aaaabbbbbbaabbabababbaba\n' +
      'abaababbbabbbbabbabbaaab\n' +
      'ababbaaaabbbbbaaaaabbabbbbaabbabbaababbb\n' +
      'aaabbbbababaaababaaabaab\n' +
      'bbbbbbbabbaabaaabaaaabbbbabaabbbaaabaabbbabbaaab\n' +
      'bbababbbbabbbaababaaaaab\n' +
      'baaaabbbbaabbbaabaaabbbb\n' +
      'abaaabbababaaaaabbababba\n' +
      'aaabbbaaabaabbbbbaabaaba\n' +
      'baabababbaababbbbaababbbaabbbbaa\n' +
      'aabababaaaaaaabaaaababab\n' +
      'aabbababaabbbbbaabbaabaabbbbbbbaaaabaababaabababbbbabaab\n'

  const solution = solvePart1(input)

  expect(solution).toEqual(2)
})

test('solves part 2', () => {
  const input = '58: 127 99 | 105 36\n' +
      '56: 71 99 | 102 36\n' +
      '116: 36 | 99\n' +
      '42: 19 36 | 68 99\n' +
      '67: 36 71 | 99 73\n' +
      '117: 81 99 | 80 36\n' +
      '77: 99 37 | 36 83\n' +
      '106: 27 99 | 32 36\n' +
      '73: 36 99 | 99 99\n' +
      '126: 15 36 | 73 99\n' +
      '133: 99 99 | 36 116\n' +
      '92: 99 51 | 36 14\n' +
      '61: 99 21 | 36 6\n' +
      '6: 54 116\n' +
      '33: 36 103 | 99 9\n' +
      '131: 54 99 | 15 36\n' +
      '81: 36 38 | 99 78\n' +
      '93: 99 100 | 36 87\n' +
      '1: 113 99 | 129 36\n' +
      '36: "b"\n' +
      '70: 99 130 | 36 122\n' +
      '76: 99 4 | 36 44\n' +
      '79: 65 99 | 48 36\n' +
      '99: "a"\n' +
      '108: 118 99 | 96 36\n' +
      '15: 36 36\n' +
      '2: 99 102 | 36 27\n' +
      '103: 109 99 | 136 36\n' +
      '9: 23 99 | 63 36\n' +
      '12: 15 99 | 123 36\n' +
      '137: 36 54 | 99 20\n' +
      '13: 36 30 | 99 70\n' +
      '7: 99 32 | 36 102\n' +
      '94: 18 36 | 59 99\n' +
      '71: 36 99\n' +
      '3: 99 104 | 36 62\n' +
      '4: 72 99 | 114 36\n' +
      '32: 36 36 | 99 36\n' +
      '21: 27 99 | 122 36\n' +
      '52: 99 20 | 36 73\n' +
      '135: 99 116 | 36 99\n' +
      '31: 95 99 | 89 36\n' +
      '24: 99 107 | 36 125\n' +
      '19: 36 77 | 99 28\n' +
      '112: 15 36 | 15 99\n' +
      '89: 99 50 | 36 111\n' +
      '23: 99 34 | 36 73\n' +
      '69: 36 54 | 99 73\n' +
      '85: 12 99 | 25 36\n' +
      '53: 36 54\n' +
      '95: 36 76 | 99 117\n' +
      '124: 106 99 | 22 36\n' +
      '10: 102 99 | 122 36\n' +
      '107: 99 133 | 36 34\n' +
      '129: 54 99 | 71 36\n' +
      '16: 36 130 | 99 27\n' +
      '86: 36 122 | 99 102\n' +
      '45: 97 36 | 41 99\n' +
      '102: 99 99 | 116 36\n' +
      '25: 32 36 | 133 99\n' +
      '87: 99 52 | 36 115\n' +
      '119: 91 99 | 101 36\n' +
      '34: 99 99\n' +
      '121: 36 91 | 99 52\n' +
      '29: 102 36 | 27 99\n' +
      '20: 116 116\n' +
      '47: 36 36 | 99 99\n' +
      '49: 123 99\n' +
      '38: 99 98 | 36 86\n' +
      '123: 36 36 | 36 99\n' +
      '48: 36 123 | 99 54\n' +
      '51: 36 54 | 99 102\n' +
      '98: 73 99 | 47 36\n' +
      '26: 20 99 | 34 36\n' +
      '68: 36 88 | 99 108\n' +
      '111: 75 36 | 5 99\n' +
      '54: 99 36 | 99 99\n' +
      '109: 47 36 | 20 99\n' +
      '0: 8 11\n' +
      '17: 36 57 | 99 120\n' +
      '66: 99 132 | 36 35\n' +
      '62: 36 130 | 99 32\n' +
      '59: 36 130 | 99 122\n' +
      '44: 99 60 | 36 92\n' +
      '122: 99 36\n' +
      '74: 126 99 | 16 36\n' +
      '37: 82 99 | 85 36\n' +
      '65: 130 36 | 27 99\n' +
      '80: 58 36 | 43 99\n' +
      '55: 99 130 | 36 20\n' +
      '118: 66 36 | 3 99\n' +
      '5: 24 36 | 124 99\n' +
      '14: 36 54 | 99 71\n' +
      '11: 42 31\n' +
      '96: 40 99 | 61 36\n' +
      '22: 36 34 | 99 135\n' +
      '97: 36 27 | 99 20\n' +
      '43: 99 128 | 36 29\n' +
      '101: 73 36 | 133 99\n' +
      '91: 133 36 | 54 99\n' +
      '114: 36 112 | 99 52\n' +
      '83: 79 99 | 74 36\n' +
      '28: 134 99 | 39 36\n' +
      '72: 99 26 | 36 49\n' +
      '78: 36 25 | 99 90\n' +
      '30: 102 99 | 133 36\n' +
      '27: 99 36 | 36 99\n' +
      '35: 99 27 | 36 15\n' +
      '84: 2 36 | 64 99\n' +
      '75: 1 36 | 119 99\n' +
      '115: 130 36 | 71 99\n' +
      '39: 99 84 | 36 121\n' +
      '40: 99 69 | 36 110\n' +
      '63: 36 32\n' +
      '88: 17 99 | 93 36\n' +
      '120: 53 99 | 55 36\n' +
      '105: 99 133 | 36 123\n' +
      '127: 36 123 | 99 47\n' +
      '134: 99 46 | 36 45\n' +
      '50: 36 33 | 99 138\n' +
      '82: 131 99 | 59 36\n' +
      '104: 122 99 | 27 36\n' +
      '8: 42\n' +
      '113: 34 36 | 123 99\n' +
      '125: 99 123 | 36 54\n' +
      '64: 54 36\n' +
      '46: 36 10 | 99 107\n' +
      '130: 99 36 | 36 116\n' +
      '18: 36 54 | 99 34\n' +
      '110: 99 34 | 36 27\n' +
      '136: 99 15 | 36 73\n' +
      '132: 122 36 | 133 99\n' +
      '128: 15 99 | 102 36\n' +
      '57: 36 56 | 99 67\n' +
      '100: 99 63 | 36 137\n' +
      '60: 7 99 | 63 36\n' +
      '90: 36 122 | 99 133\n' +
      '41: 34 36\n' +
      '138: 99 94 | 36 13\n' +
      '\n' +
      'babbbbababbbababaabaabab\n' +
      'aaababbaababbabbaababbabbaaabaab\n' +
      'abaaaabbaabaaabaababbbbaabbaaaba\n' +
      'abbaabbbbbaaaaaabaaaaaaa\n' +
      'aabaaaababababababaaababbabbbaaa\n' +
      'aaabaaabbbabbaaabbaababb\n' +
      'aaabbabbabbbaababbbabbab\n' +
      'bbbabbbbaaabbabbbaabbaab\n' +
      'babbbaabbaaabbaaaabaaaabaabbbaabaabbbaaaaabbbbbb\n' +
      'abbaaabbabbabaaaaaaaaabb\n' +
      'bbbabbaaabaabbbbaaabbabbaabbbbbbbaababab\n' +
      'ababbbabbabbababbaabbbbbbbbabaabaabbbbbb\n' +
      'bbbbbbbbaabababababbbbba\n' +
      'aaabbbbbabbababbabbaaaaa\n' +
      'aaabbabbbaabbbaabaababbabbbbbbabaabaaabaababaaba\n' +
      'abaaaabaabaaababaabbbbbb\n' +
      'bbbbbabbaababbbbaabbaaba\n' +
      'bbbaabaabaabbbbaabbabaaabababaaaaabbbabaababaababbbbabaa\n' +
      'abaaaabbbbaabbbabaababab\n' +
      'abababbabbaabaaaabbbbaba\n' +
      'babbbabbbbabbabaaaababbb\n' +
      'aabbaabaaabbbaaabbabaaaa\n' +
      'abbabaaababbbbababbbbaaabbabbbaa\n' +
      'babababaabbaabbbbabbbbabbaaabaabbbabbbaa\n' +
      'abababababbbbbbbaaabaabb\n' +
      'bbbbbbaabaababaabbbaabba\n' +
      'bbabaababbababbbbaabbaba\n' +
      'aaaabaabaaababbbabaabbabbaaaaaaaaaaaabba\n' +
      'babaabaaabbababbaabbbbaa\n' +
      'aababbbbabaabbabbbbabbbaababbbababbaaaabbabaaaab\n' +
      'babaabbbbababababbababab\n' +
      'babababbbababbaaabbbaabaaaaabbbbaaaabaabaaabaaabaabaabbbbaaaaaaabaababab\n' +
      'ababbababbbbaaabbabababbabaaaabbbbaabbbbaaaaabbabbaaaabbbbbbbbbabbbaaabbaababbbaaaabbaaaabbabbba\n' +
      'aaabaaabaabababaabbababaabbbaabaaaabaabb\n' +
      'bbbbbbaabbaaabbabbaaababaaaababbbaaabbba\n' +
      'bbbbbaaaaabaabbaabbabaabaabbbbbababbaababaaabbabaabbabab\n' +
      'bbaaabbbbaabbbabbbbaaaabbabbbabaaaaaabaabbaabbbbbbbabbab\n' +
      'baabaaabbbbabbbabbbaaabbaabbbbbb\n' +
      'bbbbaabaaabbbaababbbbaaaabbbbbab\n' +
      'bbbabbbabbbaaabbbbbaabbb\n' +
      'abbbaababaababaabaaaaaaa\n' +
      'bbbbbabbbabbaabaabaababa\n' +
      'aababaaabababbabbabbbaaa\n' +
      'aabbabbbbbaaaabbbbaabbbbababbbbabbbaaaaa\n' +
      'bbabaaabbabbbbbbbbbbaabb\n' +
      'babbababaaabbabbbaaabbbb\n' +
      'abaaabbaabaaabbaaabbbbba\n' +
      'baababbbabbabbaabbababbbbaabaabaabababaabaabbaba\n' +
      'bbaabbbabaaabbaabaababab\n' +
      'bbbbbabbabbababbbbaabbbb\n' +
      'bbbbaaaaabbababaababbbaa\n' +
      'bababababaababaabaababbaabaaaaaa\n' +
      'bbbbaaaaaababaabbbbaaaaa\n' +
      'aababaabbaaaabbbabbabbbb\n' +
      'abbbababaaabbbbaabbbbbbbaabaaaaa\n' +
      'aaabaaaaaaabbbaabbbabbabbaaaabbbabbabbabaabbabaababaabba\n' +
      'bbaaabbababaaaaababaaabb\n' +
      'bbbabbbbbbaabbbbbabbbbbbbabbbaababaabbbbaabaaaaa\n' +
      'bbbbabbbabababbaaaabbaab\n' +
      'abaabbabaababaabbaaaabba\n' +
      'ababababbbbbbabbaaaaabaaabbbbbbbbababbbbaaabbbab\n' +
      'bbbbbbbabbbbbaabbbbabbaaaaaabbababbaabbbabbaaaab\n' +
      'abbbaababbaabaaaaabbbbaa\n' +
      'bbaaaabaaaaaaabaabababbb\n' +
      'babbabbbbbbbbbbbaabbbaaa\n' +
      'abababbaaabaabbaaaabbabbaaabbbaabaaaabaa\n' +
      'babaabaaabbabbabababbaab\n' +
      'abbababaabaaabbbaaabaaaaaaaaabbbbbbaabbb\n' +
      'babbabbaabbababbbaabbaba\n' +
      'babbabababababaaabbbaababaabbbbbaababbabbbaaaabaaaaabaaaabbbaaab\n' +
      'babaaaaaaaabbaaaabaaaaaa\n' +
      'bababaaabbbbbbbabaaababa\n' +
      'bbaababaaaabbbbaaabaabaabbaaabaa\n' +
      'abaaabbaabbabbabaababbaa\n' +
      'abbaaabbbaabbbaabaabbbab\n' +
      'bbbaaaabbbabbaabaabaabab\n' +
      'babbbbaaabaaabbabaaabbaaabaaabaa\n' +
      'bbbbbbaaaabababaababbbbb\n' +
      'abaabbaaabbbbbbbbabbbbba\n' +
      'abaabbbbbabbabbbbbbabaaa\n' +
      'baaaabbbabbbbbbbaaaabbba\n' +
      'aabababaabaabaaaabbabbba\n' +
      'bbaaabbababbbbabbbbbaabaaaaabbabaaabbaaaabbbbabbabbbbaababaaaaab\n' +
      'abbbbaabababaaaabbbaaaabaababaabbbbabbbbaaaaaaaabaaababbaaababaa\n' +
      'aabbabaaaabaaababaabbbab\n' +
      'babbabbbbbaabaaaaaabaaaababbbbbbaabbabba\n' +
      'abaaaabbaaabaabababbbaaa\n' +
      'aaaababbbbbaaaabaabbbaaa\n' +
      'bbbabaabbbbbabbaabaaabaa\n' +
      'ababbabbaababaaaabaaaabbbbaaabbbbabaabab\n' +
      'babbbbabaaabaaabaaaaabaaaabbabab\n' +
      'aababbabbabaabbbbaaabaab\n' +
      'aabaaababbbabaababaabbbaaabaabbabaabaaba\n' +
      'bbbbabbbbbaaaabaaaabbbbbbbbabababaaabaaa\n' +
      'abaabbbbbabaaaaaaaaababa\n' +
      'abbbbaaaaaababbaabbbaaaaabbababaaabbbaaababaabab\n' +
      'babaaabaabaababbaaabbaab\n' +
      'abaabbbbbbabbabaabbababbabaaabbabaaaaaaa\n' +
      'bababbabbaabbbbbbbbbaaab\n' +
      'bbbaaaabbbaabaaabaaaaaaa\n' +
      'bbaabbbbbbbaaaababbbabaa\n' +
      'baabbbbabbbbbbbbbabaaaabbaabbbbbabbbaaaabaababbaaabbbabaaaabaaabbababbbbaaabbaba\n' +
      'abaabbbaaabbabaabbbbaababbaaaabbaaabaabb\n' +
      'abbbababababababbbbabaaa\n' +
      'bbbabbaaaaabaababaabbbaaabbaaabbabbbaaabbbaaabbb\n' +
      'abbbaaaababababbaabbabbb\n' +
      'baabbbaaaaababbaaabaabab\n' +
      'aaabbbbbaaabaabaabaabaaaabaabaaaaabbaaba\n' +
      'bababbbbbabbaaabaaabaabaaabbbabbaabaaababbababbbbbabbbaabbbabbbaababbbaabbbababb\n' +
      'abbabaaaabaabaabbaaaabbbaabbbbbb\n' +
      'abbaabbbaaaaabbbbababbaaaabbbaba\n' +
      'babbabbbbabababbbaabaaba\n' +
      'babbabbabaababaaaabbbbab\n' +
      'aababaabbbbbabbbbbbbabbaabbaaabaababbaab\n' +
      'bbbaabbaaabaaababbabbabaaaaabbaaabbbabbbaabbabbaabaaabab\n' +
      'ababababababaabbbaaaaaabbabbbbabbbbbbbababababababbbbaabaaababaaaabbbbbbaabababbbbbbbaba\n' +
      'aaabaaababbbaabaabaabaaabbabbbab\n' +
      'bbabbaabbbabbababbabbbbb\n' +
      'ababababaababaabbaaaabab\n' +
      'bababaaaaaababbabbbbbaba\n' +
      'babbbbabbbaaababbbbbabbbbabaabbaabaabaab\n' +
      'ababaabbbbbbbbabbbbbbaba\n' +
      'abbbaaaababbaabbbabbaaab\n' +
      'bbbbabbaabbbaababbabaabb\n' +
      'bbbbbabbbbbbabbbababaaab\n' +
      'babbabbbbbbabaabbbbaaaba\n' +
      'baababaabbbbabbbbababaab\n' +
      'aaaabaabaaaabbbbaaabbaab\n' +
      'bbbaaaabbabbababababaaab\n' +
      'abaaaababbbbaaaaababbaba\n' +
      'bbbbaaaaaaabbaaaaabaabab\n' +
      'babababbbabbabaaaaababbb\n' +
      'babbbaabbbaaabababbbbaba\n' +
      'aaabbabaababbaaabaaaaababababbaaabaabaabaaabbbbaaaaaaabbbabbaaba\n' +
      'abaaaabbabaabbbabaaaabbababaaabaababaabbaaaaabbbbabaaaba\n' +
      'bbbbaaaaabbbbbbbbaaabaab\n' +
      'bbaabaaaabbaaabbabbbbbaa\n' +
      'abbbbbaabababababbbbbaba\n' +
      'bbbabbbaabaababbbbbbabaa\n' +
      'bbbaaaabababbabbbbabbbba\n' +
      'abaababbbababaaabaaaaabb\n' +
      'bbabaaabbbaabbbbbaabaaaa\n' +
      'bbbaabaabbbbbbbabaabbaab\n' +
      'aabbabbbbbbbbabbbbaabaab\n' +
      'aabbabbbaaaaabbbbbbabbbbbaababbababaaabaaaababbabbaababbbaabbaba\n' +
      'abbbbbbbbababaaabaababab\n' +
      'bbbbbbbababbbbbbaaabaabaabbbbbba\n' +
      'abaabbabbbbaaabbaaaaaaaa\n' +
      'bbaaabababaaababbbbabbbabbababba\n' +
      'abbababbbabbabbbabaabaabbaababaaabbbabba\n' +
      'abbbbbbbbbbbbaabaabaabab\n' +
      'bababbabbbbbbaabbaabbbab\n' +
      'aaaaabaaaaaaaababaababbb\n' +
      'aabbabbbaabaabaaabaaabaa\n' +
      'abbabaaabbabaabaabbababaaaabbbaabaababbaabaaaaabaaaabababbbabbab\n' +
      'aaabbbbbbbabbaaaabaaaaab\n' +
      'aaaabbbbbbbbbaabbbabbbba\n' +
      'ababbabbabbbabbbbabaaabb\n' +
      'bbbaaabbaaababbbaababbbbabaabbabbbbbaaaaaaabababaaaabaabaaabbababaabababbabbbbabbbabaaba\n' +
      'ababababbaababaabbbaaaba\n' +
      'baaabbaabbbabbbaabbabbba\n' +
      'abaaabbbbbaaaabbabababbbbaaabaabbabaaabb\n' +
      'abaaaabbababbbbabaababab\n' +
      'baaaabbbaaabbabbaaaabaaa\n' +
      'baabbbaaaabbabaababbbaaa\n' +
      'bbbbbbbbbaaaaaabaaababbabbbbabbbabababaaaaaaabbaabbbbbabaabaabbbaaaaababaaabbabaaaaababa\n' +
      'bababaaabbaaababbbbbbbbabbbbbbababbbabaa\n' +
      'aababaaaabbabbabbababbabbaabaaba\n' +
      'bbbbabbabbbbababbababaaabbbbaabb\n' +
      'abbaaabbbaabbbbabbbabbab\n' +
      'baaaabbbbaababbabababbbb\n' +
      'aaaabbabbabbbbbbbbabbbaa\n' +
      'bababbababbbbbabbbbabbab\n' +
      'abbabbabbbbabbaaabbbabba\n' +
      'ababbabbbaabbbbbababaaab\n' +
      'abbabbabbbabaabaabbabbababaabbaabaaaaaaa\n' +
      'abbbababbbaabbabaabbbaaa\n' +
      'aaaababbabbbbaaaabbabbaa\n' +
      'bbabbaaaabbbbbbbbbbabbbbbaaaaabbbbbbbaba\n' +
      'baabbabbbbbaabbbaabbababbbababba\n' +
      'baabbbaaaaaabbbbaabbabba\n' +
      'aababaaabababaaabbaaabbabababbaaabbaabbbababaaab\n' +
      'bbaabbbbaaaabaababbbababbbbabbbaaababaaaabbaaaba\n' +
      'abaaaabaabababaaaabaabbb\n' +
      'aaabaabababbabbaababaaaa\n' +
      'babababbbbabaaababaaabbaaaaaaaaaaaaabbababbabaaabaaaabbabaaaaabbaaababbbaaaaabaaaaabbaab\n' +
      'ababaaaababbbaaababbbbaababbabaabaaaabaaabaabbaaabbbaababaaababbabbaabaa\n' +
      'abbbbbbbbaaabbababbbbbab\n' +
      'abbbbaaababbabaaabbbbbba\n' +
      'aaabbaaaabbaabbbbaaaaaaa\n' +
      'aaaabaabbbbbbbabbbbbbbbbbbbbbabbbbbababa\n' +
      'babbabaaababaabbbabbaabbaaababbb\n' +
      'baabbaaabaaababaabbabbbabababbaababaaabbbbbbaaaabbaabbbbabababababaabbbb\n' +
      'abbababbbabaaabaaaabbbbbbbaabbbbaabababbbbbbbabaaabbaaaa\n' +
      'bbaabbbaabbaabbbabaaaabbaabbbbaa\n' +
      'aaabbbbbbababbbaabbaaaba\n' +
      'abbbbaaababababbaaaabbba\n' +
      'abbaaabbabbababaaaaaabba\n' +
      'abbbabbbabaaaabbbabaabbbbbabbbbaabbbaabb\n' +
      'abbbababbabbbabbbbaaaabb\n' +
      'baabaaabbbbbabbbababbabbbbbababb\n' +
      'bbabaaabbbaabbabbbaabbbbbbbbabbbbbbbababbbaaabaa\n' +
      'babbabaaaaababbbbaaababaaaaabbbbaabbbaababbaabaabbbaabab\n' +
      'bbbbababaabaaabaabaaaaabababbbbbbabbaaaaaabaabaa\n' +
      'bbbabbbaaaabbbaabbaaaabaaabbaaba\n' +
      'bbabaabaabaabbbbaaabbaba\n' +
      'bbaababaaaaabbabbbabbbaa\n' +
      'bbbbbbbababababaaabbbbab\n' +
      'abaabaaaaaabbabbbaaababb\n' +
      'bbaaaabababaaaaabaaaaabb\n' +
      'bbbaabaaabaabaaabbbbbaabbbaaababaaaaabbbabbabbbaaababbaa\n' +
      'baabbbbbabbbaaaaaaaaabba\n' +
      'aaaaaabaaabaabbaabbabbaa\n' +
      'abaaabbaabbaabbbbbbabbbabbaaabababaabbaaabbbaaabbaabbbab\n' +
      'abaabbababbababbabbbbaaaababbabbabbabbabbaababbb\n' +
      'abababbababbbaabbbbababa\n' +
      'babaabbbbbaabaaabaabaaba\n' +
      'bbaaabbbbbbababbaaabababaabbaaabaabaabbb\n' +
      'abbaaabbbabbaabbabbaabaa\n' +
      'abababbaaabaabbaabbbbaba\n' +
      'abaabaaababaabbbbbbbbbaaaabbaaba\n' +
      'abaababbabbabaaaaabbaabb\n' +
      'baababaaabbabaaaabababaabbaaabababaababaaabbabab\n' +
      'aaaaabaababbaababaabbaba\n' +
      'aaabbbbbbbbbbbaaabbbbabb\n' +
      'aaaabaabbbbbbabbbbbbbaba\n' +
      'bbbbbabbabbbbaaaababaaba\n' +
      'bbabbaabbabbaababbbaabbb\n' +
      'bbabaaabbabbabbbaabaabab\n' +
      'babbbaababaabbbbbabbbbbbbaaaababbbaaaaab\n' +
      'babbabbbababababbbbabaaa\n' +
      'aaaaaabaaababaaababbaababababbaabaaaabbaabbbbaba\n' +
      'aababaabbbabbababbbbabaa\n' +
      'babbaabbbabbabaaabbabbaa\n' +
      'babbbbabbbaabaabbaaababbbbbbbbbaabbbbbbbaaaabbbb\n' +
      'aabbabaaaababbbbbabbaababbbabaaa\n' +
      'abaabbababababbababaabab\n' +
      'baababaaaaabbbbaaaabaabb\n' +
      'bbbabbaabbabaabaabaaabaa\n' +
      'bbbabbbbbbbbbbabbbbbaaab\n' +
      'baabbbbababaaabaaaabaaaabbbaabab\n' +
      'aabaaababbabaaabbaabbbab\n' +
      'aaabbabbbbabaaabbababaaababbbbaabbaaababbabbbbbbabbbabaabbaaaaab\n' +
      'abaababbbabaaabababaabba\n' +
      'bbabbbbbbbbabaaaabaabababaababbbaabbaaabbaaababbbbbabbba\n' +
      'baabbabbbabbbbababbabbababbabababbaabbabaaaaabaaababaabaabababab\n' +
      'baaaaaababaaabbbaababbaa\n' +
      'aaabbbbaabababaaaaababab\n' +
      'baaaabbbbabaabbbbaaaabba\n' +
      'abbbabababbbbaaabbabbabaaabaabbbbbababba\n' +
      'bbaabbabbbbaaabbabababaababbbaabaabbbbaa\n' +
      'bababbabaabbbaabbbbbbaba\n' +
      'aaaabbbbbbbbbbabaabbbaba\n' +
      'baaabaaabbabbaaabababbbbbbbbababbbabaaabaabaabbabbbbbbababbababb\n' +
      'baaabbaaabaababbaabababaaaaababbbaaabaab\n' +
      'aababaabbbaaababbbbaabba\n' +
      'bbbabbbbbabbbaabbbbbbbabaaabbabaabbbbbba\n' +
      'ababababaabbabbbbbaabbbbaabaabbb\n' +
      'aabaaabaaaaabaabbabaaabb\n' +
      'bbbbaaaaababababbabbbbbbbabaabbbabbaaaba\n' +
      'bbaaaababbbabaabaababbba\n' +
      'bbaabbabbabaaaaabababbaababbbbbb\n' +
      'baaaaababaabababaaabaabbbabaabbbbabaabbbbbbbbaab\n' +
      'abbabaaabbbbbabbbbbaaaba\n' +
      'babbbabbabaabbbaaaababbb\n' +
      'abababaabababbbaabbaabba\n' +
      'babbabbbabbbaaaabbaabbaa\n' +
      'babbbbabbaababbaababbaba\n' +
      'bbbbaaaabbbbabbbbbaaabaa\n' +
      'bbababbbbabbbbabaaaabaabaabbbbbbaaaabbaa\n' +
      'bbbbbbabababbabbaaabbbaabbbaabbabaaaabab\n' +
      'aaabaaaaabababbabaaabaaa\n' +
      'ababaabbaabaabbaababbbaa\n' +
      'babababaabaabbaabbaaabaa\n' +
      'bbaaaababaabbbaaaabbbaabaababbabbbbbbaababababababbabaab\n' +
      'bbababbbaabaabbabbaabbbbaaabbabbbabbbaaa\n' +
      'aaaababbabbababbaababaaabbabbbab\n' +
      'bbabbaaaaabaaaabbbbabaaa\n' +
      'aaaaabaaaaabbbaaabbabbba\n' +
      'abbbaababbbbbbabbbaabababbbbaaab\n' +
      'babbabaaababbabbabbaaaab\n' +
      'babaaabaaaaaaabaabbabbbb\n' +
      'bababbaabbababbbaabaaababbaabbabaababbbbaabbbaabbbbababb\n' +
      'aaaaaaabbbbabbaaabbbabab\n' +
      'bbabaabaaabbabbbbaaababa\n' +
      'abbabbabbbbaabaaaaaababa\n' +
      'bbbabbbbabbbbaaabaaabbbb\n' +
      'babbbabbbbbbabbbaabbbbaa\n' +
      'baaaabbbaaababbaababaaaa\n' +
      'aaaaaabababbbbabbababaab\n' +
      'bbaabbbbabbababababbaabbbbbbabaa\n' +
      'baabaaabbbbaaabbaabbbbba\n' +
      'bbabaababbaabbbbbbbabbab\n' +
      'bababbabaababbabbaabbabb\n' +
      'aaabbabbaababaabababaaaa\n' +
      'baababbaabaabbbbabbbaababbababbbbaabbababbbababaabbaaaba\n' +
      'aababaaaaaabaaabaaaabaabaabaabbbbbbababa\n' +
      'abbbbaaaaaabbbbaabaabbbababaaabbababaaaa\n' +
      'abbbabbbaaaababbbbbbabaa\n' +
      'bbabbaaababaabaaaaabaabb\n' +
      'aabaaababbabbaaabbaabbbbaabaaaabbaaabbabbaaaaababaababbbbbaaabbb\n' +
      'aaabbbbabaaaabbbbbababba\n' +
      'aaaabbbababbabaaabbabbbbaaabbaaaabbababbbaabbbab\n' +
      'aaabbbaaababbbbabbbbaaab\n' +
      'aaaababbaaabbabbaababbba\n' +
      'babbbbbbbaababaabbbbbaba\n' +
      'abbbaaaababbbabbbabbbaaa\n' +
      'aabbbaabababababbbbbbbaabbbbbabbbaabbabb\n' +
      'aaabbbaabaaabbabaababbba\n' +
      'abbbaabaaaabbbbabbbbbbababbaaaba\n' +
      'bbbabaabbabbbabbbabababb\n' +
      'aaaaaaabbbababbbbbaaaaab\n' +
      'abbabbbbbaabbbbbaaababbbbabbbbabbaabbabb\n' +
      'aabaabbabbbbaabaaaaaaaabbababababaaabbaabbaababbbbbbbaaabaaaabbabbbbbaba\n' +
      'aaaabaababaaaaaabaaaabba\n' +
      'bbbaaabbababababbbbbbaaa\n' +
      'abbbabababaabbbabbbbaababbbaaabbbbbbbbbaaabaaabb\n' +
      'bbaaaabaababaabbaaabaabb\n' +
      'aaaabbabaaabbabbbbbbabbaabababaaabaabbabbaabbaba\n' +
      'bbababbbbaaaabbbababaaaa\n' +
      'bbababbbabaaaabababaabab\n' +
      'aababababaababbaabbaaaba\n' +
      'baabbbaaabaabbbbaabbabbbabaabbbaaaabbaab\n' +
      'bbbbbaabbabbabbabbbabbbbabbbbbaaaaaaabba\n' +
      'baaaabbbbbbabbaabbbaabab\n' +
      'abbbabbbbbbbbabbbabababaabbbbbbbbababaaababbaaab\n' +
      'abbaabaaaabbabaabbbaaabaabbbbaabaabbaababbaababbbaaabaaaaabbaaaa\n' +
      'baaabbabababbbabbaabaaaa\n' +
      'aaabaabaaababbbbababbaba\n' +
      'bbaabbbaaaaababbababaaaa\n' +
      'abbbbaaabaaaaaabbbbaabab\n' +
      'abbbbbaaababbbababbaabaa\n' +
      'ababbabbbbbabbbbbbabbabb\n' +
      'bbbbbbaaaaaaaabaaaabbaab\n' +
      'aababbababaaababbbbbaaaabbbaabbaababbaba\n' +
      'aaababbaabbabababbbababa\n' +
      'abbabbabaaaaaabaabababaababbbaabbbabbaab\n' +
      'aabaaababbabaaabbaaabaab\n' +
      'aaabbbbaabbbbbaaabaaabaa\n' +
      'aaabaaaababbbaabaabbaaba\n' +
      'abaaaabaaabbbaabaabaabab\n' +
      'babaabbaabbbbbbbabbabaaababaaabbbbbababa\n' +
      'babbaababbbaaaababbbabbbabbaaabaabbaabaa\n' +
      'abaabbbabbbbaaaabbbbbbbbbbbabbaaabbaaabbaabaababbaabbbab\n' +
      'bbaaaaaaaabbabbbabaaaabbaaaabbaa\n' +
      'bbaabbbbbbaababbaaaaaaaabbbaaabaaaababbbbbbaaaababbbabbababaaaabbbbaabbaabaabbbaabbaaaaa\n' +
      'bbabaababbaabaaababbbaaa\n' +
      'aaaababbaaabaaabaaaabbba\n' +
      'aaaabaabbabbabbabbaabaaaabbaabbbaaaaabba\n' +
      'bbaabbbbabaababbbabbaababbbbbbaabaabaaababaabababbbababb\n' +
      'aaaaabbbaabbabbbabaaabbaababbbbbaaabbbbbbbabaaabbabaaaabbbbbaabb\n' +
      'bbbbaababababbaaababbbabaaaabbaa\n' +
      'abbbbaaaaababbabbbababaaaaabbbabbbaabaabbaaabaab\n' +
      'abaabaaaaabaabbaaaabbaaaabbbbabb\n' +
      'bbabaabaaaaaaaabbbbababa\n' +
      'bbbbbabbabababaaabbaaaab\n' +
      'aaabbbabbaabababbbabbbbaabbbaaaaaaabbbab\n' +
      'abbababaabaabbbaaaaabaaa\n' +
      'bbbabbaaaabbbaabaaabaaabbbbbabaa\n' +
      'abbababaabaaababbbbaaaba\n' +
      'babaabbaabaaabbbbabbabbaaabbbaaa\n' +
      'aaabaabaabaaababbabbbbbbbaabbabbabbabbbbbbaabaaabbaababbaaaaaaaaaaaaaabbbbbabaaa\n' +
      'babbbabbabbbaaaaabbaabbabbbabbabbbababbaaabaaaaa\n' +
      'bbbbbbababbaaabbbaaaabab\n' +
      'aaaabbbbbbaabbabababbaba\n' +
      'abaababbbabbbbabbabbaaab\n' +
      'ababbaaaabbbbbaaaaabbabbbbaabbabbaababbb\n' +
      'aaabbbbababaaababaaabaab\n' +
      'bbbbbbbabbaabaaabaaaabbbbabaabbbaaabaabbbabbaaab\n' +
      'bbababbbbabbbaababaaaaab\n' +
      'baaaabbbbaabbbaabaaabbbb\n' +
      'abaaabbababaaaaabbababba\n' +
      'aaabbbaaabaabbbbbaabaaba\n' +
      'baabababbaababbbbaababbbaabbbbaa\n' +
      'aabababaaaaaaabaaaababab\n' +
      'aabbababaabbbbbaabbaabaabbbbbbbaaaabaababaabababbbbabaab\n'

  const solution = solvePart2(input)

  expect(solution).toEqual(2)
})
