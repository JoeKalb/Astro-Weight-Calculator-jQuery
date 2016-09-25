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
var gravity = planets.slice(0);

/* Append option into #names, add the value, add the text[0]
just to keep the first part of the text array*/
// making the drop down list
planets.reverse();
console.log('First position in gravity is: ' + gravity[0][0]);
console.log("First position is planets is: " + planets[0][0]);
$.each(planets, function(val, text) { 
  $('#names').append( $('<option>').val(text[1]).html(text[0])); 
});

// swapping gravity positions for sorting and then creating table
$.each(gravity, function(val, text){
  var grav = text[1];
  var name = text[0];
  gravity[val][0] = grav;
  gravity[val][1] = name;
});
gravity.sort();
console.log('New first position in gravity is: ' + gravity[0][0]);
console.log("New first position is planets is: " + planets[0][0]);
// create the planet sorting table
$.each(gravity, function(val, text){
  $('table').append($('<tr><td>' + text[1] + 
    '</td><td>' + text[0] + '</td></tr>')); // appends the planet name and gravity
});

// the button will make the magic happen
$("button").click(function() {
  var weight = $("input").val(); // grab user input from html
  var planet = $("select option:selected").val(); // grabs select option value (position)
  weight *= planet; // multiplies
  $(".answer").html("Your weight on " + $("select option:selected").html() + 
    " is " + Math.round(weight) + "lbs!"); // put something into html
});

