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

export {
    obtenerDatos
}