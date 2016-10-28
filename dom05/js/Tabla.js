var Tabla = (function () {
    var fila = function (obj_tabla, fila) {
        var cuerpo = obj_tabla.children[1];
        if (cuerpo.nodeName !== "TBODY") {
            return [];
        }
        if (cuerpo.rows[fila - 1] === undefined) {
            return [];
        }
        return cuerpo.rows[fila - 1].children;
    };


    var columna = function (obj_tabla, columna) {
        var arr_salida = [];
        var cuerpo = obj_tabla.children[1];
        if (cuerpo.nodeName !== "TBODY") {
            return arr_salida;
        }
        for (var i = 0; i < obj_tabla.children[1].rows.length; i++) {
            if (obj_tabla.children[1].rows[i].children[columna - 1] !== undefined)
                arr_salida.push(obj_tabla.children[1].rows[i].children[columna - 1]);
        }
        return arr_salida;
    };

    var diagonal_derecha_abajo = function (obj_tabla, fila, columna) {
        var arr_salida = [];
        if(obj_tabla.nodeName !== "TABLE"){
            return arr_salida;
        }
        var cuerpo = obj_tabla.children[1];        
        if (cuerpo.nodeName !== "TBODY") {
            return arr_salida;
        }
        for (var i = fila - 1; i < obj_tabla.children[1].rows.length; i++) {
            if (obj_tabla.children[1].rows[i].children[columna - 1] !== undefined)
                arr_salida.push(obj_tabla.children[1].rows[i].children[columna - 1]);
            columna++;
        }
        return arr_salida;
    };

    var diagonal_derecha_arriba = function (obj_tabla, fila, columna) {
        var arr_salida = [];
        if(obj_tabla.nodeName !== "TABLE"){
            return arr_salida;
        }
        var cuerpo = obj_tabla.children[1];        
        if (cuerpo.nodeName !== "TBODY") {
            return arr_salida;
        }
        for (var i = fila - 1; i >= 0; i--) {
            if (obj_tabla.children[1].rows[i].children[columna - 1] !== undefined)
                arr_salida.push(obj_tabla.children[1].rows[i].children[columna - 1]);
            columna--;
        }
        return arr_salida;
    };

    var diagonal_izquierda_abajo = function (obj_tabla, fila, columna) {
        var arr_salida = [];        
        if(obj_tabla.nodeName !== "TABLE"){
            return arr_salida;
        }
        var cuerpo = obj_tabla.children[1];
        if (cuerpo.nodeName !== "TBODY") {
            return arr_salida;
        }
        columna = columna - 1;
        for (var i = fila - 1;  i < obj_tabla.children[1].rows.length; i++) {
            if (obj_tabla.children[1].rows[i].children[columna] !== undefined)
                arr_salida.push(obj_tabla.children[1].rows[i].children[columna]);
            columna--;
        }
        return arr_salida;
    };

    var diagonal_izquierda_arriba = function (obj_tabla, fila, columna) {
        var arr_salida = [];        
        if(obj_tabla.nodeName !== "TABLE"){
            return arr_salida;
        }
        var cuerpo = obj_tabla.children[1];
        if (cuerpo.nodeName !== "TBODY") {
            return arr_salida;
        }
        columna = columna - 1;
        for (var i = fila - 1; i >= 0; i--) {
            if (obj_tabla.children[1].rows[i].children[columna] !== undefined)
                arr_salida.push(obj_tabla.children[1].rows[i].children[columna]);
            columna++;
        }
        return arr_salida;
    };
    
    var diagonales = function (obj_tabla, fila, columna) {    
        var arr_salida = [];
        arr_salida = arr_salida.concat(diagonal_izquierda_abajo(obj_tabla, fila + 1, columna-1));
        arr_salida = arr_salida.concat(diagonal_izquierda_arriba(obj_tabla, fila - 1, columna+1));
        arr_salida = arr_salida.concat(diagonal_derecha_abajo(obj_tabla, fila + 1, columna + 1));
        arr_salida = arr_salida.concat(diagonal_derecha_arriba(obj_tabla, fila - 1, columna - 1));
        return arr_salida;
    };

    return {
        "fila": fila,
        "columna": columna,
        "diagonal_derecha": diagonal_derecha_abajo,
        "diagonal_izquierda": diagonal_izquierda_abajo,
        "diagonales": diagonales
    };
})();