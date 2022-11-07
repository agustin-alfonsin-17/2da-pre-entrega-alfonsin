
alert('Tienda online productos ceramica');

const nombreUsuario = prompt('ingrese su nombre y apellido');
console.log('bienvenido ' + nombreUsuario)

function Producto(nombre, precio, marca){
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
}

const Producto1 = new Producto('portaPapel', 1500, 'NR');
const Producto2 = new Producto('setMatero', 3500, 'NR');
const Producto3 = new Producto('recipiente', 2500, 'NR')

console.log(Producto1);
console.log(Producto2);
console.log(Producto3);

const productos = ['portaPapel', 'setMatero', 'recipiente']
for (let i = 0; i < 3; i++){
    console.log(productos[i]);
}

productos.push('tetera')
console.log(productos)

console.log(productos.join(' / '))


const productosMasVendidos = [
    {top1: "setMatero", precio: 3500, ventasSemanales: 60},
    {top2: "recipiente", precio: 2500, ventasSemanales: 40},
    {top3: "portaPapel", precio: 1500, ventasSemanales: 15}
];

productosMasVendidos.forEach((producto) => {
    console.log(producto);
});


console.log ('producto mas barato sale ' + Math.min(1500, 2500, 3600))

console.log ('producto mas caro sale ' + Math.max(1500, 2500, 3600))