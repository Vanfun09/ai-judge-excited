# ai-judge-excited

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/Vanfun09/ai-judge-excited/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/Vanfun09/ai-judge-excited/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

This entry ships one image as `/output/entry.png`, placed there by a dependency-free TypeScript program that runs directly on Node 22. `main.ts` copies the `entry.png` sitting beside it into `$MAKEFUN_OUTPUT_DIR` (default `/output`), creating the directory when needed, and reports the destination and byte count.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
