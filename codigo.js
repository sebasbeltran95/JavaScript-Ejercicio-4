let cantidad = prompt("¿Cuantos alumos son: ?");
let alumnosTotales = [];

for(i = 0; i < cantidad ; i++){
    alumnosTotales[i] = [prompt("Nombre del alumno: " + (i + 1)),0];
}

const tomarAsistencia = (nombre,p) =>{
    let presencia = prompt(nombre);
    if(presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}
for(i = 0; i < 30 ; i++){
    for(alunmo in alumnosTotales){
        tomarAsistencia(alumnosTotales[alunmo][0], alunmo);
    }
}
for(alunmo in alumnosTotales){
    let resultado = `${alumnosTotales[alunmo][0]}: <br>
    ______Presentes: ${alumnosTotales[alunmo][1]}: <br>
    ______Ausencias: ${30- alumnosTotales[alunmo][1]}`;
    if(30 - alumnosTotales[alunmo][1] > 18){
        resultado+= " <b style = `color: red`> REPROBADO POR INASISTENCIAS</b> <br><br>";
    } else {
    resultado+= "<br><br>"
    }
    document.write(resultado);
}