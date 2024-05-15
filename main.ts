#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
let todolist = []; // an empty array 
let conditions = true; //variable


console.log(chalk.green   ("\n\t ================================================================\n"));
console.log(chalk.bold.red("\n \t ~~~~ * Welcome to CodeWithFareeha ~ ToDo List Application * ~~~~\n"));
console.log(chalk.green   ("\n\t ================================================================\n"));
// (\t) for keeping the heading in center)


while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your New Task :"

        }
    ]);
    todolist.push(addTask.task);
    console.log(`${addTask.task} Task added in Todo - list successfully`);

    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more task ? ",
            default: "False"
        }
    ]);
    conditions = addMoreTask.addmore
}
console.log("Your Updated Todo-list:" , todolist);


console.log(chalk.green.bold("\n\t =================================="));
console.log(chalk.red.bold("\n\t Thank you for using this Applicaion"));
console.log(chalk.green.bold("\n\t =================================="));


