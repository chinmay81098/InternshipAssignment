window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	var myButton = document.getElementById('myBtn');
	if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
		myButton.style.display = "block";
	  } else {
		myButton.style.display = "none";
	  }
	}
function gotop() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	} 
