const crypto = require("node:crypto");
console.log("Hello world");
var a = 12121;
var b = 1121;
// Sync function
crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512");
console.log("first key is generated");
// Async function
crypto.pbkdf2("password", "salt", 5000, 50, "sha512", (err, key) => {
  console.log("second key is generated");
});
function multiplication(x, y) {
  const result = a * b;
  return result;
}
multiplication();
