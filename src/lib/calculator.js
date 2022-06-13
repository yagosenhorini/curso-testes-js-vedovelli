export function sum(num1, num2) {
  const arg1 = parseInt(num1);
  const arg2 = parseInt(num2);

  if (Number.isNaN(arg1) || Number.isNaN(arg2)) {
    throw new Error('Please check your arguments');
  }

  return +arg1 + +arg2;
}