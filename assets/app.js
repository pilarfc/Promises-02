 function getJSON(url){
        return new Promise(function(resolve,reject){
          var ajax = new XMLHttpRequest(); 
          ajax.open("GET", url); 
          ajax.send();  
          ajax.onreadystatechange = function(){ 
            if(ajax.readyState == 4){  
              resolve(JSON.parse(ajax.responseText));  
            }
          }
        })
};


var plantilla = ' <div class="col s12 m7">' +
    '<div class="card horizontal">' +
      '<div class="card-image">' +
        '<img src="assets/img/exoplanets.jpg">' +
      '</div>' +
      '<div class="card-stacked"> ' +
        '<div class="card-content">' +
          '<p>Nombre: __nombre__</p>' +
          '<p>Fecha de descubrimiento: __descubrimiento__</p>' +
          '<p>Años Luz: __distancia__</p>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>'; 

 var contenedorPlaneta = document.getElementById("contenedor");
 var plantillaFinal = "";
    
var crearPlaneta = function (contenido) {
    
    var nombre = contenido.pl_name; 
    var descubrimiento = contenido.pl_disc; 
    var distancia = contenido.st_dist;
    
		plantillaFinal += plantilla.replace("__nombre__", nombre)
            .replace("__descubrimiento__", descubrimiento)
			.replace("__distancia__", distancia)
	}
	


getJSON("data/earth-like-results.json")
    .then(function(planeta) {
  // Take an array of promises and wait on them all
  return Promise.all(
    // Map our array of chapter urls to
    // an array of chapter json promises
    planeta.results.map(getJSON)
  );
}).then(function(planetas) {
  // Now we have the chapters jsons in order! Loop through…
  planetas.forEach(crearPlaneta);     
    contenedorPlaneta.innerHTML = plantillaFinal;
})





        
        