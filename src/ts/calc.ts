import { hoge } from '../index';

export const addition = (x: number, y: number): number => x + y;

// 型定義を出力して見たら hoge の return は any
// (allowJs の時点で怒られるけど、一応生成はされた)
export const fuga = (x: number) => hoge(x);

export const dame = () => addition(1, '');
