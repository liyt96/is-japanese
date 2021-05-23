const isJapanese = require('../')
const chai = require('chai')
const assert = chai.assert;


describe('test/is_japanese.test.js', function () {
  it('isJapanese function testing', function () {
    // Genral test
    assert.isTrue(isJapanese('おはよう'));
    assert.isFalse(isJapanese('おはようaa'))
    assert.isFalse(isJapanese('aa'))
    assert.isTrue(isJapanese("おはよう?"))
    assert.isTrue(isJapanese('こんばんは、今夜の月は綺麗ですね。'))
    assert.isFalse(isJapanese('aaこんばんは、今夜の月は綺麗ですね。'))
    assert.isFalse(isJapanese('こんばんは、今夜の月は綺麗ですねaa。'))
    assert.isTrue(isJapanese('\u6771\u4eac'))
    // News test (Sampled form Yahoo Japan News)
    assert.isTrue(isJapanese('一転、宣言発令で「もうめちゃくちゃ」政府内でも混乱?'));
    assert.isTrue(isJapanese('北海道などへのまん延防止措置の方針が、緊急事態宣言の発令に切り替わった背景に、何があったのだろうか。'));
    assert.isTrue(isJapanese('政府関係者は、「分科会で政府の諮問がひっくり返ったのは初めてだ」と驚きを示す一方、菅首相の周辺は、「それだけ事態が深刻だということだ」と指摘している。'));
    assert.isTrue(isJapanese('加藤官房長官「もともと特措法の中で、（分科会に）意見を聞かなければならないので、別にプロセスに何か変更があったわけではない」'));
    assert.isTrue(isJapanese('ただ、北海道への宣言発令について、菅首相の周辺はこれまで、「全土にまん延しているわけではない」と慎重姿勢を示し、政府高官も14日朝の時点で、「まったく議論していない」と打ち消していただけに、政府内でも混乱が起きているもよう。'));
    assert.isTrue(isJapanese('新型コロナ対策については「評価する」が23％だった一方、「評価しない」が67％に上った。東京五輪・パラリンピックは「中止する」が最も多く43％、「再び延期する」が40％で、合わせて83％に上った。「今年の夏に開催する」は14％にとどまっている。'));
    assert.isTrue(isJapanese('新型コロナ対策は「評価する」が25.2％だったのに対して「評価しない」は71.5％。東京五輪・パラリンピックは「中止すべきだ」が59.7％。「無観客で開催」が25.2％、「観客数を制限して開催」が12.6％で、両者合わせても37.8％だった。'));
    assert.isFalse(isJapanese('こうしてみると、菅内閣の支持率低下は明らかだ。批判が多いのは、新型コロナと東京五輪問題への対応である。ただし、それで政権は崩壊寸前なのか、と言えば、そうとは言えない。内閣支持率と自民党支持率を合わせた「青木率」は朝日で63％、共同では83％、NHKは68.7％に達している。'));
    assert.isTrue(isJapanese('県によると、21日まで直近1週間の人口10万人当たりの新規感染者数は73.55人で、北海道に次いで全国2番目に多い。大型連休後に急増しており、県の担当者は「県外から来た方々が感染源になっている可能性はある」と指摘。県は医療崩壊を避けるため、早期の封じ込めを図る考えだ。'));

  })
})