$(document).ready(function(){
  $('#get_color').on('click', function(e) {
  	// prevent default click
    e.preventDefault();
    // ajax post of colors route
    $.post('/color', function(response){
    	console.log(response)
    	// cell number starts at index of zero with eq
    	// grab each box and fill in with color
    $('li').eq(response.cell - 1).css('background-color', response.color);
    });
  });
});

//Clicking on the 'Click Me' button submits an AJAX request to the '/colors' route
// return a JSON object the server with a random color and cell number
// change the background color of the cell number returned to the color - WITHOUT MODIFYING THE HTML