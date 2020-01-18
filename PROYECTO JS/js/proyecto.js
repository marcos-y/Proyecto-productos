class Producto {
    constructor(nombre, precio, categoria, descripcion) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.descripcion = descripcion;
    }
}


var productos = [];


var inputValue = () => {
    let value1 = document.getElementById("value1").value;
    let value2 = document.getElementById("value2").value;
    let value3 = document.getElementById("value3").value;
    let value4 = document.getElementById("value4").value;

    let nuevoProd = new Producto(value1, value2, value3, value4);
    productos.push(nuevoProd);
    console.log(productos);

    //CREANDO EN EL DOM
    lista.innerHTML = lista.innerHTML + `
        <li class="list-group-item" data-toggle="modal" data-target="#exampleModal" onclick="encontrar()" id="produ">
           ${value1}
        </li>`;
}


var encontrar = () => {

    let name = document.getElementById("produ").innerHTML;
    console.log(name);

    let pos;
    // BUSQUEDA CON ARRAY
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre === name) {
           console.log('encontrado');
            pos=i;
            console.log('posicion:', pos);
        }
    }
    
    //MUESTRO PRODUCTO DEL ARRAY HECHO CON FOR
    console.log(productos[pos]);

    desc.innerHTML = `${productos[pos]}`

    //OTRA FORMA!!!!!!!!:--------------------------------

    //ASIGNO LA POS A BUSCADOR (DEVUELVE NUM, -1 SI NO EXISTE)
    //let buscador = productos.indexOf(nombre); 
    //console.log(buscador);
    
    //MUESTRO LO QUE HAY EN ESA POSICION DEL ARRAY
    //console.log(productos[buscador]);

}





















//const arrayElementos = [];
//const getValue = nombre => document.getElementByiD(NOMBRE).VALUE;
//getValue('nombre');
// onst renderListr = arrayMostrar
//let listaDeeLEMMENTOS=0;

//for (const nombre of arrayMostrar){
//    listaDeElementos = listaDeElementos +  <li class="list-group-item" data-toggle="modal" data-target="#exampleModal">
//    ${value1}
// </li>`;
// }

