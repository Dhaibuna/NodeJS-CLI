#!/usr/bin/env node

// Requires

const chalk = require('chalk'); // Bonus : Chalk 
const { getCode, getName } = require('country-list');
const axios = require('axios');

// Ex 1 : Afficher ceci dans le terminal

//console.log(chalk.cyan("Hello, Node.JS!"));

// Ex 2 : Afficher "Belgique" apd du code "BE" 

//console.log(chalk.magenta.bold.bgWhiteBright(getCode('Belgium')));

// Affiche le pays correspondant au code "CN"

//console.log(chalk.yellow.bold.bgRed(getName('CN')));

// Ex 3 : Http requests avec Axios (install Axios)

const givenData = process.argv.slice(2); // Les données rentrées par l'utilisateur vont rentrer en troisième position
const Country = getCode(givenData[0]);
const yearDate = new Date();
let formatYear = yearDate.getFullYear();

if (givenData.length > 1) {
    formatYear = givenData[1];
}

axios.get(`https://date.nager.at/api/v2/publicholidays/${formatYear}/${Country}`)
    .then(function (response) {
        console.log(response.data)
        //console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })






