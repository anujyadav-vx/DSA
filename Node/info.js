const os = require("os");
console.log("your computers Username:", os.userInfo().username);
console.log("Your Platform:", os.platform());
console.log("total RAM :", Math.round(os.totalmem() / 1e9), "GB");

function greet() {
  console.log("hii i am you");
}
greet();

const data = fs.readFileSync("file.txt");

fs.readFile("file.txt", (err, data) => {
  console.log(data);
});
console.log("this print first");
