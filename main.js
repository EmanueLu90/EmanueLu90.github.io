console.log('hola mundo');

fetch('https:randomuser.me/api/?exc=login')
      .then(response => response.json())
      .then(data => mostrarData(data))
      .catch(error => console.log(error))

const mostrarData = (data) => {
    console.log(data);
    let obj = data.results[0];
    document.getElementById("nombre").innerHTML ='Nombre y Apellido: '+obj.name.first+', '+obj.name.last+'.';
    document.getElementById("hombreMujer").innerHTML = 'Genero: '+obj.gender+'.';
    document.getElementById("edad").innerHTML ='Edad: '+obj.dob.age+' años.';
    document.getElementById("fechaNacimiento").innerHTML = 'Fecha de Nacimiento: '+obj.dob.date+'.';
    document.getElementById("direccion").innerHTML = 'Direccion: '+obj.location.street.name+', Numero: '+obj.location.street.number+'.';
    document.getElementById("ciudad").innerHTML ='Ciudad: '+obj.location.city+', '+obj.location.state+', '+obj.location.country+'.';
    document.getElementById("telefono").innerHTML = 'Telefono Celular: '+obj.cell+'.';
    document.getElementById("email").innerHTML = 'Email: '+obj.email+'.';
    document.getElementById("fotografia").innerHTML = obj.picture.large;
}













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