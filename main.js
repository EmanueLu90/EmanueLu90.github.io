console.log('hola mundo');

/* Funciones*/


/* funcion que muestra los datos recogidos de la api json de random user

function mostrar(url){
fetch(url)
      .then(response => response.json())
      .then(data => mostrarData(data))
      .catch(error => console.log(error))

  const mostrarData = (data) => {
    console.log(data);
    let obj = data.results[0];
    let seed= data.info.seed;
    
    /*document.getElementById("semilla").innerHTML ="<a href= https://randomuser.me/api/?seed="+seed+"> semilla url </a>";
    
    document.getElementById("nombre").innerHTML ='<i class="fa fa-user-circle-o fa-lg" aria-hidden="true"></i> Nombre y Apellido: '+obj.name.first+', '+obj.name.last+'.';
    document.getElementById("hombreMujer").innerHTML = '<i class="fa fa-venus-mars fa-lg" aria-hidden="true"></i> Genero: '+obj.gender+'.';
    document.getElementById("edad").innerHTML ='<i class="fa fa-heartbeat fa-lg" aria-hidden="true"></i> Edad: '+obj.dob.age+' años.';
    document.getElementById("fechaNacimiento").innerHTML = '<i class="fa fa-birthday-cake fa-lg" aria-hidden="true"></i> Fecha de Nacimiento: '+obj.dob.date+'.';
    document.getElementById("direccion").innerHTML = '<i class="fa fa-home fa-lg" aria-hidden="true"></i> Direccion: '+obj.location.street.name+', Numero: '+obj.location.street.number+'.';
    document.getElementById("ciudad").innerHTML ='<i class="fa fa-flag fa-lg" aria-hidden="true"></i> Ciudad: '+obj.location.city+', '+obj.location.state+', '+obj.location.country+'.';
    document.getElementById("telefono").innerHTML = '<i class="fa fa-phone fa-lg" aria-hidden="true"></i> Telefono Celular: '+obj.cell+'.';
    document.getElementById("email").innerHTML = '<i class="fa fa-at fa-lg" aria-hidden="true"></i> Email: '+obj.email+'.';
    document.getElementById("fotografia").innerHTML = '<img src='+obj.picture.large+' alt=foto de perfil>';
}}

/*inicializo la funcion mostrar cv random de la api
mostrar('https:randomuser.me/api/?exc=login');*/

/*por medio del boton perfil random recarga el perfil por uno nuevo

document.getElementById('boton_api').addEventListener('click', function() {
  mostrar('https:randomuser.me/api/?exc=login');
  /*document.body.style.backgroundColor= 'blue';
  document.nombre.style.display='none';

});*/

/*Json con datos del desarrollador*/
/*

const datosDesarrollador = {"results":[{"gender":"Masculino","name":{"first":"Emanuel","last":"Fraile"},"location":{"street":{"number":7756,"name":"Fantasia"},"city":"Río Cuarto","state":"Córdoba","country":"Argentina"},"email":"emanuel.f@example.com","dob":{"date":"1990-05-31","age":32},"cell":"(557)-261-7416","picture":{"large":"https://randomuser.me/api/portraits/men/15.jpg"}}]}
JSON.stringify(datosDesarrollador);

function mostrarData2(data2){
    console.log(data2);
    let obj = data2.results[0];
    document.getElementById("nombre").innerHTML = '<i class="fa fa-user-circle-o fa-lg" aria-hidden="true"></i> Nombre y Apellido: ' + obj.name.first + ', ' + obj.name.last + '.';
    document.getElementById("hombreMujer").innerHTML = '<i class="fa fa-venus-mars fa-lg" aria-hidden="true"></i> Genero: ' + obj.gender + '.';
    document.getElementById("edad").innerHTML = '<i class="fa fa-heartbeat fa-lg" aria-hidden="true"></i> Edad: ' + obj.dob.age + ' años.';
    document.getElementById("fechaNacimiento").innerHTML = '<i class="fa fa-birthday-cake fa-lg" aria-hidden="true"></i> Fecha de Nacimiento: ' + obj.dob.date + '.';
    document.getElementById("direccion").innerHTML = '<i class="fa fa-home fa-lg" aria-hidden="true"></i> Direccion: ' + obj.location.street.name + ', Numero: ' + obj.location.street.number + '.';
    document.getElementById("ciudad").innerHTML = '<i class="fa fa-flag fa-lg" aria-hidden="true"></i> Ciudad: ' + obj.location.city + ', ' + obj.location.state + ', ' + obj.location.country + '.';
    document.getElementById("telefono").innerHTML = '<i class="fa fa-phone fa-lg" aria-hidden="true"></i> Telefono Celular: ' + obj.cell + '.';
    document.getElementById("email").innerHTML = '<i class="fa fa-at fa-lg" aria-hidden="true"></i> Email: ' + obj.email + '.';
    document.getElementById("fotografia").innerHTML = '<img src=' + obj.picture.large + ' alt=foto de perfil>';
}

/* inicializo la funcion mostrar cv del desarrollador desde el comienzo
 mostrarData2(datosDesarrollador);

/*Funcion del boton que oculta el contenido del curriculum random de la api por la del desarrollador del proyecto
document.getElementById('boton_admin').addEventListener('click', function() {
  mostrarData2(datosDesarrollador);
  /*document.body.style.backgroundColor = 'red';
  document.nombre.style.display='none';

});

*/













/* CODIGO REFERENCIA DE CLASES DE UNIDAD JAVASCRIPT REUTILIZADO POR PARTES




document.getElementById('boton').onclick = function () {
	console.log("capturamos el evento click");
	document.getElementById('demo').innerHTML = "estamos probando nuestro evento js";
}
document.addEventListener('click', function() {
		console.log("hola mundo 2");
		document.getElementById("demo").innerHTML = "cambia msj";
//generico afecta a todo el documento cuando hace click
});
document.getElementById('boton').addEventListener('click', function() {
		console.log("hola mundo 2");
		document.getElementById("demo").innerHTML = "cambia msj";
});
document.getElementById('boton_color').addEventListener('click', function () {
	document.body.style.backgroundColor = '#FF0000';
});
/***/