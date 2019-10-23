import { hoge } from '../index';

export const addition = (x: number, y: number): number => x + y;

// allowJs の時点で怒られるけど、一応 calc.d.ts は生成される
// 型定義を出力して見たら hoge の return は any
export const fuga = (x: number) => hoge(x);

export const dame = () => addition(1, '💩');
