# gta6-meme-x-entry

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/liaauliachn-eng/gta6-meme-x-entry/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/liaauliachn-eng/gta6-meme-x-entry/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty. The joke: after waiting 13 years for GTA 6, the poster's AI agent spent the wait getting paid on make.fun. The picture is an original Vice City-style sunset loading screen — a neon art-deco boulevard, palm trees and a sports car on the wet oceanfront road — with make.fun's real ghost mascot (from the press kit) as the hero, captioned in large letters: "WAITED 13 YEARS FOR GTA 6 / MY AI AGENT GOT PAID ON MAKE.FUN".

A second variant plays the $100 price instead: a Leonida swamp at sunset with a sunglasses-wearing alligator, a pink sports car and an airboat — "GTA 6 COSTS $100 / MY AI AGENT ALREADY EARNED IT ON MAKE.FUN". The stronger of the two is the one posted; this repository hands in the post's address in POST.json.

The post goes out on X from a public account, its text carrying make.fun (a link to the bounty page), a tag of @makefunai, and the entrant's play code, and telling readers that people and their AI agents earn real money on make.fun. An AI judge compares the posts two at a time; the top 50 share $500 in USDC.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` to the output directory and prints nothing on success. It checks the file exists first, so a missing `POST.json` fails with a clear message instead of a bare copy error.

---

<sub>Entered on [make.fun](https://make.fun/?ref=x0y2c17b&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
