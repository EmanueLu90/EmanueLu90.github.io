console.log('hola mundo');

fetch('https:randomuser.me/api/?exc=login')
      .then(response => response.json())
      .then(data => mostrarData(data))
      .catch(error => console.log(error))

const mostrarData = (data) => {
    console.log(data);
    let obj = data.results[0];
    document.getElementById("nombre").innerHTML ='<i class="fa fa-user-circle-o" aria-hidden="true"></i> Nombre y Apellido: '+obj.name.first+', '+obj.name.last+'.';
    document.getElementById("hombreMujer").innerHTML = '<i class="fa fa-venus-mars" aria-hidden="true"></i> Genero: '+obj.gender+'.';
    document.getElementById("edad").innerHTML ='<i class="fa fa-heartbeat" aria-hidden="true"></i> Edad: '+obj.dob.age+' años.';
    document.getElementById("fechaNacimiento").innerHTML = '<i class="fa fa-birthday-cake" aria-hidden="true"></i> Fecha de Nacimiento: '+obj.dob.date+'.';
    document.getElementById("direccion").innerHTML = '<i class="fa fa-home" aria-hidden="true"></i> Direccion: '+obj.location.street.name+', Numero: '+obj.location.street.number+'.';
    document.getElementById("ciudad").innerHTML ='<i class="fa fa-flag" aria-hidden="true"></i> Ciudad: '+obj.location.city+', '+obj.location.state+', '+obj.location.country+'.';
    document.getElementById("telefono").innerHTML = '<i class="fa fa-phone" aria-hidden="true"></i> Telefono Celular: '+obj.cell+'.';
    document.getElementById("email").innerHTML = '<i class="fa fa-at" aria-hidden="true"></i> Email: '+obj.email+'.';
    document.getElementById("fotografia").innerHTML = '<img src='+obj.picture.large+' alt=foto de perfil>';
}












/*
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