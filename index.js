#!/usr/bin/env node

// Imports
const fs = require("fs");

if (process.argv.length > 2) {
  const func = require(`${__dirname}/functions/${process.argv[2]}`);
  func(process.argv.slice(3));
} else {
  console.log(
    "Hello! I am Sabestian, you're personal butler!\nUse 'list' command to see all available functions commands."
  );
}
