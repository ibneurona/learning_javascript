
var automovil_array = [
    ['Kia','Automatico',230000, 'Rojo','2019','Rio', '2.0'],
    ['Toyota','Estandar',210000,'Negro','2017','Yaris','1.5'],
    ['BMW','Automatico',610000,'Negro','2018','X3M',],
    ['Audi','Estandar',526000,'Gris','2015','A2']
];

// Creacion de funcion constructora
function Featurescars (marca, transmision, precio, color, year, modelo, motor){
    this.brand = marca;
    this.transmision = transmision;
    this.precio = precio;
    this.color_car = color;
    this.year = year;
    this.modelo = modelo;
    this.engine = motor;
    this.getPriceTon = function(){
        return (this.precio + ' ' + this.transmision)
    }
}

//Accediendo manualmente
var my_car = new Featurescars(automovil_array[0][0],automovil_array[0][1],)
console.log(my_car);

//iteracion

automovil_array.forEach(function(item, index){

    mi_carro = new Featurescars (item[0], item[1], item[2], item[3], item[4], item[5],item[6]);
    console.log(mi_carro.brand + mi_carro.getPriceTon());     
})


// precio, transmision (automatio  o manual) y modelo completo