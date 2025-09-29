//https://www.runoob.com/typescript/ts-function.html


//匿名函数自调用
(function () {
  var x = "自动执行，Hello!!"
  console.log(x)
})()


let jl = (function ():string {
  var x = "自动执行，Hello!!";
  console.log(x)
  return "jl"+x
})()
console.log("自动执行有返回值====>",jl)



// 函数定义
function greet(): string {
  // 返回一个字符串
  return "Hello World";
}

function caller() {
  let msg = greet(); // 调用 greet() 函数
  console.log(msg);
}

// 调用函数
caller();

//方法参数
function add(x: number, y: number): number {
  return x + y;
}
console.log(add(1, 2));

//可选参数
function buildName(firstName: string, lastName?: string) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}
let result1 = buildName("Bob"); // 正确
let result3 = buildName("Bob", "Adams"); // 正确

//默认值
function calculate_discount(price: number, rate: number = 0.5) {
  var discount = price * rate;
  console.log("计算结果: ", discount);
}
calculate_discount(1000);

//可变参数
function buildNameA(firstName: string, ...restOfName: string[]) {
  for (let entry of restOfName) {
    console.log(entry); // 1, "string", false
  }
  console.log(restOfName.join(" "));

  return "===>" + firstName + " " + restOfName.join(" ");
}

let employeeName = buildNameA("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);

//匿名函数
var res = function (a: number, b: number) {
  return a * b;
};
console.log(res(12, 2));


//构造函数,语法：var res = new Function ([arg1[, arg2[, ...argN]],] functionBody)
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
console.log(x);


//Lambda函数,语法：( [param1, param2,…param n] ) => statement;
// ( [param1, param2,…param n] )=> {

//     // 代码块
// }
let foo = (x: number) => {
  x = 10 + x
  console.log(x)
}
foo(100)


//类型判断
var func = (x:any) => {
  if (typeof x == "number") {
    console.log(x + " 是一个数字");
  } else if (typeof x == "string") {
    console.log(x + " 是一个字符串");
  }
}
func(12);
func("Tom");


//单个参数 () 是可选的：
var display = (x:any) => {
  console.log("输出为 " + x)
}
display(12);

//没有代码块
var foo1 = (x: number) => 10 + x;
console.log(foo1(100));  

//没有参数
var disp = () => {
  console.log("Function invoked");
};
//没有参数-简写
var disp1 = ()=> console.log("Function invoked")
disp();


// 编写异常1
let errorN = (message:string) => {
  throw new Error(message);
}
errorN("error==>这是正常的错误，这是自定义异常，并非环境出错");

// 编写异常2
function error(message: string): never {
  throw new Error(message);
}
error("信息填写异常")