import { jsFunction } from './index';

export const addition = (x: number, y: number): number => x + y;

// JS の関数でも型見てくれてる👀
export const useJSFunction = (x: number) => jsFunction(x);
