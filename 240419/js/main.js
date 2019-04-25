// document.write('Hello World');
//document.getElementsByTagName('body')[0].innerText = "Hello World"

console.log(document.getElementsByTagName('div'));
console.log(document.getElementsByTagName('ul')[0]);
console.log(document.getElementsByClassName('even'));
console.log(document.getElementsByTagName('li')[3]);

// Acceder atravez de QuerySelector

console.log(document.querySelectorAll('div>ul'));
console.log(document.querySelectorAll('div>ul>li.even'));
console.log(document.querySelectorAll('div>ul>li')[3]);




