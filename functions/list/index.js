const fs = require("fs");
const path = require("path");

module.exports = function () {
  fs.readdir(`${path.join(__dirname, "..")}`, function (err, files) {
    if (err) {
      console.error(err);
    }

    files.forEach((file) => console.log(file));
  });
};
