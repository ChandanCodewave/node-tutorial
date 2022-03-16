// const os = require("os");

// const user = os.userInfo();
// console.log(user);

const { readFileSync, writeFileSync } = require("fs");
// const { log } = require("node:console");

const first = readFileSync("./content/first.txt", "utf-8");
console.log(first);

writeFileSync("./content/result.txt", `Here is the result ${first}`);
