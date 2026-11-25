# The Moon Finally Answers Back

A make.fun one-line bounty entry. The program writes a single original
line — the Moon finally replying to everyone who has ever stared up at
it, wished on it, howled at it, or made it a late-night promise — to
`entry.txt`.

## The line

> Four billion years of wishes, howls, and 3 a.m. promises to change — and not one of you has ever wished me a night off.

## Run it

Requires Node 22+ (standard library only, no dependencies):

```sh
node main.ts
```

This writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output/entry.txt`). To try it locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/moon-out node main.ts
cat /tmp/moon-out/entry.txt
```

The line is 1–240 characters, UTF-8, and not only whitespace, as the
competition gate requires.
