// ** V1 ** //
function calculate1(arr) {
  if (arr[1] === '+') {
    return parseInt(arr[0]) + parseInt(arr[2]);
  }
  else if (arr[1] === '-') {
    return parseInt(arr[0]) - parseInt(arr[2]);
  }
  else if (arr[1] === 'x') {
    return parseInt(arr[0]) * parseInt(arr[2]);
  } else {
    return parseInt(arr[0]) / parseInt(arr[2]);
  }
}

// ** V2 ** //
function calculate2(str) {
  var total = 0;
  var totalArray = str.split('&nbsp;');
  totalArray.pop();
  for (var i = 0; i < totalArray.length; i++) {
    if(totalArray[i] !== '+') {
      total += parseInt(totalArray[i]);
    }
  }
  return total;
}
