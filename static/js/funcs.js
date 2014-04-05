$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  var drawSquare = function(x, y, sideLen, color) {
    //alert('Drawing a square is unimplemented!');  
    context.strokeStyle = color;
    context.strokeRect(x, y, sideLen, sideLen);
  };


    // Write square drawing code here
    // Delete the alerts when done
  

  var drawCircle = function(x, y, radius, color) {
    //alert('Drawing a circle is unimplemented!');
    context.beginPath();
    context.arc(x, y, radius, 0, 2*Math.PI);
    context.strokeStyle = color;
    context.closePath();
    context.stroke();
    // Write circle drawing code here
    // Delete the alert when done
  };


  // Write drawTriplet function 


  var drawTriplet=function(x, y, color) {
    var radius = 75;
    drawCircle(x+50,y,radius,color);
    drawCircle(x+25,y-50,radius,color);
    drawCircle(x,y,radius,color);



  };

  // Challenge:
  // Write drawTriangle, drawTriforce, drawTripleTriforce,
  // drawSierpinski functions here

  $('#p1').click(function() {
    drawSquare(100, 200, 50, 'blue');
  });

  $('#p2').click(function() {
    drawSquare(300, 100, 25, 'green');
  });

  $('#p3').click(function() {
    drawCircle(100, 200, 50, 'red');
  });

  $('#p4').click(function() {
    drawCircle(300, 100, 25, 'black');
  });

  //---------------------------------------------------------------------------
  //Write your code for p5-p11 here
  //

  $('#p5').click(function() {
    drawSquare(200,200,100, 'red');
    drawCircle(250,250,50, 'blue');
    drawCircle(250,200,50, 'green');
    drawCircle(200,250,50, 'green');
    drawCircle(250,300,50, 'green');
    drawCircle(300,250,50, 'green');
    });

  $('#p6').click(function() {
    drawTriplet(250,250,'green');
    });

  $('#p7').click(function() {
    drawTriplet(150,150,'blue');
    });

  $('#p8').click(function() {
    drawTriplet(150,150,'blue');
    drawTriplet(200,200,'green');
    drawTriplet(75,75,'red');
    drawTriplet(350,350,'yellow');
    });

  


  
    


    
  

});
