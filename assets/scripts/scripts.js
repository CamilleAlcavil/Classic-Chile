let d = document;

//Objetos agrupaciones
class Grupo {
  constructor(nombre, genero, mes, dia, hora, lugar) {
    this.nombre = nombre;
    this.genero = genero;
    this.mes    = mes;
    this.dia    = dia;
    this.hora   = hora;
    this.lugar  = lugar
  }
}

const todoGrupos = [];
todoGrupos.push(new Grupo("Ensamble Helios",                            "Música Antigua",       "Noviembre",    "10, 12 y 15",      "19:00 Hrs.",   "Teatro Municipal de Maipú"));
todoGrupos.push(new Grupo("Coro Madrigalista USACH",                    "Música Antigua",       "Noviembre",    "27",               "16:00 Hrs.",   "Corporación Cultural de Ñuñoa"));
todoGrupos.push(new Grupo("Conjunto Amicus",                            "Música Antigua",       "Noviembre",    "05 y 07",          "19:00 Hrs.",   "GAM"));
todoGrupos.push(new Grupo("Orquesta Sinfónica UAHC",                    "Música Clásica",       "Octubre",      "21 y 28",          "18:00 Hrs.",   "Teatro La Cúpula"));
todoGrupos.push(new Grupo("Orquesta Sinfónica Universidad de Chile",    "Música Clásica",       "Octubre",      "19",               "19:00 Hrs.",   "Sala Isidora Zegers"));
todoGrupos.push(new Grupo("Orquesta Música para la Integración",        "Música Clásica",       "Noviembre",    "02 y 07",          "18:30 Hrs.",   "Iglesia de los Sacramentinos"));
todoGrupos.push(new Grupo("Quinteto Ventus",                            "Música Clásica",       "Octubre",      "21 y 28",          "18:00 Hrs.",   "Teatro Municipal de Las Condes"));
todoGrupos.push(new Grupo("Caiafa-Román Dúo",                           "Música Contemporánea", "Noviembre",    "15, 16 y 17",      "10:00 Hrs.",   "Teatro CorpArtes"));

//Declarar variable HTML
const grupos = d.querySelector(".meses")

//Se crean opciones
const optionOctubre     = d.createElement("option");
const optionNoviembre   = d.createElement("option");
const optionDiciembre   = d.createElement("option");

//Dar valor a las variables
optionOctubre.innerText     = "Octubre";
optionNoviembre.innerText   = "Noviembre";
optionDiciembre.innerText   = "Diciembre";

//Se appendean las variables creadas
grupos.append(optionOctubre);
grupos.append(optionNoviembre);
grupos.append(optionDiciembre);

let fechas = d.querySelector(".meses");

fechas.onchange = mostrarSeleccion;

function mostrarSeleccion (){
    let mostrar         = d.querySelector(".meses");
    let selected        = mostrar.options[mostrar.selectedIndex].text;
    const mesIngresado  = todoGrupos.filter(artista => artista.mes.includes(selected));

    let grupoMostrar = d.querySelector(".resultadosBusqueda");
    grupoMostrar.innerHTML = "";
    mesIngresado.forEach((element) => {
    grupoMostrar.innerHTML += 
        `<div class="datosConcierto">
        <h4>${element.nombre}</h4>
        <p>${element.dia} de ${element.mes}, ${element.hora}</p>
        <p>${element.lugar}</p>
        </div>`
})
}


//Local Storage
const ultimoConcierto = {
    "nombre"    : "Orquesta Beauchef",
    "genero"    : "Música Clásica",
    "fecha"     : "15 de noviembre, 18:30 Hrs.",
    "lugar"     : "Auditorio FCFM",
    "entrada"   : "Entrada Liberada"
}

localStorage.setItem("ultimoConcierto", JSON.stringify(ultimoConcierto))

const conciertoRescatado = JSON.parse(localStorage.getItem("ultimoConcierto"))


