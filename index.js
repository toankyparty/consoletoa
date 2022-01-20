const moment = require("moment");
const chalk = require("chalk");
require("moment-duration-format");

moment.locale("tr");

/* Definitions */

let info_icon = "ℹ"; /* Author by Toânky */
let success_icon = "✔"; /* Author by Toânky */
let warning_icon = "⚠"; /* Author by Toânky */
let error_icon = "✖"; /* Author by Toânky */
let event_icon = "☄"; /* Author by Toânky */
let debug_icon = "☢"; /* Author by Toânky */
let log_icon = "✎"; /* Author by Toânky */

/* Functions */
async function info(message) {
  const date = Date.now();
  const date_moment = moment(date).dura.format("LLL");
  console.log(
    `${chalk.grey(date_moment)} ${chalk.cyan(info_icon)} ${message}`,
  ); /* Author by Toânky */
}

async function success(message) {
  const date = Date.now();
  const date_moment = moment(date).format("LLL");
  console.log(
    `${chalk.grey(date_moment)} ${chalk.green(success_icon)} ${message}`,
  );
}

async function warning(message) {
  const date = Date.now(); /* Author by Toânky */
  const date_moment = moment(date).format("LLL");
  console.log(
    `${chalk.grey(date_moment)} ${chalk.yellowBright(warning_icon)} ${message}`,
  );
}

async function error(message) {
  const date = Date.now();
  const date_moment = moment(date).format("LLL"); /* Author by Toânky */
  console.log(`${chalk.grey(date_moment)} ${chalk.red(error_icon)} ${message}`);
}

async function event(message) {
  /* Author by Toânky */
  const date = Date.now();
  const date_moment = moment(date).format("LLL");
  console.log(
    `${chalk.grey(date_moment)} ${chalk.magenta(event_icon)} ${message}`,
  );
}

async function debug(message) {
  const date = Date.now();
  const date_moment = moment(date).format("LLL"); /* Author by Toânky */
  console.log(
    `${chalk.grey(date_moment)} ${chalk.yellowBright(debug_icon)} ${message}`,
  );
}

async function log(message) {
  const date = Date.now(); /* Author by Toânky */
  const date_moment = moment(date).format("LLL"); /* Author by Toânky */
  console.log(`${chalk.grey(date_moment)} ${chalk.grey(log_icon)} ${message}`);
}

exports.info = info;
exports.success = success;
exports.warning = warning;
exports.error = error;
exports.event = event;
exports.debug = debug;
exports.log = log;

/* Author by Toânky */
