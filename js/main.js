var normal = document.getElementById("nav-menu");
var reverse = document.getElementById("nav-menu-left");

var icon = normal !== null ? normal : reverse;

// Toggle the "menu-open" % "menu-opn-left" classes
function toggle() {
	  var navRight = document.getElementById("nav");
	  var navLeft = document.getElementById("nav-left");
	  var nav = navRight !== null ? navRight : navLeft;

	  var button = document.getElementById("menu");
	  var site = document.getElementById("wrap");
	  
	  if (nav.className == "menu-open" || nav.className == "menu-open-left") {
	  	  nav.className = "";
	  	  button.className = "";
	  	  site.className = "";
	  } else if (reverse !== null) {
	  	  nav.className += "menu-open-left";
	  	  button.className += "btn-close";
	  	  site.className += "fixed";
	  } else {
	  	  nav.className += "menu-open";
	  	  button.className += "btn-close";
	  	  site.className += "fixed";
	    }
	}

// Ensures backward compatibility with IE old versions
function menuClick() {
	if (document.addEventListener && icon !== null) {
		icon.addEventListener('click', toggle);
	} else if (document.attachEvent && icon !== null) {
		icon.attachEvent('onclick', toggle);
	} else {
		return;
	}
}

var search = function ()
{
	// Buscador
	if(document.getElementById('search-button')){
		document.getElementById('search-button').onclick = function ()
		{
			document.getElementById('search').style.transform = 'translateY(0)';
			document.getElementById('search').style.webkitTransform = 'translateY(0)';
			document.getElementById('search-button').style.display = 'none';
			document.getElementById('search-close').style.display = 'block';
		}
	}

	if(document.getElementById('search-close')){
		document.getElementById('search-close').onclick = function ()
		{
			document.getElementById('search-close').style.display = 'none';
			document.getElementById('search').style.transform = 'translateY(-100%)';
			document.getElementById('search').style.webkitTransform = 'translateY(-100%)';
			document.getElementById('search-button').style.display = 'block';
			document.getElementById('search-q').innerHTML = '';
		}
	}

	if(document.getElementById('search-box')){
		document.getElementById('search-box').onsubmit = function ()
		{
			document.getElementById('search-q').innerHTML = '';
		}
	}
}

menuClick();
search();