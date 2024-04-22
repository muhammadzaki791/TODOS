import inquirer from "inquirer";
import chalk from "chalk";
let todo = [];
let exit = false;
while (!exit) {
    const Q1 = await inquirer.prompt([
        {
            name: "question1",
            type: "list",
            message: "Select Option 👇 ",
            choices: [
                "Add Task",
                "Update Tasks",
                "Delete Task",
                "View All Task",
                "Mark As Read",
                "EXIT!",
            ],
        },
    ]);
    const choose = Q1.question1;
    if (choose === "Add Task") {
        const Q2 = await inquirer.prompt([
            {
                name: "question",
                type: "input",
                message: "Add Your Task ✍ ",
            },
        ]);
        console.log(chalk.red(`Task added in your TODOS`));
        // var answer2 = Q.question;
        todo.push(Q2.question);
    }
    else if (Q1.question1 === "Update Tasks") {
        // todo.push(answer2);
        let q3 = await inquirer.prompt([
            {
                name: "update1",
                type: "list",
                message: "Choose your task to update",
                choices: todo
            },
            {
                name: "update2",
                type: "input",
                message: "Edit your task",
            }
        ]);
        const indexToUpdate = todo.indexOf(q3.update1);
        // If the item exists in the array
        if (indexToUpdate !== -1) {
            // Update the item at the index
            todo[indexToUpdate] = q3.update2;
            console.log("Your Updated Tasks are:");
            console.log(todo);
        }
        else {
            console.log(chalk.red("Task not found in the list."));
        }
    }
    else if (Q1.question1 === "Delete Task") {
        console.log("Deleting Your Task... ");
        todo.pop();
    }
    else if (Q1.question1 === "View All Task") {
        console.log(todo);
    }
    else if (choose === "Mark As Read") {
        let ans = await inquirer.prompt({
            name: "answer",
            type: "list",
            message: chalk.green("Select the Task"),
            choices: todo.map((task) => task),
        });
        console.log(chalk.blue(`Task ${ans.answer},is Done ✔`));
    }
    else if (Q1.question1 === "EXIT!") {
        exit = true;
    }
}
