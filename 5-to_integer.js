const argument = process.argv.slice(2)

const arg2 = Number(argument[0]);

if(arg2){
    console.log(`My number: ${arg2}`)
} else {
    console.log("Not a number")
}