var express = require('express');
var app = express();

var userController=function (request, response) {
  var user=[
  
            {Emp_ID:101,Emp_FName:'anamika',Emp_LName:'Patil',Emp_Age:43,Designation:'SoftwareDevloper'},
			{Emp_ID:102,Emp_FName:'priyanka',Emp_LName:'Randhe',Emp_Age:27,Designation:'TeamLeader'},
			{Emp_ID:103,Emp_FName:'kamini',Emp_LName:'Patil',Emp_Age:28,Designation:'ProjectManager'},
			{Emp_ID:104,Emp_FName:'Shraddha',Emp_LName:'Jadhav',Emp_Age:47,Designation:'Tester'},
			
           
			];
  response.send(user);
};

app.get('/user',userController );
var server = app.listen(4000);
console.log("Listening At Port 4000");