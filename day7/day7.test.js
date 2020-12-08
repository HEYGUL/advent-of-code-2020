const day7 = require('./day7')

test('returns 32', () => {
  const input = 'light red bags contain 1 bright white bag, 2 muted yellow bags.\n' +
      'dark orange bags contain 3 bright white bags, 4 muted yellow bags.\n' +
      'bright white bags contain 1 shiny gold bag.\n' +
      'muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.\n' +
      'shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.\n' +
      'dark olive bags contain 3 faded blue bags, 4 dotted black bags.\n' +
      'vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.\n' +
      'faded blue bags contain no other bags.\n' +
      'dotted black bags contain no other bags.\n'

  const solution = day7.solvePart2(input)

  expect(solution).toEqual(32)
})

test('returns 126', () => {
  const input = 'shiny gold bags contain 2 dark red bags.\n' +
      'dark red bags contain 2 dark orange bags.\n' +
      'dark orange bags contain 2 dark yellow bags.\n' +
      'dark yellow bags contain 2 dark green bags.\n' +
      'dark green bags contain 2 dark blue bags.\n' +
      'dark blue bags contain 2 dark violet bags.\n' +
      'dark violet bags contain no other bags.\n'

  const solution = day7.solvePart2(input)

  expect(solution).toEqual(126)
})

test('returns 335', () => {
  const input = 'dim silver bags contain 3 posh fuchsia bags.\n' +
      'wavy olive bags contain 1 striped olive bag, 1 dull cyan bag.\n' +
      'dull coral bags contain 1 dim olive bag, 5 muted violet bags, 2 dark gray bags.\n' +
      'bright olive bags contain 3 light indigo bags, 3 dark coral bags.\n' +
      'clear lavender bags contain 1 dark olive bag.\n' +
      'dim lime bags contain 3 dotted red bags.\n' +
      'drab indigo bags contain 5 striped coral bags, 2 muted bronze bags.\n' +
      'striped orange bags contain 5 wavy fuchsia bags, 5 clear red bags, 3 plaid red bags.\n' +
      'dotted indigo bags contain 2 plaid white bags, 1 wavy gold bag, 1 plaid silver bag.\n' +
      'posh crimson bags contain 3 clear crimson bags, 5 dotted silver bags, 3 dull crimson bags, 5 wavy violet bags.\n' +
      'mirrored tan bags contain 1 plaid white bag, 3 vibrant beige bags, 3 drab silver bags, 1 pale blue bag.\n' +
      'dull turquoise bags contain 5 plaid magenta bags, 3 bright aqua bags, 1 dim purple bag, 1 wavy orange bag.\n' +
      'dark tomato bags contain 1 plaid gray bag.\n' +
      'shiny red bags contain 4 vibrant maroon bags, 5 faded bronze bags.\n' +
      'clear tan bags contain 4 pale lime bags, 4 faded plum bags.\n' +
      'mirrored plum bags contain 1 wavy silver bag, 4 dim purple bags, 3 dim coral bags.\n' +
      'dotted orange bags contain 4 pale aqua bags, 3 dotted aqua bags, 4 clear beige bags.\n' +
      'wavy lime bags contain 5 dim salmon bags, 4 dark violet bags, 4 clear turquoise bags.\n' +
      'faded gray bags contain 2 dotted lime bags, 5 plaid tomato bags.\n' +
      'pale orange bags contain 5 faded maroon bags.\n' +
      'shiny lime bags contain 3 striped olive bags, 5 light fuchsia bags, 1 pale crimson bag, 1 pale salmon bag.\n' +
      'drab red bags contain 5 muted chartreuse bags, 4 clear purple bags, 4 drab silver bags, 3 posh green bags.\n' +
      'plaid plum bags contain 2 dim blue bags, 1 dim coral bag.\n' +
      'clear red bags contain 3 plaid teal bags, 4 vibrant orange bags, 1 pale red bag.\n' +
      'dark yellow bags contain 5 mirrored lavender bags, 5 dull bronze bags, 4 pale salmon bags, 5 wavy crimson bags.\n' +
      'clear violet bags contain 5 clear turquoise bags, 3 clear beige bags, 4 dim plum bags.\n' +
      'plaid cyan bags contain no other bags.\n' +
      'light salmon bags contain 3 dull yellow bags, 2 vibrant violet bags, 2 dark orange bags, 1 light magenta bag.\n' +
      'dim indigo bags contain 2 vibrant orange bags, 3 drab teal bags, 4 plaid indigo bags.\n' +
      'shiny magenta bags contain 1 dark salmon bag, 4 shiny gray bags, 2 mirrored purple bags.\n' +
      'drab coral bags contain 5 pale crimson bags, 1 mirrored aqua bag, 4 light red bags.\n' +
      'muted blue bags contain 1 dark green bag, 5 muted salmon bags, 4 posh beige bags, 4 pale salmon bags.\n' +
      'plaid salmon bags contain 5 striped white bags, 4 posh fuchsia bags, 5 faded turquoise bags.\n' +
      'vibrant bronze bags contain 1 bright orange bag, 2 bright plum bags.\n' +
      'dull salmon bags contain 2 pale crimson bags, 3 dark tan bags, 5 light plum bags.\n' +
      'striped magenta bags contain 4 wavy yellow bags, 3 bright chartreuse bags, 5 plaid cyan bags.\n' +
      'light olive bags contain 5 vibrant beige bags, 3 faded tomato bags, 1 dark indigo bag.\n' +
      'faded turquoise bags contain 2 shiny salmon bags, 3 wavy crimson bags, 5 dim yellow bags, 1 posh salmon bag.\n' +
      'pale fuchsia bags contain 2 posh blue bags, 4 mirrored blue bags, 3 wavy silver bags, 2 wavy crimson bags.\n' +
      'dotted tomato bags contain 2 dotted lime bags, 1 wavy teal bag, 1 mirrored black bag, 3 dull gold bags.\n' +
      'shiny maroon bags contain 5 striped salmon bags.\n' +
      'vibrant gray bags contain 5 clear tan bags, 5 plaid crimson bags, 3 striped cyan bags, 1 dark gold bag.\n' +
      'muted tomato bags contain 1 dull salmon bag.\n' +
      'striped salmon bags contain 4 plaid white bags, 5 dim salmon bags, 4 vibrant lime bags.\n' +
      'light tan bags contain 2 posh lavender bags, 5 shiny aqua bags.\n' +
      'wavy brown bags contain 2 posh lavender bags.\n' +
      'drab beige bags contain 5 plaid coral bags, 3 bright turquoise bags, 5 dark purple bags, 3 mirrored black bags.\n' +
      'bright tomato bags contain 1 bright teal bag, 2 bright tan bags, 2 dotted salmon bags.\n' +
      'dim tan bags contain 2 striped cyan bags, 5 wavy green bags, 3 drab beige bags.\n' +
      'light plum bags contain 4 clear silver bags, 1 vibrant chartreuse bag.\n' +
      'light black bags contain 1 muted tan bag, 2 dim yellow bags.\n' +
      'clear orange bags contain 5 mirrored violet bags, 1 wavy salmon bag, 3 dim plum bags.\n' +
      'bright gray bags contain 5 dim blue bags, 1 dotted red bag, 5 mirrored aqua bags.\n' +
      'striped cyan bags contain 4 striped teal bags, 1 dark tan bag, 1 dim green bag.\n' +
      'shiny olive bags contain 1 dark aqua bag, 2 muted lime bags.\n' +
      'clear brown bags contain 5 dark salmon bags.\n' +
      'dotted tan bags contain 2 plaid brown bags.\n' +
      'light green bags contain 5 plaid silver bags, 5 posh aqua bags, 3 dull green bags, 5 faded red bags.\n' +
      'posh coral bags contain 1 muted teal bag.\n' +
      'drab green bags contain 1 dotted blue bag.\n' +
      'dark fuchsia bags contain 2 wavy tomato bags, 3 faded plum bags.\n' +
      'vibrant purple bags contain 3 posh tomato bags, 4 dim purple bags, 5 plaid brown bags, 4 dotted red bags.\n' +
      'vibrant tomato bags contain 5 wavy orange bags, 1 striped teal bag.\n' +
      'faded coral bags contain 5 dotted maroon bags, 2 light tan bags, 1 plaid black bag, 4 dark indigo bags.\n' +
      'posh gold bags contain 4 mirrored plum bags.\n' +
      'muted beige bags contain 2 pale brown bags, 4 dull black bags, 4 vibrant blue bags.\n' +
      'dull green bags contain 3 drab silver bags, 5 dotted red bags, 3 mirrored violet bags, 3 bright black bags.\n' +
      'dark lime bags contain 5 light chartreuse bags, 3 pale magenta bags, 1 dull indigo bag.\n' +
      'dark orange bags contain 1 dark crimson bag, 2 clear turquoise bags, 2 dotted silver bags.\n' +
      'muted yellow bags contain 2 pale salmon bags, 3 bright plum bags, 3 shiny aqua bags, 5 plaid cyan bags.\n' +
      'vibrant white bags contain 5 dim coral bags, 5 dim bronze bags.\n' +
      'posh white bags contain 2 wavy blue bags, 3 clear chartreuse bags, 1 wavy coral bag, 5 drab turquoise bags.\n' +
      'faded violet bags contain 4 dim bronze bags.\n' +
      'bright yellow bags contain 5 pale violet bags, 2 striped fuchsia bags.\n' +
      'dim blue bags contain 2 posh salmon bags, 4 posh red bags, 5 clear turquoise bags, 4 muted lavender bags.\n' +
      'plaid olive bags contain no other bags.\n' +
      'posh plum bags contain 2 drab turquoise bags, 4 bright fuchsia bags, 4 drab indigo bags.\n' +
      'posh violet bags contain 3 plaid olive bags, 2 posh teal bags, 1 posh purple bag.\n' +
      'pale beige bags contain 4 wavy crimson bags, 5 shiny gold bags.\n' +
      'shiny turquoise bags contain 5 dark gray bags, 4 clear brown bags.\n' +
      'clear bronze bags contain 1 dull coral bag, 1 mirrored cyan bag, 2 dotted orange bags, 1 plaid magenta bag.\n' +
      'dark magenta bags contain 3 vibrant orange bags, 1 dull lime bag, 1 dim plum bag.\n' +
      'light silver bags contain 2 posh coral bags.\n' +
      'drab gold bags contain 5 mirrored gold bags, 1 bright blue bag.\n' +
      'dull fuchsia bags contain 3 pale blue bags.\n' +
      'muted brown bags contain 4 drab fuchsia bags, 4 plaid bronze bags.\n' +
      'bright coral bags contain 2 dull crimson bags.\n' +
      'clear black bags contain 5 striped brown bags.\n' +
      'mirrored coral bags contain 2 striped brown bags, 4 clear coral bags.\n' +
      'dull purple bags contain 1 plaid green bag, 5 shiny gold bags.\n' +
      'drab brown bags contain 4 striped coral bags, 1 muted magenta bag, 4 faded red bags.\n' +
      'faded plum bags contain 5 shiny orange bags.\n' +
      'vibrant violet bags contain 1 drab gold bag, 1 light violet bag.\n' +
      'clear salmon bags contain 5 posh orange bags, 1 wavy fuchsia bag, 5 mirrored yellow bags.\n' +
      'dull yellow bags contain 5 light orange bags, 4 striped purple bags.\n' +
      'striped olive bags contain 1 plaid beige bag, 1 shiny turquoise bag, 2 drab gold bags, 1 pale lime bag.\n' +
      'clear beige bags contain no other bags.\n' +
      'mirrored fuchsia bags contain 1 clear olive bag, 3 pale aqua bags.\n' +
      'posh turquoise bags contain 5 pale crimson bags, 3 dull cyan bags.\n' +
      'dull lime bags contain 3 plaid chartreuse bags.\n' +
      'wavy black bags contain 3 dull salmon bags, 5 plaid teal bags.\n' +
      'dim lavender bags contain 1 dark gray bag, 2 muted indigo bags.\n' +
      'wavy yellow bags contain 2 striped turquoise bags.\n' +
      'striped gray bags contain 3 drab white bags.\n' +
      'dotted magenta bags contain 3 plaid white bags, 4 clear beige bags, 1 faded maroon bag, 3 muted lavender bags.\n' +
      'vibrant coral bags contain 5 shiny olive bags, 2 pale brown bags.\n' +
      'dim aqua bags contain 5 striped crimson bags, 3 bright lavender bags.\n' +
      'pale lavender bags contain 3 vibrant tan bags.\n' +
      'bright fuchsia bags contain 2 dotted fuchsia bags.\n' +
      'dark black bags contain 5 drab purple bags, 3 striped yellow bags, 2 posh tan bags.\n' +
      'dark teal bags contain 3 plaid white bags, 5 bright cyan bags, 1 posh blue bag, 4 mirrored magenta bags.\n' +
      'plaid brown bags contain 3 bright plum bags, 1 muted magenta bag, 4 clear gray bags, 2 clear crimson bags.\n' +
      'mirrored magenta bags contain no other bags.\n' +
      'light brown bags contain 4 wavy red bags, 2 faded white bags.\n' +
      'dotted purple bags contain 2 pale lime bags.\n' +
      'clear teal bags contain 3 plaid red bags, 3 striped coral bags, 4 mirrored black bags, 2 posh red bags.\n' +
      'striped gold bags contain 3 bright plum bags, 2 mirrored gold bags.\n' +
      'dotted black bags contain 2 clear crimson bags, 1 dark violet bag, 2 clear teal bags, 3 mirrored purple bags.\n' +
      'dim gray bags contain 1 dotted salmon bag, 2 dim silver bags, 5 wavy black bags, 2 dotted green bags.\n' +
      'shiny black bags contain 3 plaid bronze bags, 5 dim plum bags, 3 muted teal bags, 5 muted magenta bags.\n' +
      'plaid orange bags contain 5 plaid crimson bags, 4 muted white bags, 4 dark lime bags, 5 plaid cyan bags.\n' +
      'striped fuchsia bags contain 1 dull bronze bag, 1 wavy aqua bag, 1 plaid salmon bag, 2 faded cyan bags.\n' +
      'wavy white bags contain 4 posh beige bags.\n' +
      'dull teal bags contain 1 vibrant blue bag, 1 light red bag, 3 striped brown bags.\n' +
      'vibrant chartreuse bags contain 1 shiny aqua bag, 4 clear crimson bags, 1 faded red bag, 1 dull crimson bag.\n' +
      'wavy cyan bags contain 5 striped red bags, 1 shiny magenta bag.\n' +
      'vibrant olive bags contain 3 light fuchsia bags, 5 pale tan bags, 5 light tomato bags.\n' +
      'dotted fuchsia bags contain 5 clear silver bags, 5 light aqua bags, 5 posh beige bags.\n' +
      'wavy tomato bags contain 2 wavy tan bags, 3 muted lavender bags, 2 pale salmon bags.\n' +
      'posh lime bags contain 4 drab lime bags, 4 dull lavender bags.\n' +
      'shiny white bags contain 1 plaid olive bag, 2 faded white bags, 2 dull salmon bags.\n' +
      'bright plum bags contain 1 dotted salmon bag, 4 plaid red bags, 1 mirrored purple bag, 3 shiny aqua bags.\n' +
      'dotted lavender bags contain 1 light green bag, 3 light magenta bags.\n' +
      'bright gold bags contain 4 dim blue bags, 5 dark salmon bags, 2 posh crimson bags.\n' +
      'striped violet bags contain 4 posh plum bags, 1 drab crimson bag, 2 faded orange bags, 3 dotted green bags.\n' +
      'dull plum bags contain 1 dark maroon bag.\n' +
      'striped tomato bags contain 5 striped maroon bags, 1 plaid turquoise bag.\n' +
      'muted bronze bags contain 1 plaid red bag.\n' +
      'dull lavender bags contain 2 plaid white bags.\n' +
      'dark bronze bags contain 1 clear turquoise bag, 5 dim purple bags, 2 bright turquoise bags, 2 striped coral bags.\n' +
      'muted green bags contain 3 plaid white bags, 5 pale blue bags, 3 plaid tan bags, 2 clear turquoise bags.\n' +
      'mirrored bronze bags contain 2 faded white bags, 3 bright teal bags, 2 clear red bags, 2 clear crimson bags.\n' +
      'clear silver bags contain 5 dim yellow bags, 2 striped brown bags, 1 muted magenta bag.\n' +
      'dark indigo bags contain 3 faded maroon bags, 3 mirrored purple bags.\n' +
      'posh silver bags contain 3 dotted maroon bags, 1 striped indigo bag, 1 faded red bag.\n' +
      'light teal bags contain 1 vibrant beige bag, 1 striped plum bag, 4 dim salmon bags.\n' +
      'dull orange bags contain 2 shiny teal bags, 5 muted teal bags, 1 dark fuchsia bag, 4 bright magenta bags.\n' +
      'muted red bags contain 2 mirrored magenta bags.\n' +
      'dotted gray bags contain 3 dull maroon bags, 4 mirrored blue bags, 3 mirrored red bags.\n' +
      'light lime bags contain 5 plaid fuchsia bags, 4 posh plum bags.\n' +
      'pale coral bags contain 3 shiny gray bags, 2 plaid beige bags.\n' +
      'dim brown bags contain 1 faded gray bag.\n' +
      'drab tan bags contain 5 dotted crimson bags.\n' +
      'clear chartreuse bags contain 4 faded maroon bags, 5 plaid white bags.\n' +
      'posh maroon bags contain 1 clear beige bag, 5 light black bags.\n' +
      'mirrored blue bags contain 4 faded gray bags, 5 mirrored olive bags, 1 pale lime bag.\n' +
      'clear coral bags contain 1 plaid fuchsia bag, 4 drab yellow bags, 4 light bronze bags.\n' +
      'mirrored orange bags contain 4 mirrored lavender bags, 3 faded orange bags, 4 mirrored gold bags, 3 dim silver bags.\n' +
      'pale bronze bags contain 4 plaid orange bags, 3 wavy chartreuse bags, 2 clear red bags.\n' +
      'faded yellow bags contain 2 posh green bags.\n' +
      'light magenta bags contain 3 clear silver bags, 3 pale magenta bags.\n' +
      'clear aqua bags contain 2 dark tan bags.\n' +
      'clear yellow bags contain 5 dim violet bags, 5 drab bronze bags.\n' +
      'plaid yellow bags contain 4 dotted salmon bags.\n' +
      'pale salmon bags contain 2 plaid olive bags, 5 clear beige bags.\n' +
      'bright magenta bags contain 2 shiny maroon bags, 1 bright maroon bag, 5 shiny white bags.\n' +
      'dull brown bags contain 4 posh fuchsia bags, 2 dotted tan bags.\n' +
      'muted magenta bags contain no other bags.\n' +
      'muted lavender bags contain 5 light aqua bags, 1 faded maroon bag, 4 plaid lavender bags.\n' +
      'dotted violet bags contain 2 pale red bags, 3 mirrored magenta bags.\n' +
      'wavy gray bags contain 5 dark indigo bags, 3 dim yellow bags, 3 posh lime bags, 1 wavy yellow bag.\n' +
      'posh beige bags contain 4 mirrored magenta bags, 1 striped brown bag, 1 mirrored aqua bag, 5 dotted silver bags.\n' +
      'drab crimson bags contain 2 faded coral bags, 4 light indigo bags, 4 dark indigo bags.\n' +
      'wavy magenta bags contain 5 clear gold bags, 4 dim purple bags, 3 pale green bags.\n' +
      'dim fuchsia bags contain 2 drab teal bags, 4 plaid brown bags, 5 faded orange bags.\n' +
      'faded indigo bags contain 2 faded orange bags, 4 striped turquoise bags, 4 pale salmon bags, 4 bright cyan bags.\n' +
      'posh yellow bags contain 2 pale gold bags, 3 posh coral bags, 1 dotted tan bag.\n' +
      'muted chartreuse bags contain 5 plaid brown bags, 3 dull green bags.\n' +
      'dotted plum bags contain 4 mirrored purple bags, 1 drab tan bag, 3 striped white bags.\n' +
      'clear plum bags contain 3 posh green bags.\n' +
      'striped red bags contain 1 striped tomato bag, 1 wavy fuchsia bag, 3 clear yellow bags.\n' +
      'striped aqua bags contain 4 posh teal bags, 2 bright beige bags.\n' +
      'dim gold bags contain 5 dull salmon bags, 3 mirrored red bags, 1 mirrored black bag.\n' +
      'mirrored brown bags contain 1 mirrored salmon bag.\n' +
      'wavy plum bags contain 3 shiny yellow bags, 5 light crimson bags, 5 dotted silver bags.\n' +
      'striped coral bags contain no other bags.\n' +
      'dark gray bags contain 4 dotted salmon bags, 2 clear brown bags, 2 posh crimson bags, 5 mirrored plum bags.\n' +
      'posh chartreuse bags contain 2 wavy fuchsia bags, 4 mirrored beige bags.\n' +
      'dotted gold bags contain 1 dark lavender bag, 1 striped black bag.\n' +
      'posh green bags contain 3 dotted salmon bags, 4 pale salmon bags, 3 posh red bags, 4 dim green bags.\n' +
      'plaid blue bags contain 2 posh green bags, 3 dim cyan bags, 5 dull bronze bags.\n' +
      'light lavender bags contain 5 muted green bags, 1 light violet bag, 5 muted plum bags.\n' +
      'pale plum bags contain 5 muted lavender bags, 5 light bronze bags, 4 plaid crimson bags.\n' +
      'mirrored indigo bags contain 4 dark violet bags, 2 wavy purple bags, 5 plaid tan bags.\n' +
      'dim violet bags contain 4 mirrored black bags, 4 dull lime bags, 3 posh crimson bags, 1 pale brown bag.\n' +
      'shiny coral bags contain 1 light aqua bag, 5 plaid olive bags, 4 bright turquoise bags.\n' +
      'dotted cyan bags contain 4 shiny olive bags, 4 light bronze bags, 2 dim plum bags.\n' +
      'mirrored teal bags contain 5 dim violet bags.\n' +
      'shiny purple bags contain 4 dim magenta bags, 2 clear white bags, 3 posh silver bags, 1 shiny turquoise bag.\n' +
      'shiny gray bags contain 5 pale lavender bags, 3 vibrant turquoise bags, 1 faded maroon bag, 1 bright cyan bag.\n' +
      'mirrored chartreuse bags contain 2 clear white bags.\n' +
      'light beige bags contain 5 mirrored turquoise bags, 5 plaid maroon bags, 3 light silver bags.\n' +
      'dull tomato bags contain 1 shiny gold bag, 4 pale blue bags.\n' +
      'plaid teal bags contain 1 dim purple bag, 3 striped turquoise bags, 3 light indigo bags, 2 faded red bags.\n' +
      'vibrant aqua bags contain 3 mirrored turquoise bags, 1 light plum bag, 5 clear teal bags, 1 dull blue bag.\n' +
      'dotted turquoise bags contain 5 bright fuchsia bags, 5 dim blue bags, 3 posh green bags, 3 wavy red bags.\n' +
      'dark lavender bags contain 1 mirrored lime bag, 2 plaid red bags, 2 striped white bags, 1 plaid tomato bag.\n' +
      'plaid tan bags contain 5 plaid white bags.\n' +
      'pale olive bags contain 1 clear salmon bag.\n' +
      'wavy indigo bags contain 1 plaid black bag, 1 wavy teal bag, 3 mirrored salmon bags.\n' +
      'drab chartreuse bags contain 2 light lime bags, 3 drab yellow bags.\n' +
      'drab blue bags contain 3 vibrant brown bags.\n' +
      'muted purple bags contain 2 shiny yellow bags.\n' +
      'muted aqua bags contain 4 striped white bags.\n' +
      'mirrored violet bags contain 3 wavy violet bags, 4 mirrored aqua bags.\n' +
      'bright cyan bags contain 3 wavy fuchsia bags, 2 dark coral bags, 1 shiny orange bag.\n' +
      'posh teal bags contain 5 bright gray bags, 4 faded gray bags, 2 plaid turquoise bags.\n' +
      'muted lime bags contain 2 striped coral bags, 1 dark tan bag, 4 plaid cyan bags.\n' +
      'mirrored crimson bags contain 4 faded violet bags, 1 posh purple bag.\n' +
      'light blue bags contain 2 dotted blue bags, 2 dark gold bags, 5 bright cyan bags, 1 light crimson bag.\n' +
      'dull beige bags contain 2 dark turquoise bags, 5 mirrored violet bags, 1 muted crimson bag.\n' +
      'dark cyan bags contain 5 muted blue bags.\n' +
      'dim turquoise bags contain 3 shiny silver bags, 1 pale yellow bag, 3 plaid chartreuse bags, 1 posh bronze bag.\n' +
      'faded brown bags contain 3 dim silver bags, 2 mirrored bronze bags.\n' +
      'wavy bronze bags contain 3 shiny tomato bags, 3 dim salmon bags.\n' +
      'pale brown bags contain 3 pale tan bags, 2 plaid olive bags, 2 posh lavender bags, 1 shiny aqua bag.\n' +
      'dull white bags contain 1 dull red bag, 5 dark gold bags, 3 striped magenta bags, 2 muted green bags.\n' +
      'plaid crimson bags contain 5 drab bronze bags, 2 pale blue bags.\n' +
      'bright lavender bags contain 1 dark bronze bag.\n' +
      'plaid red bags contain 3 striped turquoise bags, 4 dull crimson bags, 1 striped brown bag, 2 clear crimson bags.\n' +
      'muted gold bags contain 5 dotted black bags, 1 striped salmon bag, 3 drab purple bags, 5 bright red bags.\n' +
      'striped silver bags contain 3 posh black bags.\n' +
      'bright aqua bags contain 4 light orange bags, 3 wavy blue bags, 3 dull lime bags.\n' +
      'plaid fuchsia bags contain 2 shiny orange bags.\n' +
      'bright violet bags contain 1 drab turquoise bag, 1 dim cyan bag, 4 pale blue bags, 3 wavy blue bags.\n' +
      'dim white bags contain 1 plaid black bag, 5 plaid violet bags, 2 light gray bags.\n' +
      'bright tan bags contain 5 bright gold bags, 3 shiny salmon bags, 2 muted magenta bags, 1 dotted black bag.\n' +
      'shiny bronze bags contain 3 light aqua bags, 4 clear crimson bags, 1 light beige bag, 4 clear blue bags.\n' +
      'muted silver bags contain 4 striped lavender bags.\n' +
      'dull red bags contain 1 dim coral bag, 1 faded plum bag, 4 plaid red bags.\n' +
      'wavy aqua bags contain 2 dotted fuchsia bags, 2 mirrored tomato bags.\n' +
      'dark olive bags contain 4 muted yellow bags, 2 shiny gold bags, 2 posh crimson bags.\n' +
      'dark crimson bags contain 3 shiny aqua bags, 1 wavy black bag.\n' +
      'dark brown bags contain 2 drab lavender bags, 5 posh green bags, 4 pale turquoise bags.\n' +
      'pale blue bags contain 2 striped coral bags, 2 shiny gold bags.\n' +
      'vibrant blue bags contain 1 mirrored lavender bag, 4 dark aqua bags, 5 wavy coral bags.\n' +
      'posh cyan bags contain 1 dull lavender bag, 3 striped gray bags, 1 vibrant orange bag.\n' +
      'faded red bags contain 1 posh crimson bag, 1 wavy coral bag, 5 clear beige bags, 3 dotted silver bags.\n' +
      'vibrant gold bags contain 3 drab lavender bags, 5 dim magenta bags, 2 bright tomato bags, 4 light magenta bags.\n' +
      'shiny chartreuse bags contain 5 vibrant turquoise bags.\n' +
      'clear gray bags contain 4 wavy coral bags, 2 dark salmon bags, 3 dark indigo bags.\n' +
      'pale maroon bags contain 4 posh tomato bags, 5 bright tan bags.\n' +
      'light turquoise bags contain 3 drab fuchsia bags, 4 bright silver bags, 5 light green bags.\n' +
      'muted crimson bags contain 1 dim yellow bag, 4 wavy fuchsia bags, 2 mirrored magenta bags, 2 clear beige bags.\n' +
      'dull gray bags contain 2 posh green bags.\n' +
      'light fuchsia bags contain 5 dark gold bags, 3 plaid black bags, 2 bright lavender bags.\n' +
      'striped green bags contain 2 striped fuchsia bags, 5 dull tomato bags, 2 posh crimson bags.\n' +
      'mirrored purple bags contain 2 posh crimson bags, 2 mirrored magenta bags, 3 wavy violet bags, 1 striped coral bag.\n' +
      'vibrant black bags contain 3 clear magenta bags, 4 muted salmon bags, 5 posh blue bags.\n' +
      'plaid beige bags contain 2 dark black bags, 5 plaid yellow bags, 2 bright violet bags.\n' +
      'pale teal bags contain 3 pale crimson bags.\n' +
      'striped turquoise bags contain no other bags.\n' +
      'dim purple bags contain 2 dull crimson bags, 5 bright red bags.\n' +
      'faded cyan bags contain 5 posh aqua bags, 4 dull green bags, 3 dark olive bags.\n' +
      'mirrored cyan bags contain 5 plaid salmon bags, 4 dim salmon bags, 4 posh tomato bags.\n' +
      'striped purple bags contain 2 faded salmon bags, 2 bright tan bags, 4 drab white bags.\n' +
      'bright blue bags contain 3 light purple bags, 1 pale yellow bag.\n' +
      'faded bronze bags contain 1 light indigo bag, 3 plaid green bags, 5 posh orange bags.\n' +
      'striped white bags contain 4 drab indigo bags, 5 wavy tomato bags, 5 dotted fuchsia bags, 2 dim silver bags.\n' +
      'clear lime bags contain 2 dotted magenta bags, 5 striped magenta bags, 3 bright coral bags, 3 mirrored silver bags.\n' +
      'bright white bags contain 3 dim lavender bags.\n' +
      'dim crimson bags contain 1 posh black bag, 1 mirrored silver bag.\n' +
      'clear olive bags contain 4 vibrant purple bags, 3 drab lavender bags, 2 pale violet bags.\n' +
      'light coral bags contain 2 dotted green bags, 2 wavy aqua bags, 4 dark salmon bags, 3 light gold bags.\n' +
      'muted plum bags contain 5 plaid tan bags, 1 mirrored silver bag, 3 vibrant turquoise bags.\n' +
      'dim plum bags contain 4 bright plum bags.\n' +
      'drab bronze bags contain 1 light indigo bag, 3 striped brown bags, 3 clear gold bags, 3 clear gray bags.\n' +
      'plaid maroon bags contain 1 dotted orange bag, 5 light magenta bags, 4 faded salmon bags, 3 pale yellow bags.\n' +
      'wavy violet bags contain 2 dotted silver bags, 3 dull crimson bags, 5 mirrored aqua bags, 4 striped brown bags.\n' +
      'pale crimson bags contain 3 bright chartreuse bags, 4 light turquoise bags, 1 bright gray bag, 1 muted bronze bag.\n' +
      'mirrored aqua bags contain no other bags.\n' +
      'clear crimson bags contain 2 pale salmon bags, 4 mirrored magenta bags, 1 striped coral bag, 5 plaid olive bags.\n' +
      'dark tan bags contain 4 wavy silver bags, 4 dark aqua bags.\n' +
      'wavy maroon bags contain 3 clear gray bags.\n' +
      'light crimson bags contain 3 clear silver bags.\n' +
      'vibrant green bags contain 1 clear magenta bag, 1 dim white bag, 4 plaid black bags.\n' +
      'bright bronze bags contain 2 light brown bags.\n' +
      'light maroon bags contain 5 bright red bags, 2 bright tan bags, 5 dim silver bags, 4 pale salmon bags.\n' +
      'dark coral bags contain 2 light crimson bags.\n' +
      'pale silver bags contain 2 mirrored magenta bags, 3 posh red bags, 1 muted yellow bag, 5 dark salmon bags.\n' +
      'dotted crimson bags contain 4 faded salmon bags, 4 vibrant beige bags, 5 dim beige bags.\n' +
      'dull silver bags contain 1 striped brown bag, 2 shiny magenta bags.\n' +
      'striped beige bags contain 4 clear crimson bags.\n' +
      'faded orange bags contain 2 drab white bags, 3 striped salmon bags, 5 bright chartreuse bags.\n' +
      'drab olive bags contain 4 clear purple bags.\n' +
      'dull maroon bags contain 3 dotted magenta bags.\n' +
      'vibrant lavender bags contain 2 light tomato bags, 1 shiny teal bag.\n' +
      'dotted chartreuse bags contain 4 faded white bags, 2 light brown bags.\n' +
      'drab cyan bags contain 2 pale coral bags, 3 light purple bags, 2 drab bronze bags, 1 dim beige bag.\n' +
      'bright teal bags contain 2 vibrant plum bags, 2 dull tan bags, 1 dim tomato bag, 5 dark violet bags.\n' +
      'wavy fuchsia bags contain 1 dim green bag, 2 wavy violet bags.\n' +
      'drab black bags contain 3 striped tomato bags, 4 light salmon bags, 4 dim yellow bags, 3 shiny black bags.\n' +
      'dark green bags contain 5 dark tan bags.\n' +
      'clear tomato bags contain 4 mirrored gold bags, 4 dark gold bags.\n' +
      'plaid aqua bags contain 5 dotted coral bags, 1 muted white bag.\n' +
      'plaid white bags contain 3 clear crimson bags, 3 wavy gold bags, 3 pale lime bags, 2 striped brown bags.\n' +
      'muted black bags contain 1 wavy tan bag, 4 mirrored turquoise bags.\n' +
      'faded aqua bags contain 5 dull turquoise bags, 1 vibrant tan bag.\n' +
      'vibrant brown bags contain 5 pale silver bags, 3 drab orange bags, 1 clear olive bag.\n' +
      'pale cyan bags contain 2 faded cyan bags, 1 mirrored tan bag, 3 vibrant aqua bags, 3 light gold bags.\n' +
      'shiny salmon bags contain 5 posh red bags, 5 light chartreuse bags, 2 striped brown bags.\n' +
      'plaid lime bags contain 4 dim gold bags, 1 clear magenta bag.\n' +
      'drab tomato bags contain 5 clear orange bags.\n' +
      'faded beige bags contain 3 dark crimson bags, 2 mirrored tan bags.\n' +
      'vibrant crimson bags contain 4 wavy blue bags, 5 clear gray bags.\n' +
      'dotted maroon bags contain 5 dotted red bags, 4 wavy silver bags, 1 drab brown bag, 3 dark black bags.\n' +
      'striped indigo bags contain 3 striped orange bags.\n' +
      'dim orange bags contain 1 wavy lavender bag, 5 drab brown bags, 1 dull salmon bag.\n' +
      'posh olive bags contain 3 faded indigo bags, 1 plaid white bag.\n' +
      'striped lavender bags contain 1 bright red bag.\n' +
      'muted violet bags contain 3 bright tan bags, 5 striped coral bags, 1 drab bronze bag.\n' +
      'wavy tan bags contain 1 striped brown bag, 3 dim salmon bags, 1 posh fuchsia bag, 4 mirrored violet bags.\n' +
      'dull magenta bags contain 1 clear red bag, 4 dull green bags, 2 posh lime bags, 5 mirrored gold bags.\n' +
      'dotted red bags contain 1 mirrored black bag, 3 dull bronze bags, 2 dim salmon bags.\n' +
      'drab turquoise bags contain 5 muted yellow bags, 1 light indigo bag, 5 dotted black bags.\n' +
      'faded purple bags contain 5 dim orange bags, 3 dark red bags.\n' +
      'faded teal bags contain 1 bright fuchsia bag.\n' +
      'plaid gray bags contain 5 pale aqua bags.\n' +
      'bright black bags contain 4 wavy violet bags.\n' +
      'dim green bags contain 3 mirrored aqua bags, 1 light chartreuse bag, 1 light indigo bag.\n' +
      'dark gold bags contain 2 mirrored red bags, 2 bright lavender bags, 3 pale crimson bags.\n' +
      'dark plum bags contain 2 pale salmon bags.\n' +
      'wavy orange bags contain 2 light tan bags, 1 pale yellow bag, 2 shiny aqua bags, 4 vibrant orange bags.\n' +
      'bright chartreuse bags contain 5 dark salmon bags, 1 plaid olive bag.\n' +
      'wavy purple bags contain 4 faded coral bags, 2 vibrant orange bags.\n' +
      'shiny violet bags contain 3 plaid chartreuse bags, 2 plaid brown bags.\n' +
      'posh indigo bags contain 1 posh salmon bag.\n' +
      'clear indigo bags contain 3 light violet bags.\n' +
      'plaid purple bags contain 1 clear blue bag, 2 muted gold bags, 1 dull brown bag.\n' +
      'posh lavender bags contain 1 plaid black bag, 3 shiny orange bags, 3 posh red bags, 4 plaid cyan bags.\n' +
      'wavy silver bags contain 3 plaid cyan bags, 1 plaid olive bag.\n' +
      'posh salmon bags contain 3 clear gray bags, 5 dotted silver bags, 4 shiny aqua bags.\n' +
      'faded lavender bags contain 4 drab chartreuse bags, 4 plaid magenta bags, 1 vibrant tomato bag.\n' +
      'pale red bags contain 4 bright red bags, 4 pale lime bags, 3 striped turquoise bags.\n' +
      'bright purple bags contain 3 muted lavender bags.\n' +
      'dim magenta bags contain 1 plaid teal bag, 3 posh lavender bags.\n' +
      'posh magenta bags contain 3 pale teal bags, 5 mirrored tomato bags, 2 striped gold bags, 2 bright tomato bags.\n' +
      'bright brown bags contain 1 dark fuchsia bag, 4 pale yellow bags, 5 shiny crimson bags.\n' +
      'light red bags contain 1 wavy teal bag.\n' +
      'pale turquoise bags contain 3 mirrored yellow bags.\n' +
      'vibrant magenta bags contain 4 dark gold bags.\n' +
      'dotted salmon bags contain 3 wavy violet bags, 4 shiny aqua bags, 4 dull bronze bags.\n' +
      'mirrored gray bags contain 3 dark plum bags, 3 striped gray bags, 4 plaid violet bags.\n' +
      'dim yellow bags contain 3 striped turquoise bags, 2 pale salmon bags, 4 mirrored magenta bags, 5 striped brown bags.\n' +
      'drab lavender bags contain 2 faded maroon bags, 2 shiny orange bags.\n' +
      'muted maroon bags contain 1 wavy tomato bag, 2 drab red bags.\n' +
      'clear gold bags contain 3 mirrored olive bags, 3 striped turquoise bags.\n' +
      'light bronze bags contain 1 muted lavender bag.\n' +
      'dotted bronze bags contain 2 dotted turquoise bags.\n' +
      'pale tomato bags contain 3 shiny beige bags, 1 mirrored tomato bag, 2 dotted maroon bags, 2 wavy teal bags.\n' +
      'pale chartreuse bags contain 5 plaid silver bags.\n' +
      'drab magenta bags contain 5 wavy tomato bags, 1 drab brown bag, 2 posh maroon bags, 5 mirrored teal bags.\n' +
      'posh blue bags contain 3 muted lime bags, 1 mirrored tomato bag, 5 shiny aqua bags.\n' +
      'posh purple bags contain 5 dull maroon bags.\n' +
      'posh bronze bags contain 2 mirrored orange bags, 2 pale violet bags, 2 plaid gray bags.\n' +
      'pale gold bags contain 4 striped brown bags, 2 muted green bags.\n' +
      'faded crimson bags contain 5 drab salmon bags, 2 posh crimson bags, 3 light purple bags, 5 clear red bags.\n' +
      'vibrant fuchsia bags contain 2 posh beige bags, 4 dotted indigo bags, 5 pale silver bags, 4 clear black bags.\n' +
      'faded lime bags contain 3 posh plum bags, 3 shiny aqua bags, 4 dull chartreuse bags.\n' +
      'shiny fuchsia bags contain 4 shiny salmon bags, 3 pale chartreuse bags.\n' +
      'wavy lavender bags contain 2 dark blue bags, 5 muted salmon bags.\n' +
      'pale indigo bags contain 1 wavy gold bag, 1 clear silver bag, 3 dim blue bags.\n' +
      'drab violet bags contain 4 muted yellow bags.\n' +
      'shiny plum bags contain 3 bright black bags, 5 pale teal bags, 5 light red bags, 2 plaid magenta bags.\n' +
      'shiny gold bags contain 1 vibrant chartreuse bag.\n' +
      'wavy gold bags contain 5 posh beige bags, 1 mirrored aqua bag.\n' +
      'dark salmon bags contain 3 light aqua bags, 3 posh red bags, 2 mirrored black bags, 1 posh crimson bag.\n' +
      'pale tan bags contain 4 wavy coral bags.\n' +
      'dull tan bags contain 4 bright cyan bags.\n' +
      'clear maroon bags contain 4 dim magenta bags, 2 shiny lavender bags.\n' +
      'light white bags contain 3 dark brown bags, 4 bright fuchsia bags.\n' +
      'wavy red bags contain 4 dim red bags.\n' +
      'dotted aqua bags contain 4 striped teal bags.\n' +
      'bright beige bags contain 5 shiny tomato bags.\n' +
      'plaid indigo bags contain 1 muted bronze bag.\n' +
      'light yellow bags contain 2 striped black bags, 2 muted gold bags, 3 dotted tan bags, 5 dark coral bags.\n' +
      'vibrant silver bags contain 2 dim blue bags.\n' +
      'posh tomato bags contain 5 bright red bags, 3 posh red bags, 3 plaid olive bags, 4 clear crimson bags.\n' +
      'pale magenta bags contain 3 mirrored blue bags, 5 dull maroon bags, 5 dark violet bags.\n' +
      'light indigo bags contain 2 plaid olive bags, 1 plaid black bag, 3 dark indigo bags.\n' +
      'shiny green bags contain 1 vibrant chartreuse bag, 4 bright lavender bags, 3 wavy crimson bags, 4 dull red bags.\n' +
      'striped maroon bags contain 2 posh coral bags, 2 striped gray bags, 3 clear plum bags.\n' +
      'posh fuchsia bags contain 2 wavy gold bags, 2 posh beige bags.\n' +
      'dim coral bags contain 4 wavy gold bags, 4 muted lavender bags.\n' +
      'faded maroon bags contain 5 dim purple bags, 4 bright red bags, 5 wavy violet bags, 1 mirrored aqua bag.\n' +
      'striped black bags contain 4 plaid fuchsia bags, 5 bright lavender bags, 4 dull black bags.\n' +
      'mirrored gold bags contain 3 dotted silver bags.\n' +
      'light tomato bags contain 5 pale brown bags, 3 wavy coral bags.\n' +
      'dark white bags contain 2 mirrored tomato bags, 1 striped orange bag, 1 dim olive bag, 2 dotted blue bags.\n' +
      'dotted green bags contain 3 clear plum bags.\n' +
      'dotted brown bags contain 1 clear magenta bag.\n' +
      'muted orange bags contain 3 muted olive bags, 2 faded yellow bags, 2 faded turquoise bags, 3 muted violet bags.\n' +
      'dull olive bags contain 2 dotted teal bags.\n' +
      'mirrored lime bags contain 4 dark violet bags, 4 muted yellow bags.\n' +
      'wavy green bags contain 5 bright lime bags.\n' +
      'drab purple bags contain 2 striped turquoise bags, 4 clear silver bags, 1 muted lime bag.\n' +
      'clear cyan bags contain 5 light lavender bags.\n' +
      'dim black bags contain 3 dull black bags.\n' +
      'posh gray bags contain 4 mirrored magenta bags.\n' +
      'dotted yellow bags contain 4 light maroon bags, 1 clear blue bag, 5 dark maroon bags.\n' +
      'mirrored olive bags contain 2 dark violet bags, 2 dull crimson bags, 5 dim salmon bags, 5 bright tan bags.\n' +
      'dark blue bags contain 3 dull aqua bags, 1 dim teal bag.\n' +
      'dull bronze bags contain 4 striped coral bags.\n' +
      'drab maroon bags contain 2 dark bronze bags, 1 wavy blue bag.\n' +
      'mirrored lavender bags contain 4 clear black bags.\n' +
      'dim beige bags contain 3 shiny silver bags, 2 dark purple bags, 3 dull green bags.\n' +
      'light violet bags contain 1 muted gray bag, 5 wavy tomato bags.\n' +
      'striped chartreuse bags contain 3 dull tan bags, 1 dim salmon bag.\n' +
      'posh red bags contain 2 clear crimson bags, 2 striped coral bags, 2 bright red bags.\n' +
      'wavy beige bags contain 5 muted silver bags, 5 pale teal bags.\n' +
      'light gray bags contain 5 drab indigo bags, 3 posh crimson bags, 1 dark tan bag, 2 pale red bags.\n' +
      'muted white bags contain 3 wavy fuchsia bags.\n' +
      'pale violet bags contain 4 wavy tan bags, 2 plaid yellow bags.\n' +
      'drab fuchsia bags contain 1 plaid lavender bag, 2 pale lime bags.\n' +
      'clear green bags contain 4 light indigo bags.\n' +
      'vibrant turquoise bags contain 2 vibrant tan bags, 3 clear silver bags.\n' +
      'faded green bags contain 5 striped orange bags, 4 bright fuchsia bags.\n' +
      'striped tan bags contain 4 wavy silver bags.\n' +
      'clear white bags contain 3 vibrant fuchsia bags, 2 pale silver bags, 1 vibrant indigo bag, 3 shiny silver bags.\n' +
      'dim cyan bags contain 2 mirrored black bags, 2 plaid chartreuse bags, 4 bright gold bags.\n' +
      'muted gray bags contain 3 mirrored violet bags, 4 dim yellow bags.\n' +
      'mirrored maroon bags contain 5 clear crimson bags, 2 clear gray bags, 1 dotted salmon bag.\n' +
      'dim bronze bags contain 2 striped plum bags, 2 bright orange bags.\n' +
      'shiny tomato bags contain 4 dim yellow bags, 2 faded bronze bags, 1 drab maroon bag, 3 dim gold bags.\n' +
      'muted olive bags contain 2 mirrored yellow bags, 4 bright olive bags.\n' +
      'shiny brown bags contain 3 bright coral bags.\n' +
      'clear blue bags contain 2 pale green bags, 2 light violet bags, 4 plaid crimson bags.\n' +
      'faded tan bags contain 4 dim crimson bags, 3 mirrored turquoise bags, 3 drab gold bags.\n' +
      'muted cyan bags contain 2 drab silver bags.\n' +
      'mirrored red bags contain 1 bright gold bag.\n' +
      'faded salmon bags contain 5 posh red bags, 4 dull crimson bags, 3 dotted salmon bags, 5 shiny olive bags.\n' +
      'dark purple bags contain 5 dim magenta bags.\n' +
      'dotted lime bags contain 4 posh fuchsia bags, 3 wavy tan bags, 2 mirrored aqua bags, 1 shiny aqua bag.\n' +
      'posh tan bags contain 3 plaid tan bags, 2 drab fuchsia bags.\n' +
      'dotted teal bags contain 4 dull crimson bags, 2 bright lavender bags, 2 wavy tan bags, 4 muted crimson bags.\n' +
      'clear purple bags contain 4 shiny aqua bags, 1 dim cyan bag, 3 dotted black bags, 4 dull gray bags.\n' +
      'light gold bags contain 2 dotted magenta bags, 5 dark olive bags, 3 dim cyan bags, 2 dark indigo bags.\n' +
      'mirrored silver bags contain 2 plaid black bags, 3 vibrant beige bags, 3 mirrored purple bags, 3 dotted lime bags.\n' +
      'posh black bags contain 4 wavy violet bags, 3 plaid teal bags.\n' +
      'faded silver bags contain 2 vibrant purple bags, 5 shiny olive bags.\n' +
      'drab teal bags contain 2 dotted salmon bags, 4 posh beige bags, 4 mirrored tan bags, 1 muted green bag.\n' +
      'dark maroon bags contain 2 dark tan bags, 5 mirrored gold bags, 2 dim plum bags.\n' +
      'striped plum bags contain 3 striped coral bags, 5 clear brown bags, 1 striped brown bag.\n' +
      'striped bronze bags contain 4 drab yellow bags, 4 striped chartreuse bags, 5 posh plum bags, 3 clear blue bags.\n' +
      'drab plum bags contain 1 shiny gold bag, 5 vibrant tan bags, 3 light gold bags.\n' +
      'clear fuchsia bags contain 1 vibrant red bag.\n' +
      'dark silver bags contain 5 clear salmon bags, 1 faded yellow bag, 1 shiny lavender bag, 3 wavy fuchsia bags.\n' +
      'striped lime bags contain 2 dim tomato bags, 3 light fuchsia bags, 1 light lime bag.\n' +
      'wavy salmon bags contain 1 shiny tomato bag, 1 light tomato bag.\n' +
      'dim maroon bags contain 4 faded beige bags, 2 bright turquoise bags, 4 dull purple bags, 4 vibrant olive bags.\n' +
      'faded chartreuse bags contain 4 mirrored blue bags, 5 posh white bags, 2 wavy magenta bags.\n' +
      'clear magenta bags contain 2 muted bronze bags, 5 dim yellow bags, 2 dotted lime bags.\n' +
      'bright silver bags contain 2 bright gold bags, 4 wavy yellow bags.\n' +
      'dull violet bags contain 3 faded beige bags, 1 mirrored orange bag, 1 mirrored aqua bag.\n' +
      'vibrant cyan bags contain 2 clear aqua bags, 2 dark maroon bags, 5 pale tan bags.\n' +
      'light chartreuse bags contain 1 wavy gold bag, 2 posh tomato bags, 2 clear silver bags.\n' +
      'dotted olive bags contain 5 wavy crimson bags, 1 drab tomato bag.\n' +
      'posh aqua bags contain 3 striped brown bags.\n' +
      'posh orange bags contain 2 wavy coral bags.\n' +
      'dull cyan bags contain 1 dark tan bag, 5 dull gray bags, 3 drab turquoise bags, 4 shiny aqua bags.\n' +
      'muted teal bags contain 4 dull blue bags.\n' +
      'bright turquoise bags contain 5 dull bronze bags, 1 plaid lavender bag.\n' +
      'plaid tomato bags contain 2 muted lime bags, 1 light indigo bag, 5 posh tomato bags.\n' +
      'dim salmon bags contain 1 dark indigo bag, 5 plaid brown bags, 3 clear crimson bags, 4 clear silver bags.\n' +
      'posh brown bags contain 3 clear silver bags, 5 faded cyan bags, 4 posh crimson bags.\n' +
      'dark turquoise bags contain 1 drab crimson bag, 5 striped coral bags.\n' +
      'dull crimson bags contain no other bags.\n' +
      'striped teal bags contain 5 plaid lavender bags, 4 faded red bags.\n' +
      'dotted blue bags contain 5 muted beige bags.\n' +
      'vibrant plum bags contain 1 pale lime bag, 1 posh red bag, 1 dull bronze bag, 3 drab silver bags.\n' +
      'wavy coral bags contain 4 mirrored magenta bags, 5 dim yellow bags, 4 bright red bags, 2 posh crimson bags.\n' +
      'dark chartreuse bags contain 5 dotted fuchsia bags, 3 mirrored silver bags, 5 mirrored aqua bags, 4 dim cyan bags.\n' +
      'vibrant teal bags contain 3 vibrant silver bags.\n' +
      'shiny beige bags contain 5 posh teal bags.\n' +
      'dim olive bags contain 3 clear gray bags, 4 wavy gold bags.\n' +
      'drab yellow bags contain 4 light chartreuse bags, 3 striped crimson bags, 2 faded gray bags.\n' +
      'dull chartreuse bags contain 1 light lavender bag.\n' +
      'dotted silver bags contain no other bags.\n' +
      'shiny blue bags contain 5 dull brown bags, 2 dark coral bags, 4 shiny crimson bags.\n' +
      'mirrored black bags contain 5 mirrored magenta bags, 1 striped turquoise bag, 2 plaid cyan bags.\n' +
      'dull black bags contain 4 dim purple bags, 4 dark salmon bags, 2 mirrored gold bags.\n' +
      'mirrored beige bags contain 4 striped fuchsia bags, 4 plaid black bags, 5 dim red bags, 5 light green bags.\n' +
      'dim chartreuse bags contain 4 shiny yellow bags.\n' +
      'shiny teal bags contain 1 vibrant maroon bag.\n' +
      'dim tomato bags contain 5 plaid tomato bags, 5 mirrored violet bags, 2 mirrored orange bags.\n' +
      'vibrant beige bags contain 1 plaid black bag, 3 dotted salmon bags, 2 posh fuchsia bags.\n' +
      'dull aqua bags contain 5 wavy tan bags, 3 bright olive bags.\n' +
      'pale lime bags contain 5 bright turquoise bags, 5 dim yellow bags, 3 shiny orange bags.\n' +
      'bright orange bags contain 4 muted gold bags, 1 clear white bag.\n' +
      'drab salmon bags contain 2 dark fuchsia bags, 2 dull gray bags.\n' +
      'mirrored salmon bags contain 3 posh plum bags, 1 dotted silver bag, 1 clear plum bag, 5 dull black bags.\n' +
      'shiny silver bags contain 4 drab lavender bags, 2 dim violet bags, 5 dark aqua bags, 2 vibrant chartreuse bags.\n' +
      'plaid coral bags contain 4 dim blue bags, 1 vibrant lime bag.\n' +
      'mirrored white bags contain 2 pale gold bags, 3 shiny green bags, 5 striped white bags.\n' +
      'pale gray bags contain 5 mirrored gold bags, 1 wavy silver bag, 5 posh green bags, 1 mirrored red bag.\n' +
      'pale white bags contain 4 shiny turquoise bags, 4 bright plum bags, 5 dotted bronze bags.\n' +
      'muted fuchsia bags contain 5 plaid turquoise bags, 2 dark aqua bags, 4 pale brown bags, 4 striped plum bags.\n' +
      'striped yellow bags contain 5 posh red bags, 1 plaid black bag.\n' +
      'plaid silver bags contain 2 dark indigo bags, 3 clear teal bags, 3 dotted black bags.\n' +
      'plaid black bags contain 3 dull crimson bags.\n' +
      'vibrant lime bags contain 1 dotted fuchsia bag, 4 dull bronze bags, 4 dark aqua bags, 1 dark salmon bag.\n' +
      'dotted white bags contain 5 dim red bags.\n' +
      'light aqua bags contain 5 mirrored aqua bags, 2 striped brown bags, 4 posh crimson bags.\n' +
      'striped brown bags contain 1 dotted silver bag, 5 clear beige bags.\n' +
      'vibrant red bags contain 3 bright olive bags, 3 plaid chartreuse bags, 3 light olive bags, 4 dim violet bags.\n' +
      'dim teal bags contain 3 clear violet bags.\n' +
      'bright lime bags contain 2 dull lavender bags, 4 pale turquoise bags.\n' +
      'striped crimson bags contain 5 bright gray bags, 4 dark green bags, 4 posh plum bags, 5 shiny coral bags.\n' +
      'mirrored tomato bags contain 1 wavy tan bag.\n' +
      'dull blue bags contain 5 bright turquoise bags, 2 striped brown bags.\n' +
      'mirrored yellow bags contain 4 vibrant purple bags, 4 faded bronze bags, 2 dull lavender bags, 3 light plum bags.\n' +
      'plaid gold bags contain 5 striped olive bags, 5 dotted chartreuse bags.\n' +
      'dotted coral bags contain 2 bright teal bags.\n' +
      'wavy crimson bags contain 5 dotted salmon bags, 1 dull crimson bag.\n' +
      'dark aqua bags contain 3 dull crimson bags, 5 light aqua bags, 3 mirrored purple bags, 1 striped brown bag.\n' +
      'vibrant yellow bags contain 1 faded beige bag, 3 dark brown bags, 1 wavy bronze bag.\n' +
      'wavy teal bags contain 5 dotted magenta bags.\n' +
      'drab white bags contain 3 pale blue bags.\n' +
      'muted salmon bags contain 4 posh salmon bags, 1 bright chartreuse bag.\n' +
      'light purple bags contain 5 dark maroon bags.\n' +
      'faded black bags contain 4 dull gold bags.\n' +
      'muted turquoise bags contain 1 wavy silver bag, 4 clear purple bags.\n' +
      'plaid chartreuse bags contain 1 posh crimson bag, 5 striped brown bags.\n' +
      'vibrant tan bags contain 2 dull blue bags, 1 posh black bag, 1 faded red bag, 5 plaid magenta bags.\n' +
      'shiny orange bags contain 5 vibrant chartreuse bags, 3 shiny gold bags.\n' +
      'shiny lavender bags contain 2 posh teal bags.\n' +
      'pale black bags contain 5 dark brown bags.\n' +
      'shiny cyan bags contain 5 wavy tomato bags, 3 bright bronze bags, 3 faded crimson bags.\n' +
      'faded olive bags contain 3 clear aqua bags.\n' +
      'dark violet bags contain 4 faded red bags.\n' +
      'light orange bags contain 1 posh aqua bag, 2 light crimson bags, 2 dark maroon bags.\n' +
      'drab silver bags contain 1 pale blue bag.\n' +
      'plaid bronze bags contain 5 mirrored orange bags, 4 plaid cyan bags, 1 dotted black bag.\n' +
      'plaid violet bags contain 1 plaid fuchsia bag, 5 clear teal bags.\n' +
      'clear turquoise bags contain 4 dim yellow bags, 5 plaid teal bags, 3 plaid red bags, 1 dotted salmon bag.\n' +
      'plaid lavender bags contain 3 clear silver bags, 4 dull bronze bags.\n' +
      'mirrored green bags contain 3 striped lavender bags.\n' +
      'faded white bags contain 2 light chartreuse bags.\n' +
      'bright crimson bags contain 2 mirrored purple bags.\n' +
      'dotted beige bags contain 1 pale salmon bag, 5 dotted teal bags, 5 light lavender bags, 3 wavy violet bags.\n' +
      'pale green bags contain 2 dark gold bags, 4 clear gray bags.\n' +
      'dull indigo bags contain 2 striped brown bags, 3 plaid plum bags.\n' +
      'shiny yellow bags contain 3 striped silver bags, 2 mirrored plum bags, 1 muted red bag, 5 clear gold bags.\n' +
      'bright maroon bags contain 2 muted crimson bags, 2 plaid chartreuse bags, 1 dim violet bag, 1 plaid blue bag.\n' +
      'vibrant orange bags contain 5 posh plum bags, 4 shiny gold bags.\n' +
      'faded fuchsia bags contain 2 dotted aqua bags.\n' +
      'bright indigo bags contain 3 shiny coral bags, 1 muted salmon bag, 2 clear white bags, 1 vibrant maroon bag.\n' +
      'shiny indigo bags contain 4 dark red bags, 2 pale lime bags.\n' +
      'light cyan bags contain 2 clear black bags, 2 mirrored aqua bags, 1 faded beige bag, 2 faded salmon bags.\n' +
      'faded gold bags contain 5 muted lime bags, 3 plaid fuchsia bags.\n' +
      'muted coral bags contain 2 faded indigo bags, 1 dim beige bag, 5 dotted orange bags, 4 posh black bags.\n' +
      'drab gray bags contain 5 clear magenta bags, 5 bright tomato bags, 1 dull gold bag.\n' +
      'vibrant salmon bags contain 4 bright gold bags.\n' +
      'dark red bags contain 5 posh black bags, 4 faded teal bags.\n' +
      'wavy blue bags contain 3 dim green bags, 4 dull green bags, 2 posh aqua bags.\n' +
      'mirrored turquoise bags contain 5 dull lime bags, 4 dark gray bags, 1 striped cyan bag, 4 muted gold bags.\n' +
      'wavy chartreuse bags contain 1 pale brown bag, 4 shiny chartreuse bags, 4 wavy fuchsia bags.\n' +
      'dim red bags contain 1 bright blue bag, 3 clear purple bags, 2 wavy crimson bags, 5 shiny black bags.\n' +
      'dull gold bags contain 4 wavy blue bags.\n' +
      'faded blue bags contain 1 plaid turquoise bag, 2 vibrant indigo bags.\n' +
      'shiny aqua bags contain 4 plaid cyan bags, 4 posh crimson bags.\n' +
      'bright salmon bags contain 1 posh red bag, 1 shiny orange bag, 1 vibrant crimson bag.\n' +
      'pale yellow bags contain 4 plaid cyan bags.\n' +
      'plaid magenta bags contain 3 plaid brown bags, 5 pale yellow bags, 5 drab fuchsia bags, 1 clear black bag.\n' +
      'vibrant maroon bags contain 4 dull tomato bags, 1 dotted indigo bag, 2 plaid teal bags, 2 shiny gold bags.\n' +
      'drab orange bags contain 3 wavy coral bags.\n' +
      'pale aqua bags contain 5 wavy lime bags, 5 drab turquoise bags.\n' +
      'shiny crimson bags contain 3 posh black bags, 5 drab fuchsia bags, 1 plaid fuchsia bag, 4 posh plum bags.\n' +
      'pale purple bags contain 2 clear green bags, 2 striped crimson bags, 4 drab indigo bags.\n' +
      'faded magenta bags contain 5 light red bags.\n' +
      'shiny tan bags contain 5 plaid silver bags, 3 light lavender bags, 4 wavy purple bags.\n' +
      'vibrant indigo bags contain 5 plaid beige bags.\n' +
      'wavy turquoise bags contain 4 dark teal bags, 2 dark cyan bags, 4 mirrored olive bags, 5 bright red bags.\n' +
      'striped blue bags contain 1 vibrant lime bag, 3 vibrant indigo bags, 1 pale maroon bag, 2 dark white bags.\n' +
      'faded tomato bags contain 3 plaid tan bags, 4 pale tan bags, 5 wavy violet bags, 3 pale lime bags.\n' +
      'bright green bags contain 1 bright purple bag, 5 posh magenta bags.\n' +
      'dark beige bags contain 4 light green bags, 4 light magenta bags, 5 dotted lime bags, 4 plaid salmon bags.\n' +
      'plaid green bags contain 2 pale salmon bags.\n' +
      'bright red bags contain 2 dotted silver bags.\n' +
      'drab lime bags contain 3 dotted bronze bags.\n' +
      'muted indigo bags contain 4 posh gray bags, 2 dark lavender bags, 2 plaid chartreuse bags, 2 pale red bags.\n' +
      'muted tan bags contain 2 muted brown bags, 3 dull maroon bags.\n' +
      'plaid turquoise bags contain 3 clear teal bags, 2 dull tomato bags, 5 dotted purple bags, 1 posh salmon bag.\n' +
      'drab aqua bags contain 3 bright lime bags, 5 posh red bags.\n'

  const result = day7.solvePart1(input)

  expect(result).toEqual(335)
})
