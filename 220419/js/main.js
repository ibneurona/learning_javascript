// Dado un objto sacar la primera parte de el CURP

//Creacion de mi array de objetos
var persona_array = [{
    'nombre': 'Juan',
    'aPaterno': 'Guzman',
    'aMaterno': 'Linares',
    'fechaNacimiento': '1996-02-11',
    'genero': 'hombre'
},{
    'nombre': 'Rodolfo',
    'aPaterno': 'Olmedo',
    'aMaterno': 'Jimenez',
    'fechaNacimiento': '1986-11-14',
    'genero': 'hombre'
},
{
    'nombre': 'Anna',
    'aPaterno': 'Martinez',
    'aMaterno': 'Romero',
    'fechaNacimiento': '1987-04-16',
    'genero': 'mujer'
}];

// GULJ960211H

//Funcion constructora
function Persona(nombre,aPaterno, aMaterno,fechaNacimiento,genero) {
    this.name = nombre;
    this.lastName = aPaterno;
    this.secLastName = aMaterno;
    this.birthday = fechaNacimiento;
    this.gen = genero;
    this.shortName = function(){ //metodo 
        return (
            this.lastName.slice(0,2).toUpperCase() + 
            this.secLastName.charAt(0).toUpperCase() + 
            this.name.charAt(0).toUpperCase()
            );
    };
    this.getDate = function (){
        return (
            this.birthday.slice(2,4) +
            this.birthday.slice(5,7) +
            this.birthday.slice(8)
        );
     };
    this.my_curp = function(){
        return this.shortName() + this.getDate();
    };
};

// crea al objeto persona llamando a su funcion constructora
var persona = new Persona('Rodolfo','Olmedo','Jimenez','1986-11-14','hombre');
console.log(persona);

//DESPLIEGUE DE CURP DE EL ARREGLO persona_array
persona_array.forEach(function(item, index, array){
    person = new Persona(item.nombre, item.aPaterno, item.aMaterno, item.fechaNacimiento, item.genero);
    console.log(person.my_curp());
});