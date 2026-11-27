import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I spent your deadline rehearsing this apology in my reasoning trace — 40,000 tokens of regret, and not one word of actual work.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
