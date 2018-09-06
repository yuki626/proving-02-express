//Lets require/import the HTTP module
var http = require('http');
var fs = require('fs');

//Lets define a port we want to listen to
var PORT=8080;

//We need a function which handles requests and send response
//reponse.end simply will show whatever is entered in the url address, so it's "/" plus whatever
//request.url is the method holding the info in the url
function handleRequest(req, res){

	fs.readFile("index.html", function(err, data){
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.end(data);	
	})

}

//test change method from "end" to "start" will show that it doesn't work. there's no start method
// function handleRequest(request, response){
//     response.first('It Works!! Path Hit: ' + request.url);
// }

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});