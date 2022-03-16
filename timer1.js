const args = process.argv.slice(2);

const timer = (nums) => {

  for (let num of nums) {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log('num :', num);
    }, num * 1000)
  };
};

timer(args);