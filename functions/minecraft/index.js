const robot = require("robotjs");

module.exports = function () {
  robot.mouseToogle("down");

  setTimeout(function () {
    robot.mouseToogle("up");
  }, 2000);
};
