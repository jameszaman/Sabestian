const { spawn } = require("child_process");
const path = require("path");

module.exports = function () {
  spawn("python", [path.join(__dirname, "../..", `/python/mouse_press.py`)]);
};
