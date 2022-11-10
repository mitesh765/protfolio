const header = document.queryselector("header");

window.addEventlistener ("scroll", function () {
	header.classlist.toggle("sticky", window.scrollY > 0);
});

let menu = document.queryselector('#menu-icon');
let menu =document.queryselector('.navbar');

menu.onclick = () => {
	menu.classlist.toggle('bx-x');
	navbar.classlist.toggle('avtive');
};
