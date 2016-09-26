var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];
/* Append option into #names, add the value, add the text[0]
just to keep the first part of the text array*/

// making the drop down list
planets.reverse();
$.each(planets, function(val, text) { 
  $('#names').append( $('<option>').val(text[1]).html(text[0])); 
});

// swapping gravity positions for sorting and then creating table
planets.sort(function(a, b) { return a[1] - b[1] }); // sorts everything the planets by gravity
$.each(planets, function(val, text){
  $('table').append($('<tr><td>' + text[0] + 
    '</td><td>' + text[1] + '</td></tr>')); // appends the planet name and gravity
});

// the button will still make the magic happen
$("button").click(function() {
  var weight = $("input").val(); // grab user input from html
  var planet = $("select option:selected").val(); // grabs select option value (position)
  weight *= planet; // multiplies
  $(".answer").html("Your weight on " + $("select option:selected").html() + 
    " is " + Math.round(weight) + "lbs!"); // put something into html
});

