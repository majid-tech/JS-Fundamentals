const args = process.argv.slice(2)

function add(a, b){
    
    if (a && b){
        return Number(a) + Number(b);
    } else {
        return NaN;
    }

}

console.log(add(args[0], args[1]));
