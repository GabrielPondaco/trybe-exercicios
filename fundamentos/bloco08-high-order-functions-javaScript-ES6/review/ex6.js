const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function calcAverage(index) {
  return (grades[index]
    .reduce((acc, curr) => acc + curr)) / grades[index].length;
}

function studentAverage() {
  return students
  .reduce((acc, curr, index) => {
    const stuObj = {
      name: curr,
      average: calcAverage(index),
    };
    acc.push(stuObj);
    return acc;
  }, []);
}
console.log(studentAverage());
