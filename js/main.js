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

		document.getElementById('btn-close-customer').addEventListener('click', toggle);
	} else if (document.attachEvent && icon !== null) {
		icon.attachEvent('onclick', toggle);
		document.getElementById('btn-close-customer').attachEvent('onclick', toggle);
	} else {
		return;
	}
}

var search = function ()
{
	// Mostramos el buscador
	if(document.getElementById('search-button')){
		document.getElementById('search-button').onclick = function ()
		{
			document.getElementById('search').style.transform = 'translateY(0)';
			document.getElementById('search').style.webkitTransform = 'translateY(0)';
			document.getElementById('search-button').style.display = 'none';
			document.getElementById('search-close').style.display = 'block';
			document.getElementById('search-q').focus();
		}
	}

	// Cerramos el buscador
	if(document.getElementById('search-close')){
		document.getElementById('search-close').onclick = function ()
		{
			document.getElementById('search-close').style.display = 'none';
			document.getElementById('search').style.transform = 'translateY(-100%)';
			document.getElementById('search').style.webkitTransform = 'translateY(-100%)';
			document.getElementById('search-button').style.display = 'block';
			document.getElementById('search-q').value = '';
		}
	}

	// Limpiamos el input del buscador
	if(document.getElementById('submit')){
		document.getElementById('submit').onclick = function ()
		{
			var data = document.getElementById('search-q').value;
			var url = 'https://cse.google.com.mx/cse?cx=partner-pub-0593566584451788:4085293215&ie=UTF-8&q='+data+'#gsc.tab=0&gsc.q='+data+'&gsc.page=1';

			if(data.length > 0){
				location.href = url;
			}

			return null;
		}
	}
}

menuClick();
search();