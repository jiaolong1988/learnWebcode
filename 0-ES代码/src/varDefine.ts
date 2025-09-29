//1.常见类型定义
let nameX: string = "Alice";
let greeting: string = `Hello, ${nameX}! Welcome to TypeScript.`;

let age: number = 25;
let temperature: number = 36.5;
let isCompleted: boolean = false;

console.log(greeting, age, temperature, isCompleted); 

/* 2.数组定义
    表示一组相同类型的元素。可以使用 type[] 或 Array<type> 两种方式表示。*/
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];
console.log(names[0], numbers[1]);



// 6、enum 枚举
// 用来定义一组命名常量。默认情况下枚举的值从 0 开始递增。
enum Color {
  Red,
  Green=111,
  Blue
}
let favoriteColor: Color = Color.Green;
console.log(Color.Red);
console.log(Color.Green);
console.log(Color.Blue);


// 5、tuple 元组
// 表示已知数量和类型的数组。每个元素可以是不同的类型，适合表示固定结构的数据。
let personTuple: [string, number] = ["Alice", 25];
console.log("tuple-->", personTuple[0]);
console.log("tuple-->", personTuple[1]);


// 11、object 对象类型
// 表示非原始类型的值，适用于复杂的对象结构。
let personObj = { name: "Alice", age: 30 , sex:"M"};
//解构赋值
let { sex } = personObj;
console.log(personObj.name, personObj["age"], sex); // 输出: Alice

// 12、联合类型 (Union)
// 表示一个变量可以是多种类型之一。通过 | 符号实现。
let id: string | number;
id = 456;
id = "123";

if (typeof id === "string") {
  console.log("string id->",id)
}

// 3.类型别名 (type) 可以为复杂的类型定义简短的别名，便于代码复用。
type StringOrNumber = string | number;
let value: StringOrNumber = 42;
console.log()

