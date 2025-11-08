const arg1 = process.argv.slice(2)

const arg2 = Number(arg1[0])

if (arg2) {
    for (let i = 0; i < arg2; i++){
        console.log("X".repeat(arg2))
    }
} else {
    console.log("Missing size")
}