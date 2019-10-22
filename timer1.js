let arg = process.argv.slice(2);
arg.sort();
console.log(arg);
for (let time of arg){
  if( isNaN(Number(time)) === true || time < 0  ){
console.log("if loop");
  }
  else{
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time*1000);
  }
}