const arg = process.argv.slice(2)

function factorize(num){
    if (!Number(num) || num === 0) {
        return 1;
    } else {
        return (num * (factorize(num - 1)))
    }
}

console.log(factorize(arg[0]))