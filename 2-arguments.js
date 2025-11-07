// Check if the user argument (at index 2) is missing (undefined/falsy)
if (!process.argv[2]) {
    // If process.argv[2] is undefined, this block runs
    console.log("No argument"); 
} else {
    // If process.argv[2] has a value (a string), this block runs
    console.log("Argument found");
}
