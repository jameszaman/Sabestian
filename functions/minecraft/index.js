const { spawn } = require("child_process");

module.exports = function () {
  spawn("python", ["python/mouse_press.py"]);
};
