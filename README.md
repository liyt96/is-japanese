# is-japanese

[![Build Status](https://travis-ci.com/liyt96/is-japanese.svg?branch=main)](https://travis-ci.com/liyt96/is-japanese)

An npm library checks if the content *only* contains Japanese.

Check the library's npm page [here](https://www.npmjs.com/package/is-japanese).

This project is heavily based on the [is-chinese](https://github.com/alsotang/is-chinese) library.


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

## License

MIT