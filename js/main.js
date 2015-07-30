$(document).ready(function() {
  console.log("The document is ready!");
});

$("#screen").html("hello");

$('#cancel').on('click', function() {
  $("#screen").empty();
});

// first grab area
// areas # 0-9 act like numbers
// "/,x,+,-,=" act like operators <assign each value>

// print to div screen

for (var i = 0; i < $("span").length; i++) {
  var numArray = [];
  var operArray = [];
  var value = $($("span")[i]).text();
  console.log(value);
  if typeof(parseInt(value)) === "number"
};


// for loop
//   operatorArray
//   for loop
//     results array

