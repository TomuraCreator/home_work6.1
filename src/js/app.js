const numUserVal = [];
const iter = 5;
let userVal;
for (let i = 0; i < iter; ++i) {
  userVal = prompt(`Введите 5 любых числел. Вы ввели ${i}, предыдущее введенное число ${numUserVal[i]}`);
  let useval = Number(userVal);
  if (useval === 0) {
    numUserVal.pop();
    i--;
  }
  numUserVal.push(useval);
  if (numUserVal[0] === 0) {
    numUserVal.shift();
  }
}
alert(numUserVal);
console.info(numUserVal);

function sum() {
  let i = 0;
  for (const x of numUserVal) {
    i += x;
  }
  return i;
}
try {
  sum(numUserVal);
} catch (e) {
  alert('Ненадо так!');
}
console.info(sum(numUserVal));
export { sum, numUserVal };
