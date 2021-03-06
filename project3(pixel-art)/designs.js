$( function() {
var height, width, color;
/* Making Grid */

$("#sizePicker").submit(function makeGrid(event) {
  //https://api.jquery.com/submit/
  event.preventDefault();
  //variables are picked after pressing the submit button
  height = $("#input_height").val();
  width = $("#input_width").val();
  //everytime we press submit button the table is removed
  //and generated again with new variables
  $('#pixel_canvas').children().remove();
  //looping to create a table of height/width size
    for(var col=0; col < height; col++){
      $('#pixel_canvas').append('<tr></tr>');

      for(var row=0; row < width; row++){
       $('#pixel_canvas').children().last().append('<td class="cell"></td>');
      }
    }
});

  /* COLOR PICKER - PAINTER */

  $('#pixel_canvas').on('click','td', function (color) {
    color = $("#colorPicker").val();
    $(this).attr('style', 'background:'+ color );

   });
/*clear canvas*/
   $("#eraseColor").on('click', function (){
      $('td').removeAttr('style');
   });
/*remove canvas*/
   $("#clearButton").on('click', function (){
      $('#pixel_canvas').children().remove();
   });

})
