$(document).ready(function () {
  console.log("ready!");
});

// ** globals ** //
var arrayOfClickedButtons = [];

// ** event handlers ** //
$('span').not($('#cancel, #calc').on('click', function() {
  var $buttonClicked = $(this).html();
  addToScreen($buttonClicked);
  arrayOfClickedButtons.push($buttonClicked);
})

//clear button
$('#cancel').on('click', function(){
  $('#screen').html('');
  arrayOfClickedButtons = [];
});

// ** helper function ** //
$(#calc).on('click',function addToScreen(btn) {
  var answer = calculate(arrayOfClickedButtons);
  $('#screen').html(answer);
  arrayOfClickedButtons = [];
}


function addToScreen(btn) {
  $('#screen').append(btn + '&nbsp;')
}
