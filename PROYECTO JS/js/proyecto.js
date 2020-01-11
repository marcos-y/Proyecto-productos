class Producto {
    constructor(nombre, precio, categoria,descripcion) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.descripcion = descripcion;
    }
}


var productos = [];
var i = 0;

var inputValue = () => {
    let value1 = document.getElementById("value1").value;
    let value2 = document.getElementById("value2").value;
    let value3 = document.getElementById("value3").value;
    let value4 = document.getElementById("value4").value;
    i=i+1;
    productos[i]= new Producto (value1,value2,value3,value4);
    console.log(productos[i]);

    //CREANDO EN EL DOM
    const lista = document.getElementById("lista");
    newProdu.innerHTML = `
        <li class="list-group-item" id="li1">
           test producto
        </li>
    `
    
}

