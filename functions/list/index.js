const fs = require("fs");
module.exports = function () {
  fs.readdir("functions", function (err, files) {
    if (err) {
      console.error(err);
    }

    files.forEach((file) => console.log(file));
  });
};
