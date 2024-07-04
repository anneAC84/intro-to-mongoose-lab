
require('dotenv').config()

const mongoose = require('mongoose')

const Customer = require('.models/customer.js')


const express = require('express');

const app = express();

//const createCustomer= async () => {
// try {

 //} catch (error){
//}


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Database connection established')
    } catch (error) {
        console.log(error)
    }
}


const action = prompt(`
    const
    Welcome to the CRM
    
    What would you like to do?
    
      1. Create a customer
      2. View all customers
      3. Update a customer
      4. Delete a customer
      5. quit
    
    Number of action to run: 
    `)

const prompt = require('prompt-sync')();

const greeting = prompt('Welcome to the CRM');
const question= prompt('what would you like to do? ');
console.log(greeting);
console.log(question)
 
   // await runQueries()
    //await mongoose.disconnect();
   // console.log('Disconnected from MongoDB');
    //process.exit();
//};

//const runQueries = async () => {
  //console.log('Queries running.')
//};

connect()


//const prompt = require('prompt-sync')();

//const username = prompt('What is your name? ');

//console.log(`Your name is ${username}`);
