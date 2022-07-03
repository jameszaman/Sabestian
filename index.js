// This object is used to map the arguments to the corresponding function.
function testFunc(args) {
  console.log(args);
}
const functionObject = {
  test: testFunc,
};

if (process.argv.length > 2) {
  functionObject[process.argv[2]](process.argv.slice(3));
} else {
  console.error("Command not given");
}
