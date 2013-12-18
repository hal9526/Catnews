//added error handling routine

var mysql = require("mysql");
var gpio = require("gpio");

function getcurrenttime() {
    var date;
    date = new Date();
    date = date.getUTCFullYear() + '-' +
	('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
	('00' + date.getUTCDate()).slice(-2) + ' ' + 
	('00' + date.getUTCHours()).slice(-2) + ':' + 
	('00' + date.getUTCMinutes()).slice(-2) + ':' + 
	('00' + date.getUTCSeconds()).slice(-2);
    //console.log(date);
    return date;
}

var connection = mysql.createConnection({
    host:'localhost',
    database:'catnews',
    user:'root',
    password:'raspberry'
});

var query = connection.query('select * from time;', function(err, results) {
    console.log('--- results ---');
    console.log(results);
});

var gpio4 = gpio.export(4, {
  direction: "in",
  ready: function() {
  }
});

//var gpio17 = gpio.export(17, {
  // direction: "in",
  // ready: function() {
  // }
//});

//var processPin4 = function(val) { console.log(val); };
//gpio4.on("change", processPin4);

gpio4.on("change", function(val) {
    var date;
   // value will report either 1 or 0 (number) when the value changes
    if (val == 0) { 
	console.log("4",val);
	date = getcurrenttime();
	console.log(date);
	query = connection.query('INSERT INTO time(timestamp) VALUES(\'' + date + '\');', function(err, result) {
		if (err) {	    
		    console.log(err);
		} else {
		    console.log('done');
		    console.log(result);
		}
	});
    }
});

//gpio17.on("change", function(val2) {
   // value will report either 1 or 0 (number) when the value changes
   // console.log("17",val2)
//});


