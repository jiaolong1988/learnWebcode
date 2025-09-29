let main = () => {
  console.log("test")
  console.log("test111");
}
main()

let myMap = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
])

console.log(myMap.get("key1"));
console.log(myMap.size)

for (const key of myMap.keys()) {
  console.log(key, "-->", myMap.get(key))
}

for (const value of myMap.values()) {
  console.log(value)
}

for (const [key, value] of myMap.entries()) {
  console.log(key, value);
}

myMap.forEach((value, key) => {
  console.log("-->", key, value);
});

const map = new Map<string, number>();
map.set("one", 1);
map.set("two", 2);
console.log(map.get("one")); // 输出: 1
