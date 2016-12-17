
/**
 * Test 
 */

//dar estylo y eliminar elementos del body
var titulo = document.getElementById("titulo");
titulo.style.color = "white";

titulo.style.backgroundColor = "black";
titulo.style["font-family"] = "console";

var body = document.getElementsByTagName("body");

body[0].style.background = "black";


var padre = titulo.parentNode;

padre.removeChild(titulo);


var tabla = document.getElementById("tablita");
tabla.removeChild(tabla.children[0])

tabla.children[0].remove();
var thead = tabla.getElementsByTagName("thead");
thead[0].remove();

//pintar una fila de una tabla con el modulo style 
var a = function(tabla, fila, color){
  var tcuerpo = tabla.children[1];
  var tr = tcuerpo.children[fila - 1];
  var tds = tr.children;
  for(var i = 0; i < tds.length; i++){
    tds[i].style.backgroundColor = color;
  }    
  return tds;
};

//pintar una columna de una tabla con el modulo style
var b = function(tabla, columna, color){
  var tcuerpo = tabla.children[1];
  var trs = tcuerpo.children;
  for(var i = 0; i < trs.length; i++){
    var td = trs[i].children[columna -1];
    td.style.backgroundColor = color;
  }    
  return trs;
};

var tablita = document.getElementById("tablita");

a(tablita, 2, "blue");
b(tablita, 1, "red");

var tablita = document.getElementById("tablita");

var a = function(obj_tabla, num_fila, clase_css){
  var tbody = obj_tabla.children[1];
  var tr = tbody.children[num_fila - 1];
  var tds = tr.children;
  for(var i = 0; i < tds.length; i++){
    tds[i].setAttribute("class", clase_css);    
  }
};

var b = function(obj_tabla, num_fila, clase_css){
  var tcuerpo = obj_tabla.children[1];
  var trs = tcuerpo.children;
  for(var i = 0; i < trs.length; i++){
    var td = trs[i].children[num_fila - 1];
    td.setAttribute("class", clase_css);
  }      
};

var tabla = document.getElementById("tablita");

//pinta una sola celda
var c = function(obj_tabla, num_fila, num_columna, clase_css){
  var tbody = obj_tabla.children[1];
  
  var tr = tbody.children[num_fila - 1];    
  if(tr !== undefined)
    var td = tr.children[num_columna - 1];
  if(td !== undefined){
    if(td.classList.contains !== "fondo-rojo" || td.classList.contains !== "fondo-azul")
      td.setAttribute("class", clase_css);
  }
};

var d = function(obj_tabla, num_fila, num_columna, clase_css){
  var c1 = [num_fila - 1, num_columna - 1];
  c(obj_tabla, c1[0], c1[1], clase_css);
  
  var c2 = [num_fila - 1, num_columna];
  c(obj_tabla, c2[0], c2[1], clase_css);

  var c3 = [num_fila - 1, num_columna + 1];
  c(obj_tabla, c3[0], c3[1], clase_css);

  var c4 = [num_fila, num_columna -1];
  c(obj_tabla, c4[0], c4[1], clase_css);

  var c6 = [num_fila, num_columna +1];
  c(obj_tabla, c6[0], c6[1], clase_css);

  var c7 = [num_fila + 1, num_columna -1];
  c(obj_tabla, c7[0], c7[1], clase_css);

  var c8 = [num_fila + 1, num_columna];
  c(obj_tabla, c8[0], c8[1], clase_css);

  var c9 = [num_fila + 1, num_columna + 1];
  c(obj_tabla, c9[0], c9[1], clase_css);
};

var fila = Number(document.getElementById("fila").value);
var columna = Number(document.getElementById("columna").value);
var color = document.getElementById("color").value;


//tablita.children[1].children[0].children[0].getAttribute("class");
//tablita.children[1].children[0].children[0].className;
//tablita.children[1].children[0].children[0].classList.

var fila = Number(document.getElementById("fila").value);
var columna = Number(document.getElementById("columna").value);
var color = document.getElementById("color").value;

var e = function(obj_tabla, num_fila, num_columna, clase_css){
  var tbody = obj_tabla.children[1];
  if(tbody.children[num_fila - 1].children[num_columna - 1].classList.contains(clase_css)){
    var notificacion = document.getElementById("notificacion");
    notificacion.textContent = "celda ya coloreada";
  }else{
    var notificacion = document.getElementById("notificacion");
    notificacion.textContent = "";
    tbody.children[num_fila - 1].children[num_columna - 1].setAttribute("class", clase_css);
  }
};