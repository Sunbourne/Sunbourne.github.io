// Burger Manu Toggler

var burger = document.getElementById('burger');

var menu = document.getElementById('main-menu');

burger.onclick = function (){
	if (menu.className == 'hidden'){
		menu.className = '';
		burger.className = 'open';
	}else{
		menu.className = 'hidden';
		burger.className = '';
	}
};

function extractPageName(hrefString)
{
	var arr = hrefString.split('/');
	return  (arr.length<2) ? hrefString : arr[arr.length-2].toLowerCase() + arr[arr.length-1].toLowerCase();
}

function setActiveMenu(arr, crtPage)
{
	for (var i=0; i<arr.length; i++)
	{
		if(extractPageName(arr[i].href) == crtPage)
		{
			if (arr[i].parentNode.tagName != "DIV")
			{
				arr[i].className = "current";
				arr[i].parentNode.className = "current";
			}
		}
	}
}

function setPage()
{
	hrefString = document.location.href ? document.location.href : document.location;

	if (document.getElementById("main-menu")!=null)
		setActiveMenu(document.getElementById("main-menu").getElementsByTagName("a"), extractPageName(hrefString));
}


window.onload=function()
{
	setPage();
}
