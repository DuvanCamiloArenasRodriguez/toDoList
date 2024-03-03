import {obtenerDatos} from "../Api/api.js"
import {guardarDatos} from "../Api/api.js"
import { unoSolo } from "../Api/api.js"
import { cambiarTarea } from "../Api/api.js"

document.addEventListener("DOMContentLoaded", async()=>{
    const realizadas = document.querySelector(".tareasCumplidas")
    const noRealizadas = document.querySelector(".tareasFallidas")

    const datos = await obtenerDatos()
    mostrarTareas(realizadas, "realizada", datos)
    mostrarTareas(noRealizadas, "noRealizada", datos)
    mostrarTareas(tareas, "pendiente", datos)
})

const form = document.querySelector("#formulario")
form.addEventListener("submit", agregarDatos)

function agregarDatos(e) {
    e.preventDefault()
    const datosFormulario = e.target
    const datos = new FormData(datosFormulario)
    const transformar = Object.fromEntries(datos)
    guardarDatos(transformar)
}

const tareas =  document.querySelector(".tareasPendientes")
tareas.addEventListener("click", getClick)
function mostrarTareas(padre, estado, datos) {

    let filtrar = datos.filter((tarea) => tarea.estado === estado)
    
 



    filtrar.forEach((tarea) => {
        padre.innerHTML += `
        <div class="col ">
        <div class="card" style="width: 15rem;">
                            <div class="card-body">
                              <h6 class="card-subtitle mb-2 text-body-secondary">"${tarea.prioridad}</h6>
                              <div class="fechas">
                                <div class="fechaInicio">
                                    <p>Inicia</p>
                                    <p>${tarea.fechaInicio}</p>
                                </div>
                                <div class="fechaFin">
                                    <p>Termina</p>
                                    <p>${tarea.fechaFin}</p>
                                </div>
                                
                              </div>
                              <p class="card-text">${tarea.ingresarTarea}</p>
                              
                              <div class="terminarTareas ${tarea.estado != 'pendiente' ? "ocultar": '' }" >
                                <i class='terminar bx bxs-check-circle realizada' id = ${tarea.id}></i>
                                <i class='noTerminado bx bxs-x-circle noRealizada' id = ${tarea.id}></i>
                              </div>
                              
                            </div>
                        </div>
        </div>
                        `
    });
}

async function getClick(event) {
    if (event.target.classList.contains("realizada")) {
        const idEvento = event.target.id;
        const clickEntarea = await unaTarea(idEvento)
        clickEntarea.estado = 'realizada'
        cambiarTarea(idEvento, clickEntarea)
    }else if (event.target.classList.contains("noRealizada")) {
        const idEvento = event.target.id;
        const clickEntarea = await unaTarea(idEvento)
        clickEntarea.estado = 'noRealizada'
        cambiarTarea(idEvento, clickEntarea)
    }
}

async function unaTarea(id) {
    const tarea = await unoSolo(id)
    return tarea
}


