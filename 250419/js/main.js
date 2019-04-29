
var nodeObj = {
    tag: 'div',
    padre: [
        {tagChild: 'ul',
         grandChild:[
            {tagGrandChild: 'li',
             text: 'hola'
            }
         ]
        }
    ]
}

function creaAbuelos(tag){
    return document.createElement(tag);
}

// function creaPadre(padre){
//   return document.createElement(padre[0].tagChild)
// }
//
// //Abstraccion y Modularizacion
// function creaPadres(padre){
//     var element = document.createElement(padre.tagChild);
//     var elemento = nodeObj.padre.forEach(function(item) {
//         item.tagChild
//     });
//     return padreNode;
// }
