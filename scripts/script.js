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
