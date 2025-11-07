const argument = process.argv.slice(2);

if(argument[0] && argument[1]){
    console.log(`${argument[0]} is ${argument[1]}`)
} else if(argument[0]){
    console.log(`${argument[0]} is ${argument[1]}`)
} else {
    console.log(`${argument[0]} is ${argument[1]}`)
}