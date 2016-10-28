var panel = document.getElementById("panel");
var tabla = Tabla_Autor.tabla_autores(Biblioteca.autores);
tabla.setAttribute("class","pure-table")
panel.appendChild(tabla);

var panel = document.getElementById("panel");
var tabla = Tabla_Autor.tabla_autores(Autor.con_nombre(Biblioteca.autores, "Alejandro"));
tabla.setAttribute("class","pure-table")
panel.appendChild(tabla);
