//fetch('https://jsonplaceholder.typicode.com/todos/1')
fetch('https://randomuser.me/api/')
  .then(response => response.json(/**[0].name.first*/))
  .then(json => console.log(json));
/***/
console.log("hola mundo");

fetch('https://jsonplaceholder.typicode.com/posts/1')
	.then((response) => response.json())
	.then((json) => console.log(json));

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