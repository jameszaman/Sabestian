#!/usr/bin/env node

// Imports
const fs = require("fs");

if (process.argv.length > 2) {
  try {
    console.log(`${__dirname}/functions/${process.argv[2]}`);
    const func = require(`${__dirname}/functions/${process.argv[2]}`);
    func(process.argv.slice(3));
  } catch (e) {
    console.log(
      "Please provide a proper command.\nUse 'list' command to see all available functions commands."
    );
  }
} else {
  console.log(
    "Hello! I am Sabestian, you're personal butler!\nUse 'list' command to see all available functions commands."
  );
}
