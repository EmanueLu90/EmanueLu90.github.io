//fetch('https://jsonplaceholder.typicode.com/todos/1')
fetch('https://randomuser.me/api/')
  .then(response => response.json(/**[0].name.first*/))
  .then(json => console.log(json));
  
/**document.getElementById('botón').onclick=function(){console.log("Capturamos el evento click");
  document.getElementById("demo").innerHTML="PROBAMOS NUESTRO PRIMER EVENTO EN HTML"
}
*/
