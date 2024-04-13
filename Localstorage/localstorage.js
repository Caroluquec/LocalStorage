//  //Declaracion de variables
// let datos = [{
//     nombre: "Juan",
//     profesion: "Docente",
//     salario: 3000000
// },
// {
//     nombre: "pedro",
//     profesion: "Odontologo",
//     salario: 5000000
// },
// {
//     nombre: "Luisa",
//     profesion: "Psicologa",
//     salario: 4000000
// }]

// //Guardar en el local storage
// localStorage.setItem("info",JSON.stringify (datos))//Para convertirlo a texto
// alert("Datos guardados con exito") 

// //Extrarer datos del local storage
// let informacion = JSON.parse(localStorage.getItem("info"));// Estoy recibiendo el dato en texto y lo estpy convirtiendo a sus estado natural que es un objeto con JSON
// let info = [];
// if(informacion != null){
//     info = informacion;// todo lo qie estaba en informacion pasa a info
// }
// info.forEach((d,i) => {

//     document.write(// estoy btrayendo la informacion inicial. La de es toda la informacion del array. Para poder mostrar la info y recorrer el array
//     `id : ${i+1}
//     Nombre : ${d.nombre} <br>
//     profesion : ${d.profesion}<br>
//     salario : ${d.salario}<br>
//     <hr>
/*     `
);
    
});
//Eliminar la informacion del localstorage. Se utliza muy frecuentemenete para cerrar un sitio dodne me loguie
// localStorage.removeItem("info") */


//Declaracion variable
const d = document;
let clientePro = d.querySelector(".cliente-producto")
let nombrePro = d.querySelector(".nombre-producto");
let precioPro = d.querySelector(".precio-producto");
let imagenPro = d.querySelector(".imagen-producto");
let presentacionPro = d.querySelector(".presentacion-producto");
let botonGuardar = d.querySelector(".btn-guardar");

// //Evento al boton guardar para saber si todo esta funcionando
// botonGuardar.addEventListener("click", function(){
//     //alert(nombrePro.value);
//     console.log(obtenerDatos())
// });

//Agregar evento onclick al boton del formulario
botonGuardar.addEventListener("click", () => {
    //alert(clienteProducto.value)
    validarFormulario();
});

//funcion validar los datos del formulario

function validarFormulario() {
    let datosForm;
    if (clientePro.value == "" || nombrePro.value == "" ||
    precioPro.value == "" || imagenPro.value == "" ){
        alert("Todos los campos de formulario son obligatorios");
    }else{
        datosForm = {
            cliente: clientePro.value,
            nombre: nombrePro.value,
            precio: precioPro.value,
            presentacion: presentacionPro.value,
            imagen: imagenPro.value,

        }
    }
    console.log(datosForm);        
    
    //limpiar los campos
    clientePro.value = "";
    nombrePro.value = "";
    precioPro.value = "";
    presentacionPro.value = "";
    imagenPro.value= "";

    return datosForm;//retorno el objeto datosform
}
//Guardar datos en el local storage

const listadoPedidos = "Pedidos";
function guardarDatos( datos ){
    let pedidos = []; 

    //Traer los datos guardados previamente en el localstorage 
    let pedidosPrevios = JSON.parse(localStorage.getItem(listadoPedidos));
    //Validar datos guardados previamente en l localstorage
    if(pedidosPrevios != null){
        pedidos = pedidosPrevios;
    }
    //Agregar el pedido nuevo al array
    pedidos.push(datos);

    //Guardar datos en el local storage
    localStorage.setItem(listadoPedidos, JSON.stringify(pedidos));
    //validar que los datos fueron guardados
    alert("Datos guardados con éxito")

} 