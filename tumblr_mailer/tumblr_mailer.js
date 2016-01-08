var fs = require('fs');

var csvFile = fs.readFileSync("friend_list.csv", "utf8");

var emailTemplate = fs.readFileSync("email_template.ejs", "utf8");

var ejs = require('ejs');

// Authenticate via OAuth
var tumblr = require('tumblr.js');
var client = tumblr.createClient({
  consumer_key: 'n64bpMJQxqrFhICoc8WCcU2sM5BFX4UFzlfGj2OZofUMXNd7bu',
  consumer_secret: 'RudKvINdCPTcaH8FawJPm1BBpkp7ncVng7DetRYiG8D4nPyUtO',
  token: 'H0pV2noia1rb8Dk5sVP6gZYTDFUyBmrtkxAGbxWbfSnT3v4swf',
  token_secret: 'c3NkvrLSDcclfBp4h29mD87NfwR6WhauvPhdg6cJ5S1eNSFEmk'
});

// empty array; will store latest posts
var latestPosts = [];

client.posts('developmentability.tumblr.com', function(err, blog){
  var myPosts = blog.posts;
  var d = new Date();
  for (var i = 0; i < myPosts.length; i++) {
  	var parsedDate = tumblrDateParse(myPosts[i].date);
  	// checks if post was within the past week
  	if ((d.getTime() - parsedDate.getTime()) < 604800000){
  		// pushes post to latestPosts
  		latestPosts.push(myPost[i]);
  	}
  }
})

// Parses a tumblr post's "date" property into a JavaScript 'date' object.
function tumblrDateParse(string){
	var dateArray = string.split(" ");
	if (dateArray[2] == "GMT"){
		return new Date(dateArray[0] + "T" + dateArray[1]);
	}
}

// Parses a csv file into an array of objects, using the first line as a header.
function csvParse(nameOfFile){
	//0: create empty array
	var parsedArray = [];
	//1: split file into lines
	var lines = nameOfFile.split("\n");
	//2: separate header row; split header row into keys
	var keys = lines.shift().split(",");
	//3: iterate through lines
		for (var i = 0; i < lines.length; i++) {
			//3a: create new object for each
			var newObj = {};
			//3b: split lines into values
			var values = lines[i].split(",");
			for (var j = 0; j < values.length; j++) {
				//3c: assign k/v pairs to new object
				newObj[keys[j]] = values[j];
			};
			parsedArray.push(newObj);
		};
	return parsedArray;
}

// Renders separate html pages from a template and an array.
function createEmails(parsedArray, template){
	for (var i = 0; i < parsedArray.length; i++) {
		var newEmail = ejs.render(template, parsedArray[i]);
		console.log(newEmail);
	};
}

// createEmails(csvParse(csvFile), emailTemplate);