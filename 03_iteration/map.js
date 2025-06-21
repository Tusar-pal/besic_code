// map is the one type of object
// map is the unic value get 

let map = new Map();

map.set("In","India");
map.set("USA","united state of America")
map.set("AU","Australia");
//console.log(map);

//console.log(map.delete("hd"));// output false
//console.log(map.has("USA"));// output true
//console.log(map.get("In"));// output India

// key 
const map1 = new Map();

map1.set("0", "foo");
map1.set(1, "bar");

const iterator1 = map1.keys();

//console.log(iterator1.next().value);
// Expected output: "0"

//console.log(iterator1.next().value);

//---------------------->

for (const [key,value] of map) {
    console.log(`${key} ;- ${value}`);
}