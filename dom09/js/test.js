
/**
 * pintar la tabla dos al pasar por la primera
 */

var a = function(obj_evento){  
  var tablitaDos = document.getElementById("tablita_dos");  
  var elemento = obj_evento.originalTarget;
  var columna = elemento.cellIndex;
  var tr = elemento.parentNode;
  var fila = tr.rowIndex;
  
  var tbodyDos = tablitaDos.children[1];
  var tr2 = tbodyDos.children[fila-1];
  if(tr2 !== undefined)
    var td2 = tr2.children[columna];
  if(td2 !== undefined){
  
    console.log(elemento);
    if(td2.tagName === "TD"){     
      if(td2.style.backgroundColor === ""){
        td2.style.backgroundColor="red";
        console.log("visitado por primera vez")
      }
      else{
        td2.style.backgroundColor="green";    
        console.log("visitado una vez más")
      }
    }
  }
  console.log(new Date());
};

var tablitaUno = document.getElementById("tablita_uno");
var tds = tablitaUno.getElementsByTagName("td");
for(var i = 0; i < tds.length; i++){
  tds[i].addEventListener("mouseenter", a, false);
}

/**
 * Eventos en window 
 * utilizando el teclado 
 **/

var a = function(obj_evento){
  console.log(new Date());
  var elemento = obj_evento.originalTarger;
  var tecla = obj_evento.key;
  if(tecla == "ArrowUp"){
    console.log("Arriba");
  }
  console.log(new Date());
}

var pestaña = window;
pestaña.addEventListener('keypress', a, false);