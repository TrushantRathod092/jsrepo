const myObject = {
    js: "Javascript",
    rb: "Ruby",
    cpp: "C++",
    py: "Python",
    swift: "Swift by apple"
}

for (const key in myObject) {
    // console.log(key); // op: js  rb  cpp  py  swift
    // console.log(myObject[key]); // op: Javascript Ruby  C++  Python  Swift by apple
    console.log(`${key} for ${myObject[key]}`);
    
}