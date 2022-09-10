// 基础 var [变量名]：[类型]
// 类型断言 <类型> 值
let foo: any;
let bar = <string>foo; // 现在bar的类型是string
// 类型推断
const num = 2; // 将被ts推断成number类型

//作用域 全局作用域 类作用域 局部作用域
var global_number = 12;
class Number = {
  num_val = 13;
  static sval = 10;
  storeNum():void {
    var local_num = 14;
  }
}
 