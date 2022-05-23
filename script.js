console.log('ji');

// let clikbtn = document.querySelectorAll('.clickMe');
// console.log(clikbtn);
// clikbtn.forEach(btn){

// }
// $('.clickMe').click(function () {
// 	$('nav ul .btn-show').toggleClass('.show');
// });
let btn = document.querySelector('.btn-show');
let sobtn = document.querySelector('.clickMe');
sobtn.addEventListener('click', () => {
	console.log('hello');
	btn.classList.toggle('show');
});

let btnn = document.querySelector('.fMe');
let fbtn = document.querySelector('.fbtn-show');
btnn.addEventListener('click', () => {
	console.log('hello11');
	fbtn.classList.toggle('show');
});

let mbtnn = document.querySelector('.morebtn');
let mbtn = document.querySelector('.mbtn-show');
mbtnn.addEventListener('click', () => {
	console.log('hello11');
	mbtn.classList.toggle('show');
});

let rbtnn = document.querySelector('.regbtn');
let rbtn = document.querySelector('.rbtn-show');
rbtnn.addEventListener('click', () => {
	console.log('hello11');
	rbtn.classList.toggle('show');
});

let dbtnn = document.querySelector('.daybtn');
let dbtn = document.querySelector('.dbtn-show');
dbtnn.addEventListener('click', () => {
	console.log('hello11');
	dbtn.classList.toggle('show');
});
