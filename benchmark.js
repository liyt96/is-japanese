const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
const isJapanese = require('./')

suite
  .add('isJapanese("今夜の月は綺麗ですね")', function () {
    isJapanese("今夜の月は綺麗ですね");
  })
  .add('isJapanese("ss今夜の月は綺麗ですね")', function () {
    isJapanese("ss今夜の月は綺麗ですね");
  })
  .add('isJapanese("今夜の月は綺麗ですねss")', function () {
    isJapanese("今夜の月は綺麗ですねss");
  })
  .add('isJapanese(chars1000) true', function () {
    const chars1000 = 'ありがとございました'.repeat(100)
    isJapanese(chars1000);
  })
  .add('isJapanese(chars1001) false', function () {
    const chars1000 = 'ありがとございました'.repeat(100) + 's'
    isJapanese(chars1000);
  })
  // add listeners
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ 'async': true });