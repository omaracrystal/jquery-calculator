// *** globals *** //

var arrayOfClickedButtons = [];
var total = [];

// *** event handlers ** //

// handler number clicks
$('span').not($('.operator')).on('click', function(){
  var $buttonClicked = $(this).html();
  addToScreen($buttonClicked);
  arrayOfClickedButtons.push($buttonClicked);
});

// handle operator buttons
$('.operator').not($('#cancel, #calc')).on('click', function(){
  var $operatorClicked = $(this).html();
  $('#screen').append($operatorClicked + '&nbsp;');
  total.push(arrayOfClickedButtons.join(''));
  total.push($operatorClicked);
  arrayOfClickedButtons = [];
  console.log(total);
});

// handle clear button
$('#cancel').on('click', function(){
  $('#screen').html('');
  arrayOfClickedButtons = [];
  total = [];
});

// handle equals button
$('#calc').on('click', function(){
  total.push(arrayOfClickedButtons.join(''));
  var answer = calculate(total);
  $('#screen').html(answer);
  arrayOfClickedButtons = [];
  total = [];
});


// ** helper functions ** //

function addToScreen(btn) {
  $('#screen').append(btn + '&nbsp;');
}
