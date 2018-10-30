$(function(){
$('#hauteur').click(function() {
    if ($('#rectangle').height() < 100){
      $('#rectangle').css('height', $('#rectangle').height() +10+ 'px');
    }
    else {
      ($('#rectangle').css('height', '10px'));
    }
  });
$('#colorgreen').click(function(){
$('#rectangle').css('backgroundColor', 'green');
});
$('#colorinit').click(function(){
$('#rectangle').css('backgroundColor', 'black');
});
$('#recthide').click(function(){
$('#rectangle').hide();
});
$('#rectshow').click(function(){
$('#rectangle').show();
});
});
