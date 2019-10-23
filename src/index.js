// VSCode 限定だが、 @ts-check つけると JS の方でも
// Type Checking してくれる
//@ts-check

import { addition } from './ts/calc';

// 他のエディタはわからないけど VSCode だと怒られる
// TypeScript で書いた addition の型をきちんと見てくれている
console.log(addition('hoge', 2));

// 'checkJs' をつけると、JSDoc を見て TS のファイルでチェックしてくれる。
/**
 * @param {string} x
 * @return {string}
 */
export const hoge = x => x;
