#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
 
let todoList = [];
let condition = true;

//print welcome message
console.log(chalk.magenta.bold("\n \t Welcome to Ndoll7 - Todo-List Application\n"));

 while(condition){
     let addTask = await inquirer.prompt([
         {
             name: "task",
             type: "input",
            message: chalk.green("Enter your New Task :")
        }
  ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task added in Todo-List successfully`);

    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: chalk.blue("Do you want to add more task ?"),
            default: "False"
        }
    ]);
    condition = addMoreTask.addmore
}
console.log(chalk.yellow("Your updated Todo-List" , todoList));