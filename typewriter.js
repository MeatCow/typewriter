const typewrite = (sentence) => {
  let timer = 0;
  for (let char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, timer);
    timer += 50;
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, timer);
};

typewrite("hello there from lighthouse labs");