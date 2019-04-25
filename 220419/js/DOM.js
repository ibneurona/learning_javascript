
var divs = [
    {
        'height': '100px',
        'width': '30px',
        'backgroundColor': 'red'
    },
    {
        'height': '200px',
        'width': '30px',
        'backgroundColor': 'peru'
    },
    {
        'height': '300px',
        'width': '30px',
        'backgroundColor': 'yellow'
    },
    {
        'height': '100px',
        'width': '30px',
        'backgroundColor': 'purple'
    },
    {
        'height': '200px',
        'width': '30px',
        'backgroundColor': 'black'
    },
]

//Acceso al DOM por JS forEach no es metodo de getElementsByTagName

for(var i = 0; i< document.getElementsByTagName('div').length; i++){
    document.getElementsByTagName('div')[i].style.height = divs[i].height;
    document.getElementsByTagName('div')[i].style.backgroundColor = divs[i].backgroundColor;
}