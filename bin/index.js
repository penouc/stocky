#!/usr/bin/env node

const warren = require("commander");
const chalk = require("chalk");

const { req, reqByCode } = require("../src/http");

warren
  .version("0.0.1")
  .option("-c, --code [code]", "港股的代码")
  .option("-h, --http", "request ip.sb")
  .parse(process.argv);

// console.log(chalk.red("you ordered a pizza with:"));
if (warren.http) {
  req();
}
if (warren.code) {
  reqByCode(warren.code).then(res => {
    console.log(chalk.red(res));
  });
}
// console.log("  - %s cheese", warren.cheese);
