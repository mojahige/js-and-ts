// VSCode 限定だが、 @ts-check つけると JS の方でも
// Type Checking してくれる
//@ts-check

import { addition } from './ts/calc';

console.log(addition('hoge', 2));

// 'checkJs' をつけると、JSDoc を見て TS のファイルでチェックしてくれる。
/**
 * @param {string} x
 * @return {string}
 */
export const hoge = x => x;

