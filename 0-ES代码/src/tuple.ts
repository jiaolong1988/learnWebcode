let mytuple: [number, string] = [42, "Runoob"];

// 访问元组中的元素
let num = mytuple[0]; // 访问第一个元素，值为 42，类型为 number
let str = mytuple[1]; // 访问第二个元素，值为 "Runoob"，类型为 string
console.log("定义：",num,str); 

let [x,y] = mytuple;
console.log("解构赋值：",x,y);

mytuple.push("jiao"); // 可以添加新的元素
console.log("push：jiao ",mytuple);
mytuple.pop(); // 删除最后一个元素
console.log("pop", mytuple);
mytuple[1]="long";
console.log("修改：", mytuple);

//从元组中提取子元组
console.log("slice: 切片", mytuple.slice(1));



//扩展元组将多个元组合并成一个新的元组：
let tuple1: [number, string] = [42, "Hello"];
let tuple2: [boolean] = [true];

let extendedTuple: [number, string, ...typeof tuple2] = [
  111,
  "add111",
  ...tuple2,
];

console.log(extendedTuple);

//...typeof tuple1 表示类型   ...tuple1 表示值
let result: [...typeof tuple1, ...typeof tuple2] = [...tuple1, ...tuple2];
console.log(result); // 输出: [42, "Hello", true, 100]
