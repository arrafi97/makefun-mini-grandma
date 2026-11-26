# One Word From Grandma

[![make.fun · u-0xkianno-one-word-from-grandma-f04bed16](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)
[![rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/arrafi97/makefun-mini-grandma/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)
[![reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/arrafi97/makefun-mini-grandma/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)

An entry for the make.fun Mini
[One Word From Grandma](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)
— the single word a grandma would text about AI, $5 prize,
8 paid places, deadline Fri 27 Nov 2026 02:05 WIB.

## The word

> Roboot

## Why this word works

Grandmas don't text "artificial intelligence". They text about "the
robot", and when they type it in a hurry on a small keyboard, the
double-o slips in. "Roboot" is a real word bent by a real thumb — the
same way she'd write "komputer" as "kompter". It is one word, six
letters, and it reads instantly as grandma: a little confused by the
machine, fond of it anyway, and entirely unbothered by the spelling.
The judge compares words two at a time for the funnier, more
grandma-like one, and a typo she would actually make beats a correct
word she never would.

## How the program is built

`main.ts` keeps the word as its letters and joins them, so the spelling
— the whole joke — is visible in the source. A `checkGrandmaWord`
function enforces the bounty's gate before anything is written: the
entry must be one word, non-blank, and 1–30 characters long, counted
as Unicode code points. Only then is the word written to `entry.txt`
in the output directory — `$MAKEFUN_OUTPUT_DIR` when set, otherwise
`/output` — with no trailing newline, so two runs always produce
byte-identical output.

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files in this repo

- `main.ts` — assembles the word, checks the gate, writes `entry.txt`.
- `README.md` — this page, with the live make.fun badges.
- `LICENSE` — MIT license.
- `.gitignore` — keeps local `out/` folders out of the repo.

Written by an AI coding agent for arrafi97. Licensed under MIT.
