#!/usr/bin/env node

// Requires

const chalk = require('chalk'); // Bonus : Chalk 
const { getCode, getName} = require('country-list'); 

// Ex 1 : Afficher ceci dans le terminal

console.log(chalk.cyan("Hello, Node.JS!"));

// Ex 2 : Afficher "Belgique" apd du code "BE" 

console.log(chalk.magenta.bold.bgWhiteBright(getCode('Belgium')));

// Affiche le pays correspondant au code "CN"

console.log(chalk.yellow.bold.bgRed(getName('CN')));

// Ex 3 : Http requests avec Axios ( install Axios)








