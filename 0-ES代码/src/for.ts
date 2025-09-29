//https://www.runoob.com/typescript/ts-tutorial.html

let message: string = "Hello, TypeScript!"
console.log(message)

let numN: number = 5
let ii: number
var factorialF = 1

// for循环
for (ii = numN; ii >= 1; ii--) {
  factorialF *= ii;
}
for(let aa:number=5; aa>=1; aa--){
  console.log(aa);
}
console.log(factorialF);



/*数组定义
    表示一组相同类型的元素。可以使用 type[] 或 Array<type> 两种方式表示。*/
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];
console.log(names[0], numbers[1]);

let someArray = [1, "string", false]
for (let entry of someArray) {
    console.log(entry) // 1, "string", false
}

for (let j in someArray) {
  console.log(j, "--->", someArray[j]);
}




//while循环
var num: number = 5
var factorial: number = 1

while (num >= 1) {
  //factorial = factorial * num
  factorial *= num
  num--
  break
}
console.log("5 的阶乘为：" + factorial)

var n1: number = 10
do {
  console.log(n1)
  n1--
  continue
} while (n1 >= 0)

  //无限循环
  // for (;;) {
  //   console.log("这段代码会不停的执行");
  // }
  
  // while (true) {
  //   // 语句
  // } 