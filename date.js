/* The following displays the date: */

  function makeArray() {
  for (i = 0; i<makeArray.arguments.length; i++)
  this[i + 1] = makeArray.arguments[i];
  }

  var months = new makeArray('January','February','March','April','May',
  'June','July','August','September','October','November','December');
  var dayarray = new makeArray('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
  var date = new Date();
  var day = date.getDate();
  var dayz = date.getDay() + 1;
  var month = date.getMonth() + 1;
  var yy = date.getYear();
  var year = (yy < 1000) ? yy + 1900 : yy;

  document.write(dayarray[dayz] + ", " + day + " " + months[month] + " " + year);