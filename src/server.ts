import express from "express";
import chalk from "chalk";

const app = express();

app.listen(3333, () => console.log(`Successfully started server on port ${chalk.yellow("3333")}`));
