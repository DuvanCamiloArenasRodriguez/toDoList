URL = "http://localhost:3000"

const cabecera = new Headers({
    "Content-Type": "application/json",
})

const obtenerDatos = async () => {
    const data = await fetch(`${URL}/tareas`)
    if (data.status === 200) {
        const datosFormales = await data.json()
        return datosFormales
    } else if (data.status ===401) {
        console.log("Error de URL (está mal)");
    } else if (data.status === 404) {
        console.log('URL no existe');
    } else {
        console.log('Consulte con el admin');
    }
}

const unoSolo = async (idTarea) => {
    const datosTarea = await fetch(`${URL}/tareas/${idTarea}`)
    const datosFormato = await datosTarea.json()
    return datosFormato
}

const cambiarTarea = (id, tarea) => {
    fetch(`${URL}/tareas/${id}`, {
        method: "PUT",
        headers: cabecera,
        body: JSON.stringify(tarea),
    }).catch((error) => {
        console.error("Error:", error)
    })
}

function guardarDatos(datosFormulario) {
    fetch(`${URL}/tareas`, {
        method: "POST",
        headers: cabecera,
        body: JSON.stringify(datosFormulario)
    }).catch(error => console.log(error))
}

export {
    obtenerDatos, guardarDatos, unoSolo, cambiarTarea
}

