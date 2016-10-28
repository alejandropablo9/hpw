var HTML = (function(){
    var tabla = function (_ths, _tds) {
        var nueva_tabla = document.createElement("table");
        var nuevo_thead = document.createElement("thead");
        nueva_tabla.appendChild(nuevo_thead);
        var nuevo_tr = document.createElement("tr");
        nuevo_thead.appendChild(nuevo_tr);
        //creacion de la cabecera de la tabla
        for(var i = 0; i < _ths.length; i++){
            var nuevo_th = document.createElement("th");
            nuevo_th.textContent = _ths[i];
            nuevo_tr.appendChild(nuevo_th);            
        }
        //creacion del cuerpo de la tabla
        var nuevo_body = document.createElement("tbody");
        nueva_tabla.appendChild(nuevo_body);
        for(var i = 0; i < _tds.length; i++){
            var nuevo_tr = document.createElement("tr");
            for (var j = 0; j < _tds[i].length; j++) {
                var nuevo_td = document.createElement("td");
		        nuevo_td.textContent=_tds[i][j];
		        nuevo_tr.appendChild(nuevo_td);               
            }
            nuevo_body.appendChild(nuevo_tr);
        }
        return nueva_tabla;
    }
    return {
        "tabla": tabla
    };

})();
