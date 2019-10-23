// VSCode 限定だが
// https://code.visualstudio.com/docs/nodejs/working-with-javascript#_type-checking-javascript
// https://ginpen.com/2018/08/17/vs-code-reads-js-as-ts/
//
// tsconfig で checkJs を true にしてれば良さそうだね

import { addition } from './calc';

// TypeScript で書いた addition の型をきちんと見てくれている👀
console.log(addition('hoge', 2));

/**
 * @param {string} x
 * @return {string}
 */
export const jsFunction = x => x;

// JS の関数でも型を見てくれてる👀
const resultJSFunction = jsFunction(1);
