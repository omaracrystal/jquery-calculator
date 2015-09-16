// *** event handlers ** //

// handler number clicks
$('span').not($('.operator')).on('click', function(){
  var $buttonClicked = $(this).html();
  addToScreen($buttonClicked);
});

// handle operator buttons
$('.operator').not($('#cancel, #calc')).on('click', function(){
  var $operatorClicked = $(this).html();
  $('#screen').append($operatorClicked + '&nbsp;');
});

// handle clear button
$('#cancel').on('click', function(){
  $('#screen').html('');
});

// handle equals button
$('#calc').on('click', function(){
  var everythingFromScreen = $('#screen').html();
  var answer = calculate2(everythingFromScreen);
  $('#screen').html(answer);
});


// ** helper functions ** //

function addToScreen(btn) {
  $('#screen').append(btn + '&nbsp;');
}
