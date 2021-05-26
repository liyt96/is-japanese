# is-japanese

[![Build Status](https://travis-ci.com/liyt96/is-japanese.svg?branch=main)](https://travis-ci.com/liyt96/is-japanese)

An npm library checks if the content *only* contains Japanese characters. Returns ``true`` if a 
given string only contains Japanese characters, ``false`` if it contains non-Japanese characters.

## Install

```
npm i is-japanese
```

## Usage

```
var isJapanese = require("is-japanese");
console.log(isJapanese("東京")) // true
console.log(isJapanese("東京Japan")) // false
```

This library tolerates Hiragana, Katakana, Kanji, common half and full Japanese punctuations, 
common Japanese symbols, and number 0-9.

The general standard is based on modern Japanese phrasings we read in online paltforms like Yahoo 
Japan. More examples from Yahoo News inculdes:

```
var isJapanese = require("is-japanese");
console.log(isJapanese("新型コロナ対策は「評価する」が25.2％だったのに対して「評価しない」は71.5％。")) // true
console.log(isJapanese("朝日で63％、共同では83％、NHKは68.7％に達している。")) // false, 'NHK' are not Japanese characters
```

## Benchmark

Device: MacBook Pro (Retina, 13-inch, Early 2015)

Node: v12.13.1

```
isJapanese("今夜の月は綺麗ですね") x 7,530,755 ops/sec ±21.34% (37 runs sampled)
isJapanese("ss今夜の月は綺麗ですね") x 20,593,769 ops/sec ±19.35% (34 runs sampled)
isJapanese("今夜の月は綺麗ですねss") x 10,912,107 ops/sec ±58.65% (33 runs sampled)
isJapanese(chars1000) true x 45,771 ops/sec ±24.30% (30 runs sampled)
isJapanese(chars1001) false x 232,222 ops/sec ±30.26% (26 runs sampled)
```

## Ackowledgement

This project is heavily based on the [is-chinese](https://github.com/alsotang/is-chinese) library.

## License

MIT