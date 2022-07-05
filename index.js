#!/usr/bin/env node

// Imports
const fs = require("fs");

fs.readdir(`${__dirname}/functions`, function (err, files) {
  if (err) {
    console.error(err);
    return;
  }
  const functionObject = {};
  files.forEach(function (file) {
    functionObject[file] = require(`${__dirname}/functions/${file}`);
  });

  if (process.argv.length > 2) {
    functionObject[process.argv[2]](process.argv.slice(3));
  } else {
    console.log(
      "Hello! I am Sabestian, you're personal butler!\nUse 'list' command to see all available functions commands."
    );
  }
});
