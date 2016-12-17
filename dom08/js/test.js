var a = function(obj_evento){
    var td = obj_evento.originalTarget;
    console.log(obj_evento.originalTarget);
    if(td.tagName==="TD"){
        var valor = td.textContent;
        td.textContent = Number(valor) + 1;        
    }
    console.log(new Date());
}

var tablita = document.getElementById("tablita");
tablita.addEventListener("click", a, false);

///////////////////////////
var d = function(obj_tabla, num_fila, num_columna){ 
  var c1 = [num_fila - 1, num_columna];
  c(obj_tabla, c1[0], c1[1]);

  var c2 = [num_fila - 1, num_columna + 1];
  c(obj_tabla, c2[0], c2[1]);
  
  var c3 = [num_fila - 1, num_columna + 2];
  c(obj_tabla, c3[0], c3[1]);
  
  var c4 = [num_fila, num_columna + 2];
  c(obj_tabla, c4[0], c4[1]);
  
  var c5 = [num_fila + 1, num_columna + 2];
  c(obj_tabla, c5[0], c5[1]);

  var c6 = [num_fila + 1, num_columna + 1];
  c(obj_tabla, c6[0], c6[1]);
  
  var c7 = [num_fila + 1, num_columna];
  c(obj_tabla, c7[0], c7[1]);

  var c8 = [num_fila, num_columna];
  c(obj_tabla, c8[0], c8[1]);
};

var c = function(obj_tabla, num_fila, num_columna){
  var tbody = obj_tabla.children[1];
  var tr = tbody.children[num_fila - 1]; 
  if(tr !== undefined)
    var td = tr.children[num_columna - 1];
  if(td !== undefined){
    if(td.tagName==="TD"){
        var valor = td.textContent;
        td.textContent = Number(valor) + 1;
    }
  }
};

var a = function(obj_evento){
  var td = obj_evento.originalTarget;            
  var tr = td.parentElement;
  var obj_tabla = tr.parentElement.parentElement;
  var fila = tr.rowIndex;
  var columna = td.cellIndex;  
  console.log(obj_tabla);
  console.log(obj_evento.originalTarget);
  d(obj_tabla, fila, columna);
  console.log(new Date());
}

var tablita = document.getElementById("tablita");
tablita.addEventListener("click", a, false);


///////////////////////

var d = function(obj_tabla, num_fila, num_columna){ 
  var c1 = [num_fila - 1, num_columna];
  c(obj_tabla, c1[0], c1[1], 8);

  var c2 = [num_fila - 1, num_columna + 1];
  c(obj_tabla, c2[0], c2[1], 1);
  
  var c3 = [num_fila - 1, num_columna + 2];
  c(obj_tabla, c3[0], c3[1], 2);
  
  var c4 = [num_fila, num_columna + 2];
  c(obj_tabla, c4[0], c4[1], 3);
  
  var c5 = [num_fila + 1, num_columna + 2];
  c(obj_tabla, c5[0], c5[1], 4);

  var c6 = [num_fila + 1, num_columna + 1];
  c(obj_tabla, c6[0], c6[1], 5);
  
  var c7 = [num_fila + 1, num_columna];
  c(obj_tabla, c7[0], c7[1], 6);

  var c8 = [num_fila, num_columna];
  c(obj_tabla, c8[0], c8[1], 7);
};

var c = function(obj_tabla, num_fila, num_columna, incremento){
  var tbody = obj_tabla.children[1];
  var tr = tbody.children[num_fila - 1]; 
  if(tr !== undefined)
    var td = tr.children[num_columna - 1];
  if(td !== undefined){
    if(td.tagName==="TD"){
        var valor = td.textContent;
        td.textContent = Number(valor) + incremento;
    }
  }
};

var a = function(obj_evento){
  var td = obj_evento.originalTarget;            
  var tr = td.parentElement;
  var obj_tabla = tr.parentElement.parentElement;
  var fila = tr.rowIndex;
  var columna = td.cellIndex;  
  console.log(obj_tabla);
  console.log(obj_evento.originalTarget);
  d(obj_tabla, fila, columna);
  console.log(new Date());
}

var tablita = document.getElementById("tablita");
tablita.addEventListener("click", a, false);

/////////////////////////////////////////////////////////////////////



/////

var intercambio = function(obj_tabla, num_fila, num_columna, _valor){
  var tbody = obj_tabla.children[1];
  var tr = tbody.children[num_fila - 1]; 
  if(tr !== undefined)
    var td = tr.children[num_columna - 1];
  if(td !== undefined){
    if(td.tagName==="TD"){
        var valor = td.textContent;   
        td.textContent = _valor;             
    }
  }
  return valor;
};

var e = function(obj_evento){
  var td = obj_evento.originalTarget;            
  var tr = td.parentElement;
  var obj_tabla = tr.parentElement.parentElement;
  var fila = tr.rowIndex;
  var columna = td.cellIndex;  
  var valor = intercambio(obj_tabla, fila, columna);
  td.textContent = Number(valor); 
  console.log(valor);
  console.log(obj_evento.originalTarget);
  console.log(new Date());
}

var tablita = document.getElementById("tablita");
tablita.addEventListener("click", e, false);

////////// eliminar renglones
var a = function(obj_evento){  
  var elemento = obj_evento.originalTarget;
  console.log(elemento);
  if(elemento.tagName === "TD"){
    var tr = elemento.parentNode;
    var tbody = elemento.parentNode.parentNode;    
    tbody.removeChild(tr);      
    var trs = tbody.children
    for(var i = 0; i < trs.length; i++){
      trs[i].children[0].textContent = i + 1;
    }    
  }
  console.log(new Date());
};

var tablita = document.getElementById("tablita");
tablita.addEventListener("click", a, false);

//////////////////////////
///pintar celdas 
var a = function(obj_evento){  
  var elemento = obj_evento.originalTarget;
  console.log(elemento);
  if(elemento.tagName === "TD"){     
    if(elemento.style.backgroundColor === ""){
      elemento.style.backgroundColor="red";
      console.log("visitado por primera vez")
    }
    else{
      elemento.style.backgroundColor="green";    
      console.log("visitado una vez más")
    }
  }
  console.log(new Date());
};

var tablita = document.getElementById("tablita");
var tds = tablita.getElementsByTagName("td");
for(var i = 0; i < tds.length; i++){
  tds[i].addEventListener("mouseenter", a, false);
}
