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

//
document.getElementsByTagName('body')[0].style.margin = '0';

for(i = 0; i< document.querySelectorAll('ul').length; i++){
    document.querySelectorAll('div>ul')[i].style.border = '2px red solid';
}

// for (var item of document.getElementsByTagName('li')){
//     item.style.backgroundColor = 'green';
// }

//pinta los li de los ul
for(i = 0; i < document.getElementsByTagName('li').length; i++){
    document.getElementsByTagName('li')[i].style.backgroundColor = 'orange';
}


//Creacion de nodos y appendar en el DOM
var nodeObj = {
    'tag': 'div',
    'child':[
        {'tag':'h2',
         'text':'hello'
        }
    ]
}
 