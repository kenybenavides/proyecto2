const fs = require('fs');
let curso = [{ 
	id: 1,
	nombre: "node.js", 
	duracion: "40 horas",          
	valor: "30000"  
	},
	{ 
	id: 2,
	nombre: "ingles", 
	duracion: "30 horas",          
	valor: "10000"  
	}, 
	 { 
	id: 3,
	nombre: "bolsa de valores", 
	duracion: "20 horas",          
	valor: "20000"  
	}]; 



let cursouno = curso.find(id_curso =>  id_curso.id == 1)
 setTimeout(function(){
 	
 console.log('el codigo curso ' +cursouno.id+ '\n' + 'nombre ' + cursouno.nombre +'\n'+'duracion de ' + cursouno.duracion +'\n'+
'por un valor de ' + cursouno.valor + '\n');
 },2000);

 	let cursodos = curso.find(id_curso =>  id_curso.id == 2)
 setTimeout(function(){

 	console.log('el codigo curso ' +cursodos.id+ '\n' + 'nombre ' + cursodos.nombre +'\n'+'duracion de ' + cursodos.duracion +'\n'+
'por un valor de ' + cursodos.valor + '\n');
 },4000);
let cursotres = curso.find(id_curso =>  id_curso.id == 3)
 setTimeout(function(){
 	
 	console.log('el codigo curso ' +cursotres.id+ '\n' + 'nombre ' + cursotres.nombre +'\n'+'duracion de ' + cursotres.duracion +'\n'+
'por un valor de ' + cursotres.valor + '\n');
 },6000);





const opcion={
	id:{
		demand:true,
		alias:'i'
	},
	nombre:{
		demand:true,
		alias:'n'
	},
	cedula:{
		demand:true,
		alias:'x'
	}
}

const argv = require('yargs')
			.command('inscribir','inscribirme en un curso',opcion)
			.argv
			
idinscripcion= argv.id;
nombre=argv.nombre;
cedula= argv.cedula;


setTimeout(function(){
if (idinscripcion==1||idinscripcion==2||idinscripcion==3 ) {
	
	console.log('Se Ha Registrado Correctamente');
	console.log("Numero de curso "+idinscripcion);
	console.log("nombre "+nombre);
	console.log("cedula "+cedula);
	
} else {
	console.log("curso no existe compruebe el numero de curso(1,2,3)");	

}

//idinscripcion=0;

},10000);

setTimeout(function(){
let  crearArchivo = (idcurso,nombre,cedula)=>{
    if (idcurso==1) 
    {
      texto=(" el/la estudiante se llama "+nombre+'\n'+"cedula "+cedula+'\n'+"se matriculo al codigo del curso "+idcurso+'\n'+"al curso llamado "+cursouno.nombre+'\n'+"con valor de "+cursouno.valor+'\n'+"con una duracion "+cursouno.duracion)
      fs.writeFile('inscripcion.txt',texto, (err)=>{
      		if(err)throw(err);
      		console.log('se ha creado el archivo')
      });
    }else if (idcurso==2){
    	texto=("el/la estudiante se llama "+nombre+'\n'+"cedula "+cedula+'\n'+"se matriculo al codigo del curso "+idcurso+'\n'+"al curso llamado "+cursodos.nombre+'\n'+"con valor de "+cursodos.valor+'\n'+"con una duracion "+cursodos.duracion)
      	fs.writeFile('inscripcion.txt',texto, (err)=>{
      		if(err)throw(err);
      		console.log('se ha creado el archivo')
      });
    }else if(idcurso==3){
    	texto=(" el/la estudiante se llama "+nombre+'\n'+"cedula "+cedula+'\n'+"se matriculo al codigo del curso  "+idcurso+'\n'+"al curso llamado "+cursotres.nombre+'\n'+"con valor de "+cursotres.valor+'\n'+"con una duracion "+cursotres.duracion)
      	fs.writeFile('inscripcion.txt',texto, (err)=>{
      		if(err)throw(err);
      		console.log('se ha creado el archivo')
      });
    }else{
    		console.log("no se ha inscrito a ningun curso")
    		console.log("inscribase a un curso");	
    }
}


crearArchivo(idinscripcion,nombre,cedula);
},11000);

