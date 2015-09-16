function calculate(arr) {
  if (arr[1] === '+') {
    return parseInt(arr[0]) + parseInt(arr[2]);
  }
  if (arr[1] === '-') {
  return parseInt(arr[0]) - parseInt(arr[2]);
  }
  if (arr[1] === 'x') {
  return parseInt(arr[0]) * parseInt(arr[2]);
  } else {
    return parseInt(arr[0]) / parseInt(arr[2]);
  }
}
