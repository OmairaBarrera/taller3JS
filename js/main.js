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
let formularioNiveles = document.querySelector("#formularioNiveles");
let formularioCampers = document.querySelector("#formularioCampers");
let formularioTrainers = document.querySelector("#formularioTrainers")
let formularioRoadmap = document.querySelector("#formularioRoadmap")
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
    let opciones2 = document.querySelector("[name='sede2']");
    opciones2.innerHTML=null;
    let opciones3 = document.querySelector("[name='sede3']");
    opciones3.innerHTML=null;
    let opciones4 = document.querySelector("[name='sede4']");
    opciones4.innerHTML=null;
    let opciones5 = document.querySelector("[name='sede5']");
    opciones5.innerHTML=null;
    for (let [val, id] of Object.entries(campus)){
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `)  
        opciones1.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `) 
        opciones2.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `) 
        opciones3.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `)
        opciones4.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `)
        opciones5.insertAdjacentHTML("beforeend", `
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
formularioNiveles.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let sede = data.sede2;
    delete data.sede2;
    campus[`${sede}`]["Niveles"].unshift(data);
    console.log(campus);
    formularioNiveles.reset();
});
//LISTA DE NIVELES
//FORMULARIO CAMPERS
formularioCampers.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let sede = data.sede3;
    delete data.sede3;
    campus[`${sede}`]["Campers"].unshift(data);
    console.log(campus);
    formularioCampers.reset();
});
//FORMULARIO TRAINERS
formularioTrainers.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let sede = data.sede4;
    delete data.sede4;
    campus[`${sede}`]["Trainers"].unshift(data);
    console.log(campus);
    formularioTrainers.reset();
});
//FORMULARIO DE ROADMAP
formularioRoadmap.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let sede = data.sede5;
    delete data.sede5;
    campus[`${sede}`]["Roadmap"].unshift(data);
    console.log(campus);
    formularioRoadmap.reset();
});
