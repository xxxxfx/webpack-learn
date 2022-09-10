var message = "hello word";
// console.log(message)
// // 类型 ： any number string boolean 数组 元祖（已知数量和类型） enum void null undefined never
// let x:any = 1;
// // 定义存储类型的数组
// let anyList: any[] = [1, false];
// let y: number|null|undefined
var x;
x = (function () { throw new Error('exception'); })();
// a=(() => {throw new Error('expext')})();
