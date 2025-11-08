const argument = process.argv.slice(2)

const arg2 = Number(argument[0]);

if (arg2){
    for (let i = 0; i < arg2; i++){
        console.log("C is fun")
    }
} else {
    console.log("Missing number of occurences")
}