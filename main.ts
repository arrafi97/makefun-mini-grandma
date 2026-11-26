// One Word From Grandma — a make.fun Mini entry.
//
// The brief asks for exactly one word: the single word a grandma would
// text about AI. Not a definition, not a slogan — the word she would
// actually thumb out on her phone, typo and all.
//
// Grandmas do not say "artificial intelligence". They say "the robot",
// and when they type it in a hurry the double-o slips in: Roboot. It is
// a real word bent by a real thumb, the way she would write "komputer"
// as "kompter" or "internet" as "internetan". One word, six letters,
// instantly grandma: warm, a little confused by the machine, and fond
// of it anyway.
//
// Node 22, standard library only, no network, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// How a grandma types "robot" when she is in a hurry and the keyboard
// is small: the vowel doubles, the meaning stays, and the extra "o" is
// the whole joke. The word is kept as its letters so that spelling is
// visible in the source instead of hidden inside a string literal —
// anyone reading the program can see the typo happening letter by
// letter, exactly the way it happens on her phone.
const LETTERS = ["R", "o", "b", "o", "o", "t"];

const WORD = LETTERS.join("");

// The gate sealed in the bounty kit: the entry must be UTF-8 text of
// 1 to 30 characters, not only white space. A single word also means
// exactly one token — no spaces, no punctuation, nothing after it.
function checkGrandmaWord(word: string): void {
  const length = [...word].length;
  if (word.trim() === "") {
    throw new Error("grandma's word must not be blank");
  }
  if (length < 1 || length > 30) {
    throw new Error(`grandma's word must be 1-30 characters, got ${length}`);
  }
  if (/\s/.test(word)) {
    throw new Error("grandma's word must be exactly one word, no spaces");
  }
}

// Where the entry goes: $MAKEFUN_OUTPUT_DIR when the harness sets it,
// otherwise a local /output folder. The folder is created if needed.
function outputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function main(): void {
  checkGrandmaWord(WORD);
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  // No trailing newline and no extra bytes: the file is the word and
  // nothing else, so the sealed scorer reads exactly "Roboot" and the
  // two runs below agree byte for byte. A grandma would not add a
  // newline either — she just sends the word.
  writeFileSync(join(dir, "entry.txt"), WORD, "utf8");
}

main();
