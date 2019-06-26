var http=require('http');   // module
//object----- model
var company ={
    title:"company data",
    name:"Rockwell Automation",
    no_of_employees:35000,
    likes:500,
    
};

var count=45;
count++;
var controller=function(request,response)
{
	response.writeHead(200,
	                {"Content-Type" : "text/plain"});
	                response.end( JSON.stringify(company));
};
var server=http.createServer(controller);
server.listen(7000);
console.log("listening on port 7000");