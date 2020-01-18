class Producto {
    constructor(id, nombre, precio, categoria, descripcion) {
        this.id= id;
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
    let idProducto = productos.length + 1;
    let nuevoProd = new Producto(idProducto,value1, value2, value3, value4);
    productos.push(nuevoProd);
    console.log(productos);

    //CREANDO EN EL DOM
    lista.innerHTML = lista.innerHTML + `
        <li class="list-group-item" data-toggle="modal" data-target="#exampleModal" onclick=encontrar(${idProducto}) id="produ">
           ${value1}
        </li>`;
}


var encontrar = (id) => {
    console.log(id);
    
    name = name.replace(/\s/g,'');
    console.log(name);

    let produ = productos.filter(producto => {
        return producto.id === id;
    })

    console.log(produ);
    desc.innerHTML = `${produ[0].nombre},${produ[0].precio},${produ[0].categoria},${produ[0].descripcion}`;

}

//hacer reste formulario


















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

