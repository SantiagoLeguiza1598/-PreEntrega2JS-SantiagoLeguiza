const productos = [
    {id:1, nombre:"Lapicera Maped", precio:1500, stock:10},
    {id:2, nombre:"Tijeras Maped", precio:750, stock:10},
    {id:3, nombre:"Temperas Glitter", precio:950, stock:20},
    {id:4, nombre:"Libretas Colours", precio:2500, stock:10}
]; 
const productos_carrito = []; 

class Producto {
    constructor (id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.iva = 21;
    }
    aplicarIVA() {
        this.precio = this.precio + ((this.precio * this.iva) / 100);
    }
}
function buscarProducto(id) {
    return (productos.find(item => item.id === id) || null); 
}
function agregarProducto(producto) {
    productos_carrito.push(producto);
}
function eliminarProducto(id) {
    let pos = productos_carrito.findIndex(item => item.id === id);

    if (pos > -1) {
        productos_carrito.splice(pos, 1);
    }
}
function recorrerProductos() {
    let contenido_productos = "";

    for (let producto of productos) {
        contenido_productos += producto.id + "- " + producto.nombre + " $" + producto.precio + "\n";
    }

    return contenido_productos;
}
function recorrerProductosCarrito() {
    let contenido_productos = "";
    for (let producto of productos_carrito) {
        contenido_productos += producto.id + "- " + producto.nombre + " $" + producto.precio + "\n";
    }
 return contenido_productos;
}
let cargarProducto = true;
cargarProducto = true;
while (cargarProducto) {
    let contenido_productos = recorrerProductos();
    let id_producto = parseInt(prompt("Seleccione el Producto a agregar al Carrito:\n\n" + contenido_productos))
    let producto = buscarProducto(id_producto);
    if (producto != null) {
        agregarProducto(producto);
    } else {
        alert("No existe el Producto con el ID: " + id_producto + "!");
    }
    cargarProducto = confirm("Desea agregar otro Producto al Carrito?");
}
cargarProducto = true;

let suma_total = 0;
let contenido_productos = "";

for (let prod of productos_carrito) {
    let producto = new Producto(prod.id, prod.nombre, prod.precio, prod.stock);
    producto.aplicarIVA(); 
    contenido_productos += producto.id + "- " + producto.nombre + " $" + producto.precio + "\n";
    suma_total += producto.precio; 
}
alert("Productos Seleccionados:\n\n" + contenido_productos + "\n\nTotal a Pagar: $" + suma_total);