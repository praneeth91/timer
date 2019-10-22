const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');
stdin.on('data', (key) => {
  if (key === "b") {
    process.stdout.write('\x07');
  } else if (key >= 1 && key <= 9) {
    setTimeout(() => {
      process.stdout.write(`setting the timer for ${key} seconds\n`);
      process.stdout.write('\x07');
    }, key * 1000);
  } else if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao!\n');
    process.exit();
  }
  
  
});

