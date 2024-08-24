#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
 
console.log(chalk.yellow.italic.bold.underline("\n\t\t\tCheck Your Exam Result\n"))

let ans = await inquirer.prompt([
    {
        type: "number",
        name: "rollno",
        message: chalk.green.bold("please enter your roll NO : ")
    },
    {
        type: "input",
        name: "name",
        message: chalk.green.bold("please enter your name : ")
    },
    {
        type: "input",
        name: "fdname",
        message: chalk.green.bold("please enter your father name : ")
    },
])
console.log("\n")
let marks = await inquirer.prompt([
    {
        type: "number",
        name: "english",
        message: chalk.blue.bold.italic("please enter your english marks : ")
    },
    {
        type: "number",
        name: "urdu",
        message: chalk.blue.bold.italic("please enter your urdu marks : ")
    },
    {
        type: "number",
        name: "sindhi",
        message: chalk.blue.bold.italic("please enter your sindhi marks : ")
    },
    {
        type: "number",
        name: "math",
        message: chalk.blue.bold.italic("please enter your math marks : ")
    },
    {
        type: "number",
        name: "physics",
        message: chalk.blue.bold.italic("please enter your physics marks : ")
    },
    {
        type: "number",
        name: "biology",
        message: chalk.blue.bold.italic("please enter your biology marks : ")
    },
    {
        type: "number",
        name: "pakistanstudies",
        message: chalk.blue.bold.italic("please enter your pakistan studies marks : ")
    },
    {
        type: "number",
        name: "islamiat",
        message: chalk.blue.bold.italic("please enter your islamiat marks : ")
    },

])

let eng: number = marks.english
let urd: number = marks.urdu
let sindh: number = marks.sindhi
let mth: number = marks.math
let pysic: number = marks.physics
let bio: number = marks.biology
let pkstudy: number = marks.pakistanstudies
let islam: number = marks.islamiat

let totleMarks:number = 800
let obtainMrks:number = eng + urd + sindh + mth + pysic + bio + pkstudy + islam
let persentage = ((obtainMrks/totleMarks)*100)

console.log(chalk.bold.bgBlue("\nStudent Data"))
console.log(chalk.bold.red("Roll Number : " , ans.rollno))
console.log(chalk.bold.red("Name : " , ans.name))
console.log(chalk.bold.red("Father Name : " , ans.fdname))
console.log(chalk.bold.bgGreen("\nAll Subjects Marks"))
console.log(chalk.magenta.bold.italic(`english marks = ${eng} out off 100`))
console.log(chalk.magenta.bold.italic(`urdu marks = ${urd} out off 100`))
console.log(chalk.magenta.bold.italic(`sindhi marks = ${sindh} out off 100`))
console.log(chalk.magenta.bold.italic(`math marks = ${mth} out off 100`))
console.log(chalk.magenta.bold.italic(`physics marks = ${pysic} out off 100`))
console.log(chalk.magenta.bold.italic(`biology marks = ${bio} out off 100`))
console.log(chalk.magenta.bold.italic(`pakistan studies marks = ${pkstudy} out off 100`))
console.log(chalk.magenta.bold.italic(`islamiat marks = ${islam} out off 100`))

console.log(chalk.red.bold.italic(`Obtain Marks = ${obtainMrks} Total Marks = ${totleMarks}`))
console.log("\n")

console.log(chalk.green.bold.italic(`\t\t\tPersentage = ${persentage}`))

if(persentage > 90 ){
    console.log(chalk.bgYellow.bold("\t\t\tgrade = A+"))
    console.log(chalk.cyan.bold("\t\t\tconratulations"))
} else if(persentage > 80 ){
    console.log(chalk.bgYellow.bold("\t\t\tgrade = A"))
    console.log(chalk.cyan.bold("\t\t\tconratulations"))
} else if(persentage > 70 ){
    console.log(chalk.bgYellow.bold("\t\t\tgrade = B"))
    console.log(chalk.cyan.bold("\t\t\tgood"))
} else if(persentage > 60 ){
    console.log(chalk.bgYellow.bold("\t\t\tgrade = C"))
    console.log(chalk.cyan.bold("\t\t\tgood try"))
} else if(persentage > 50 ){
    console.log(chalk.bgYellow.bold("\t\t\tgrade = D"))
    console.log(chalk.cyan.bold("\t\t\tgood try"))
} else if(persentage > 50 ){
    console.log(chalk.bgYellow.bold("\t\t\tgrade = E"))
    console.log(chalk.cyan.bold("\t\t\tneed hard working"))
} else if(persentage > 33 ){
    console.log(chalk.bgYellow.bold("\t\t\tgrade = pass"))
    console.log(chalk.cyan.bold("\t\t\tjust pasing "))
} else {
    console.log(chalk.bgRed.bold("\t\t\tfail"))
    console.log(chalk.red.bold("\t\t\tplease focus on your study"))
}


