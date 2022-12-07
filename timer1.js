const nodeArgs = process.argv.slice(2); 
const alarm = function () {
  for (let seconds of nodeArgs) { 
    if (seconds > 0 && seconds === "number") { 
      setTimeout(() => {
        process.stdout.write('\x07');
      }, seconds)
    }
  }
}; 
alarm(); 