/* let datos = [{
    nombre : "Juan",
    profesion : "Desarrollador",
    salario : 5000000
},
{
    nombre : "Mariana",
    profesion : "Desarrollador",
    salario : 5000000
}

]


localStorage.setItem("info", JSON.stringify(datos));
alert("Datos guardados");
 */
/* let informacion = JSON.parse(localStorage.getItem("info"));
let info = []

if (informacion != null) {
    info = informacion;
}

info.forEach((t, i) => {
    document.write(
        `   Id: ${i+1}
            Nombre: ${t.nombre}  <br>
            Preofesion: ${t.profesion} <br>
            Salario: ${t.salario}
            <hr>
        `
    );
});



/* localStorage.removeItem("info") */


//Funcion para tomar datos dle formulario

function obtener_datos() {

    if (name_product.value != "" && price_product.value != "" && image_product.value != "") {

        //message_camposr.classList.add('disabled')
        let producto ={
            nombre : nombre_producto.value,
            precio : precio_producto.value,
            imagen: imagen_producto.value,
            descripcion : descripcion_producto.value
        }
    
        nombre_producto.value=""
        precio_producto.value=""
        imagen_producto.value=""
        descripcion_producto.value=""
    
        return producto //retorno el objeto
        
    }else{
        message_camposr.classList.toggle('d-none')
    }

    
}

//Guardar datos en el local storage

const listadoProductos = "Productos"

function guardar_datos(datos) {

    let productos = []
    //extarer datos guardados
    let productos_guardados= JSON.parse(localStorage.getItem(listadoProductos))
    //Validar los datos guardados

    if (productos_guardados != null) {
        productos = productos_guardados
    }
    //ageregar el pedido nuevo al array
    productos.push(datos)
    //Guardar en el local storage
    localStorage.setItem(listadoProductos, JSON.stringify(productos))

}

/* function buscando_producto(productos) {
        let lista_productos = document.getElementById('buscando')
        lista_productos.innerHTML=''
    
        productos.forEach(function(productos) {
            let producto_item = document.createElement('li')
            producto_item.textContent = productos.nombre
            lista_productos.appendChild(producto_item)
            
            producto_item.addEventListener('click', function() {
                pr_buscar.value = productos.nombre
                lista_productos.innerHTML= ''
    
            })
        });
    
  
    } */


function buscando_producto() {

    let pr_bus = pr_buscar.value.toLowerCase()

    let productos_guardados = JSON.parse(localStorage.getItem(listadoProductos))

    let coincidencias = productos_guardados.filter(producto => producto.nombre.toLowerCase().includes(pr_bus))

    coincidencias.forEach(pr => {
        let fila =document.createElement("tr")
        fila.innerHTML = `
            <td>-</td>
            <td> ${pr.nombre} </td>
            <td> ${pr.precio} </td>
            <td> <img src="${pr.imagen}" width="50%"></td>
            <td> ${pr.descripcion} </td>
        `
        tabla.appendChild(fila)
    })




}

//Funcion para extraer datos del local storage


/* function mostrar_productos() {
    let productos =[]
    let pr_selec = pr_buscar.value

    borrar_tabla()

     //extarer datos guardados
     let productos_guardados= JSON.parse(localStorage.getItem(listadoProductos))
     //Validar los datos guardados

     if (productos_guardados != null) {
         productos = productos_guardados
     }


    if (productos_guardados != null) {
        pr_en = productos_guardados.find(producto => producto.nombre === pr_selec)

        if (pr_en) {
            let fila =document.createElement("tr")
            fila.innerHTML = `
                <td>"-"</td>
                <td> ${pr_en.nombre} </td>
                <td> ${pr_en.precio} </td>
                <td> <img src="${pr_en.imagen}" width="50%"></td>
                <td> ${pr_en.descripcion} </td>
                <td>

            `
            tabla.appendChild(fila)
        }

    }


} */


function mostrar_todo() {
    let productos =[]
    
    borrar_tabla()

    //extarer datos guardados
    let productos_guardados= JSON.parse(localStorage.getItem(listadoProductos))
    //Validar los datos guardados

    if (productos_guardados != null) {
        productos = productos_guardados
    }

    //mostrar datos en la taba

    productos.forEach((pr, i) =>{
        let fila =document.createElement("tr")
        fila.innerHTML = `
            <td> ${i} </td>
            <td align="center"> ${pr.nombre} </td>
            <td> ${pr.precio} </td>
            <td> <img src="${pr.imagen}" width="50%"></td>
            <td> ${pr.descripcion} </td>
            <td>
            |<span onclick="ediatr_producto(${i})" class="btn btn-warning btn-editar">✏</span>
            </td>
            <td>
            |<span onclick="eiminar_pedido(${i})" class="btn btn-danger btn-eliminar">🗑</span>
            </td>
        `
        tabla.appendChild(fila)
    })

}




//quitar los datos de la tabla

function borrar_tabla() {
    let filas = document.querySelectorAll(".table tbody tr")

    filas.forEach((f) => {
        f.remove()
        
    });
}


// Eliminar un producto

function eiminar_pedido(pos) {
    let productos =[]



    //extarer datos guardados
    let productos_guardados= JSON.parse(localStorage.getItem(listadoProductos))
    //Validar los datos guardados

    if (productos_guardados != null) {
        productos = productos_guardados
    }

    // confirmar producto a eiminar

    let confirmar = confirm("Deseas eliminar este producto: " + productos[pos].nombre + "?")

    if (confirmar) {
        alert(`Producto ${p.nombre} eliminado con exito`)
        let p = productos.splice(pos, 1)
        //guardar los datos que quedaron en loca
        localStorage.setItem(listadoProductos, JSON.stringify(productos))
        borrar_tabla()
    }
}

//Editar un producto

function ediatr_producto(pos) {
    let productos =[]
    
    
    
    //extarer datos guardados
    let productos_guardados= JSON.parse(localStorage.getItem(listadoProductos))
    //Validar los datos guardados

    if (productos_guardados != null) {
        productos = productos_guardados
    }

    //Pasar os datos al formulario
    name_product.value = productos[pos].nombre
    price_product.value = productos[pos].precio
    image_product.value = productos[pos].imagen
    description_product.value = productos[pos].descripcion

    //Activar boton editar

    let btn_editar = document.querySelector('.btn-editar')
    btn_editar.classList.toggle("d-none")
    btn_guardar.classList.toggle("d-none")

    btn_editar.addEventListener("click", () =>{
        productos[pos].nombre = name_product.value
        productos[pos].precio = price_product.value 
        productos[pos].imagen = image_product.value 
        productos[pos].descripcion = description_product.value 

        //datos editados local storage
        localStorage.setItem(listadoProductos, JSON.stringify(productos))
        alert("Dato actualizado con exito")
        borrar_tabla()

        name_product.value=""
        price_product.value=""
        image_product.value=""
        description_product.value=""

        btn_editar.classList.toggle("d-none")
        btn_guardar.classList.toggle("d-none")
    })
}

let name_product = document.querySelector(".name-product")
let price_product = document.querySelector(".price-product")
let description_product = document.querySelector(".description-product")
let image_product = document.querySelector(".image-product")
let btn_guardar = document.querySelector(".btn-guardar")
let message_camposr = document.querySelector("#mensaje")
let pr_buscar = document.querySelector('.buscar')
let tabla = document.querySelector('.table > tbody')
let btn_mostrar = document.querySelector('.btn-mostrar')
let btn_buscar = document.querySelector('.btn-buscar')

btn_guardar.addEventListener("click", function() {
    /* alert(name_product.value) */

    let datos = obtener_datos()
    console.log(obtener_datos())
    if (datos != null) {
        guardar_datos(datos)
    }
})

pr_buscar.addEventListener("input", function(){
/*     let productos_guardados = JSON.parse(localStorage.getItem(listadoProductos))
    let buscar_producto= this.value.toLowerCase() */

    borrar_tabla()

/*     let coincidencias = productos_guardados.filter(function(producto) {
        return producto.nombre.toLowerCase().includes(buscar_producto.toLowerCase())
    }) */

    buscando_producto(pr_buscar.value.toLowerCase())
})

btn_mostrar.addEventListener("click", function() {
    mostrar_todo()
})

/* btn_buscar.addEventListener("click", function() {
    mostrar_productos()
}) */









