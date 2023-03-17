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
let formularioTeams = document.querySelector("#formularioTeams");
let formularioTecnologias = document.querySelector("#formularioTecnologias");
let campus = {};
//FORMULARIO SEDES
formularioSedes.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    campus[`${data.nombreSede}`] = {Teams:[], Tecnologias:[], Niveles:[], Campers:[], Trainers:[], Roadmap:[]};
    listaSedes();
    formularioSedes.reset();
});
//LISTA DE SEDES
let listaSedes = ()=>{
    let opciones = document.querySelector("[name='sede']");
    opciones.innerHTML=null;
    let opciones1 = document.querySelector("[name='sede1']");
    opciones1.innerHTML=null;
    for (let [val, id] of Object.entries(campus)){
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `)  
        opciones1.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `) 
    }
};
//FORMULARIO DE TEAMS
formularioTeams.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let sede = data.sede;
    delete data.sede;
    campus[`${sede}`]["Teams"].unshift(data);
    console.log(campus);
    formularioTeams.reset();
})
//LISTA DE TEAMS
//FORMULARIO DE TECNOLOGIAS
formularioTecnologias.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let sede = data.sede1;
    delete data.sede1;
    campus[`${sede}`]["Tecnologias"].unshift(data);
    console.log(campus);
    formularioTecnologias.reset();
});
//LISTA DE TECNOLOGIAS
//FORMULARIO DE NIVELES
//LISTA DE NIVELES
//FORMULARIO CAMPERS
//FORMULARIO TRAINERS
//FORMULARIO DE ROADMAP

