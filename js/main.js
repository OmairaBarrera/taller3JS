/* TALLER 3 JAVASCRIPT CON DOM

EJERCICIO 1: UN SOLO FORMULARIO OBJETO DENTRO DE OTROS OBJETOS, ESTRUCTURA DE DATOS

Construir un objeto literal(ciclo) "campus" que gestione
la info(PROPIEDADES) de Campus, trainers, campers, niveles,
tecnologías, teams y roadMap(temario)
1.1. De campus administrar los datos de contacto de las sedes en
Bucaramanga, Bogotá, Medellín y México
1.2. De los trainers y campers, su nombre, sus teléfonos, teams
(horarios de las teams=> día, hora y salones (nro y piso), y el
email, y de los campers también horarios de inglés y ser.(formulario DOM)
1.3. De los campers, también gestionar su nivel actual, como su
barrio y medio de transporte
1.4. De los niveles, su pre requisito, a que tecnología pertenece, si
es electiva u obligatoria
1.5. De la roadmap , Nro de créditos, año, Nro de asignaturas

eventos de errores
*/
let formularioSedes = document.querySelector("#formularioSedes");
let campus = {};
//FORMULARIO SEDES
formularioSedes.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    campus[`${data.nombreSede}`] = {Teams:[], Tecnologias:[], Niveles:[], Campers:[], Trainers:[], Roadmap:[]};
    console.log(campus);
    listaSedes();
    formularioSedes.reset();
});
//LISTA DE SEDES
//FORMULARIO DE TEAMS
//LISTA DE TEAMS
//FORMULARIO DE TECNOLOGIAS
//LISTA DE TECNOLOGIAS
//FORMULARIO DE NIVELES
//LISTA DE NIVELES
//FORMULARIO CAMPERS
//FORMULARIO TRAINERS
//FORMULARIO DE ROADMAP

