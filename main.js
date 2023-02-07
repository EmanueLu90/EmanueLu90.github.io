//fetch('https://jsonplaceholder.typicode.com/todos/1')
fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(json => console.log(json))

/**document.getElementById('botón').onclick=function(){console.log("Capturamos el evento click");
  document.getElementById("demo").innerHTML="PROBAMOS NUESTRO PRIMER EVENTO EN HTML"
}
*/
