$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  //---------------------------------------------------------------------------
  //Write your code for p1-p12 here
  //

  $('#p1').click(function(){
  	context.strokeRect(10,20,10,20)
  });
  

$('#p2').click(function(){
	context.strokeRect(30,30,30,30)
});


$('#p3').click(function(){
context.beginPath();
context.arc(200,150,125,2,4);
context.stroke ()
});

$('#p4').click(function(){
  context.beginPath();
  context.arc(300,200,150,3,5*Math.PI);
  context.stroke()
});

$('#p5').click(function(){
  context.moveTo (15,45);
  context.lineTo(80,20);
  context.strokeStyle = 'black';
  context.stroke();
  });

$('#p6').click(function(){
  context.strokeStyle = 'green';
  context.strokeRect(80,80,20,40)
});

$('#p7').click(function(){
  context.beginPath();
  context.arc(300,200,150,3,5*Math.PI);
  context.fillStyle = 'red';
  context.fill();
  context.closePath();
});

$('#p8').click(function(){
  context.strokeStyle = 'blue';
  context.strokeRect(40,40,85,85);
  context.fillStyle = 'yellow';
  context.fillRect(40,40,85,85);
 

  });

$('#p9').click(function(){
  for (var i = 100; i<=100; i+=50)
    context.strokeRect(i,100,50,50);
    

  });

$('#p10').click(function(){
  for (var i = 0; i<500; i+=5)
    context.strokeRect(i,0,5,5);
  
  });

 });  
  

 


 