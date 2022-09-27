//Arrays agrupaciones
let antigua = ["Ensamble Helios", "Coro Madrigalista USACH", "Conjunto Amicus", "Estudio musicAntigua UC"];
let clasica = ["OUAHC", "OSE", "OMPI", "Quinteto Ventus"];
let contemporanea = ["HRSE", "Caiafa-Román Dúo", "Chak Dúo"];

const totalGrupos = (a, b, c) => {document.write(`<p class="valor">Actualmente tenemos ${a + b + c} agrupaciones en nuestros registros</p>`)};
(totalGrupos(antigua.length, clasica.length, contemporanea.length))

let buscador
function opciones(){
    buscador = parseInt(prompt("¿Qué estilo buscas? \n1) Antigua\n2) Clásica\n3) Contemporánea \n4) Ver todos \nPresiona 0 para salir"));
}

let resultados

function listadoAntigua () {
    resultados =document.getElementById("conciertos");
    resultados.innerHTML=`
        <h3>Encontramos ${antigua.length} agrupaciones de Música Antigua:</h3>
        <ul>
            <li>${antigua[0]}</li>
            <li>${antigua[1]}</li>
            <li>${antigua[2]}</li>
            <li>${antigua[3]}</li>
            </ul>`
        }
    
function listadoClasica() {
    resultados =document.getElementById("conciertos");
    resultados.innerHTML=`
    <h3>Encontramos ${clasica.length} agrupaciones de Música Clásica:</h3>
        <ul>
        <li>${clasica[0]}</li>
        <li>${clasica[1]}</li>
        <li>${clasica[2]}</li>
        <li>${clasica[3]}</li>
        </ul>`
    }

function listadoContemporanea() {
    resultados =document.getElementById("conciertos");
    resultados.innerHTML=`
    <h3>Encontramos ${contemporanea.length} agrupaciones de Música Contemporánea:</h3>
        <ul>
        <li>${contemporanea[0]}</li>
        <li>${contemporanea[1]}</li>
        <li>${contemporanea[2]}</li>
        </ul>`
    }

function listadoTotal() {
        resultados =document.getElementById("conciertos");
        resultados.innerHTML=`

        <h3>Encontramos ${antigua.length} agrupaciones de Música Antigua:</h3>
        <ul>
            <li>${antigua[0]}</li>
            <li>${antigua[1]}</li>
            <li>${antigua[2]}</li>
            <li>${antigua[3]}</li>
            </ul>

        <h3>Encontramos ${clasica.length} agrupaciones de Música Clásica:</h3>
        <ul>
            <li>${clasica[0]}</li>
            <li>${clasica[1]}</li>
            <li>${clasica[2]}</li>
            <li>${clasica[3]}</li>
            </ul>

        <h3>Encontramos ${contemporanea.length} agrupaciones de Música Contemporánea:</h3>
            <ul>
            <li>${contemporanea[0]}</li>
            <li>${contemporanea[1]}</li>
            <li>${contemporanea[2]}</li>
            </ul>`
        }

opciones()

if (buscador ==1) {
    listadoAntigua();
} else if (buscador ==2){
    listadoClasica();
} else if (buscador ==3){
    listadoContemporanea();
} else if (buscador ==4){
    listadoTotal()
} else {
    while (buscador !=0 && buscador !=1 && buscador !=2 && buscador!=3 && buscador!=4){
        alert("Elija una opción válida")
        opciones();
    }
alert("No ha seleccionado nada. Presione F5 para revisar opciones.")
}
