#! /usr/bin/env node

const stocky = require("commander");
const chalk = require("chalk");
const _ = require("lodash");

const { req, reqByCode } = require("../src/http");

stocky.version("0.0.1").usage("<command> [options]");

stocky
  .command("code [code]")
  .alias("m")
  .description("创建新的模块")
  // .option("-c, --code [code]", "港股的代码")
  // .option("-h, --http", "request ip.sb")
  // .option("-a, --name [moduleName]", "模块名称")
  .action(code => {
    console.log(chalk.red("Hello World"));
    if (code) {
      req(code);
    }
    if (code) {
      reqByCode(code).then(res => {
        chalk.red(res);
      });
    }
  });

stocky.parse(process.argv);
