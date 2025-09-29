interface IPerson {
  readonly id: number; //id 是只读属性，不能被修改。
  firstName: string;
  lastName: string[];
   sayHi: () => string;
   email?: string; //可选
  status: "success" | "error"; // 联合类型status 只能是 'success' 或 'error'
}

var customer: IPerson = {
   id:1,
  firstName: "Tom",
  lastName:["Hanks"],
   sayHi: ():string =>{return "Hi there"},
   status:"success"
};

console.log(customer)
console.log(customer.lastName)
console.log(customer.sayHi())

interface ages {
    // key是string类型，value是number类型,相当于map
   [index:string]:number
}
var map:ages = {
   "Jack":25,
   "Tom":30,
   "Mary":28,
}
 console.log("Tom age is ", map["Tom"])


 interface namelist {
    // key是number类型，value是string类型,相当于数组
   [index: number]: string;
 }
 // 类型一致，正确
 var list2: namelist = ["Google", "Runoob", "Taobao",];
 console.log(list2[0])