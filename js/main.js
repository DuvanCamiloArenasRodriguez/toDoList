const tareasPorHacer = [
    {
        id: '',
        nombreTarea: '',
        fechaInicio: '',
        fechaFin: '',
        responsable: '',
        nivel: '',
        estado: ''
    }
]

function crearTarea(id, nombreTarea, fechaInicio, fechaFin, responsable, nivel, estado) {
    this.id = () => {
        // Función para generar id
    }
    this.nombreTarea = nombreTarea;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.responsable = responsable;
    this.nivel = nivel;
    this.estado = estado;
}

// Definicion de variables

const nombreTarea = document.querySelector("#ingresarTarea").value
console.log(nombreTarea);

