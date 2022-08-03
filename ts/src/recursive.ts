const DODOSUKO = ['ドド', 'スコ'] as const;
const dodosukoHistory: typeof DODOSUKO[number][] = [];
let count = 0;

const love = (): void => {
  const randomDodosuko = DODOSUKO[Math.round(Math.random())]; // ドドorスコ
  console.log(count++, randomDodosuko);
  dodosukoHistory.push(randomDodosuko); // 履歴に追加

  // 12 = 最大履歴数 = ドド,スコ,スコ,スコ,ドド,スコ,スコ,スコ,ドド,スコ,スコ,スコ
  if (dodosukoHistory.length > 12) dodosukoHistory.shift();

  if (dodosukoHistory.join('') === 'ドドスコスコスコドドスコスコスコドドスコスコスコ') {
    console.log('\x1b[45m', 'ラブ注入♡ ', '\x1b[49m');
    return;
  }

  // 5000回ごとにsetTimeoutでタスクキューに移し、それまでのstackをポップさせる（Maximum call stack size exceeded回避）
  count % 5000 === 0 ? setTimeout(love, 0) : love();
};

love();
