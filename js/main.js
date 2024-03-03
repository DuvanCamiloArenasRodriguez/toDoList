import {obtenerDatos} from "../Api/api.js"

document.addEventListener("DOMContentLoaded", async()=>{
    const datos = await obtenerDatos()
    console.log(datos);
})

const form = document.querySelector("#formulario")
form.addEventListener("submit", agregarDatos)

function agregarDatos(e) {
    e.preventDefault()
    const datosFormulario = e.target
    const datos = new FormData(datosFormulario)
    const transformar = Object.fromEntries(datos)
    console.log(transformar);
}
