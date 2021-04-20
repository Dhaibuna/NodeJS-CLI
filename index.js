#!/usr/bin/env node


// Ex 1 : Afficher ceci dans le terminal

console.log("Hello, Node.JS!");

// Ex 2 : Afficher "Belgique" apd du code "BE" 
const { getCode, getName} = require('country-list');

console.log(getCode('Belgium'));

// Affiche le pays correspondant au code "CN"

console.log(getName('CN'));





