#!/usr/bin/env node

// Imports
const fs = require("fs");

fs.readdir("functions", function (err, files) {
  if (err) {
    console.error(err);
    return;
  }
  const functionObject = {};
  files.forEach(function (file) {
    functionObject[file] = require(`./functions/${file}`);
  });

  if (process.argv.length > 2) {
    functionObject[process.argv[2]](process.argv.slice(3));
  } else {
    console.error("Command not given");
  }
});
