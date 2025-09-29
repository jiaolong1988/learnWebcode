//https://www.runoob.com/typescript/ts-array.html

/*数组定义
    表示一组相同类型的元素。可以使用 type[] 或 Array<type> 两种方式表示。*/

let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];
let someArray = [1, "string", false];
console.log(names[0], numbers[1]);

for (let entry of someArray) {
  console.log(entry); // 1, "string", false
}

for (let j in someArray) {
  console.log(j, "--->", someArray[j]);
}


//数组初始化-动态添加值
var arr_names: number[] = new Array(4);
for (var i = 0; i < arr_names.length; i++) {
  arr_names[i] = i * 2;
  console.log(arr_names[i]);
}


// 数组解构赋值
var sites: string[] = new Array("Google", "Runoob", "Taobao", "Facebook"); 
var [a,b,c,d] = sites; 
console.log(a,b,c,d)

var arr: number[] = [12, 13];
var [x, y] = arr; // 将数组的两个元素赋值给变量 x 和 y
console.log(x,y);


function disp(arr_sites: string[]) {
  for (var i = 0; i < arr_sites.length; i++) {
    console.log("---->",arr_sites[i]);
  }
}
disp(names);


//数组动态增加数据
let arrtest = [];
arrtest.push(1);
arrtest.push("string");
arrtest.push(false);
console.log(arrtest);



//concat()连接两个或更多的数组，并返回结果。
var alpha:any = ["a", "b", "c"];
var numeric = [1,2,3];
var alphaNumeric = alpha.concat(numeric);
console.log("alphaNumeric : " + alphaNumeric); 


let testarr = [12, 5, 8, 130, 44];
//every() 检测数值元素的每个元素是否都符合条件。返回：true 或 false。
let everyFlag: boolean = testarr.every(
    (value) => {
        console.log("000000000000000000=>",value);
        return value > 8;
    }
);
console.log("everytest=>", everyFlag); // false

//filter()过滤原始，返回数组。
var filterFlag = testarr.filter((value)=> {
  return value>10;
}); 
console.log("filger >10 Value : " + filterFlag); 

// forEach() 数组每个元素都执行一次回调函数。
testarr.forEach((value)=>{
  console.log("forEach Value : " + value); 
});

//join() 连接数组所有元素，并返回一个字符串。
let ns = testarr.join("-xxx-"); // 连接所有元素，并返回一个字符串。
console.log("join Value : " + ns);

//map() 处理数组的每个元素，并返回处理后的数组。
var roots = testarr.map((value) => {
  return value * value;
});
console.log("roots is : " + roots);



//let testarr = [12, 5, 8, 130, 44];
//删除数组的最后一个元素并返回删除的元素
console.log(testarr.pop(), testarr);
//添加一个或多个元素到数组的末尾，并返回新的长度
console.log(testarr.push(88), testarr);

//删除数组的第一个元素并返回删除的元素
console.log(testarr.shift(), testarr);
//添加一个或多个元素到数组的开头，并返回新的长度
console.log(testarr.unshift(900), testarr);
