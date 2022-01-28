const sumValues = (...args) => {
  return args.reduce((acc, curr) => acc += curr)
}

console.log(sumValues(1, 2, 3, 4));