// Problem 2 (Peekaboo) ------------------------------------------------------
// WRITE CODE HERE
//$('#ComeBack').hide();
/*
if($("#GoAway").is(":visible")){
	$('#GoAway').click(function() {
			$('#GoAway').hide();
			$('#main_img').hide();
			$('#ComeBack').show();
		}
	});
 else {
	$('#ComeBack').click(function() {
		$('#ComeBack').hide();
		$('#main_img').show();
		$('#GoAway').show();
	});
}
*/
$('#GorillaVisibility').click(function() {
	if ($('#GorillaVisibility').text()==="Go Away!") {
		$('#main_img').hide();
		$('#GorillaVisibility').text("Come Back!");


	} else{ 
		$('#main_img').show();
		$('#GorillaVisibility').text("Go Away!");
	}
		
	
});


/*$('#ComeBack').hide();
if($("#GorillaVisibility").text() === "Go Away!"){
        $('#GorillaVisibility').click(function() {
                      
                        $('#main_img').hide();
                        $('#ComeBack').show();
        })
/*} else { alert("Hello");
        $('#G').click(function() {
                $('#ComeBack').hide();
                $('#main_img').show();
                $('#GoAway').show();
        });
}
*/




// Problem 3 (Swap Em) -----------------------------------------------
// WRITE CODE HERE
function onchange_img() {
	var textusertyped = $('#new_img_file').val();
	var texttoshow = "/static/img/"+textusertyped;
	$('#main_img').attr('src', texttoshow);
}



$('#change_img').click(onchange_img);




// Problem 4 (Find the Source) -------------------------------------------------
$('.clickable').click(function() {
	alert($(this).attr('src'));
});

// Problem 5 (Imgrr) -------------------------------------------------
// WRITE CODE HERE

$('.clickable1').click(function() {
	var animals = ($(this).attr('src'));
	$('#clickablemain').attr('src',animals);
});
