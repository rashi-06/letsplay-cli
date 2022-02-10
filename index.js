#!/usr/bin/env node 
 // 👆 SHEBANG

 import chalk from "chalk";
 import chalkAnimation from "chalk-animation";
 import inquirer from "inquirer";
 import gradient from 'gradient-string';
 import figlet from 'figlet';
 import { createSpinner } from 'nanospinner';


 let  player;

 const sleep = (ms = 2000) => new Promise((res)=> setTimeout(res, ms));  // Promise based timeout is not possible in JS


 async function welcome(){
     const heading = chalkAnimation.rainbow(`Welcome ${player} JAVASCRIPT KBC \n`);
     await sleep();
     heading.stop();

    console.log(`
    
        ${chalk.bgGray("How to Play ")}
        I am a process on your computer.
        If you answer any question wrong, I will be ${chalk.bgRed("killed")}
        So answer ${chalk.bgGreen("carefully")}.
    `);
 }



 async function handleAnswer(isCorrect) {
    const spinner = createSpinner('Checking answer...').start();
    await sleep();
  
    if (isCorrect) {
      spinner.success({ text: `Nice work ${player}. That's a legit answer` });
    } else {
      spinner.error({ text: `💀💀💀 Game over, you lose ${player}!` });
      process.exit(1);
    }
}


async function userName(){
    const user = await inquirer.prompt({
        name: 'player_name',
        type:  'input',
        message: "What's Your Name?",

        default(){
            return "Player";
        }
    });
    player = user.player_name;
 }

async function question1(){
    const question = await inquirer.prompt({
        name: "q1",
        type: "list",
        message: "Keyword used to declare variables in JAVASCRIPT?\n",
        choices:[
            "Var",
            "Dim",
            "String",
            "None of the Above",
        ],
    });
    return handleAnswer(question.q1 === "Var");
};

async function question2(){
    const question = await inquirer.prompt({
        name: "q2",
        type: "list",
        message: "Javascript is an _______ language?\n",
        choices:[
            "object-oriented",
            "object-based",
            "procedural",
            "None of the above",
        ],
    });
    return handleAnswer(question.q2 === "object-oriented");
};

async function question3(){
    const question = await inquirer.prompt({
        name: "q3",
        type: "list",
        message: "Which of the following methods is used to access HTML elements using Javascript?\n",
        choices:[
            "getElementById()",
            "getElementsByClassName()",
            "Both A and B",
            "None of the Above",
        ],
    });
    return handleAnswer(question.q3 === "Both A and B");
};

async function question4(){
    const question = await inquirer.prompt({
        name: "q4",
        type: "list",
        message: "Upon encountering empty statements, what does the Javascript Interpreter do?\n",
        choices:[
            "Throws an error",
            "Ignores the statements",
            "Gives a warning",
            "None of the Above",
        ],
    });
    return handleAnswer(question.q4  === "Ignores the statements");
};

async function question5(){
    const question = await inquirer.prompt({
        name: "q5",
        type: "list",
        message: "Which of the following methods can be used to display data in some form using Javascript?\n",
        choices:[
            "document.write()",
            "console.log()",
            "window.alert()",
            "All of the above",
        ],
    });
    return handleAnswer(question.q5  === "All of the above");
};


function winner() {
    console.clear();
    figlet(`Congrats , ${player} !\n $ 1 , 0 0 0 , 0 0 0`, (err, data) => {
      console.log(gradient.pastel.multiline(data) + '\n');
  
      console.log(
        chalk.green(
          `Programming isn't about what you know; it's about making the command line look cool`
        )
      );
      process.exit(0);
    });
}


console.clear();
await userName();
await welcome();
await question1();
await question2();
await question3();
await question4();
await question5();
winner();