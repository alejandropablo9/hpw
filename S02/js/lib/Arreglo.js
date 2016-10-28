var Arreglo = (function(){
    var filter = function(g, arr_entrada){
        var arr_salida = [];
        for(var i = 0; i < arr_entrada.length; i++){
            if (g(arr_entrada[i])){
                arr_salida.push(arr_entrada[i]);
            }
        }
        return arr_salida;
    };

    var map = function(g, arr_entrada){
        var arr_salida = [];
        for(var i = 0; i < arr_entrada.length; i++){
            arr_salida.push(g(arr_entrada[i]));
        }
        return arr_salida;
    };

    var reduce = function(g, vi, arr_entrada){
        var vf = vi;
        for(var i = 0; i < arr_entrada.length; i++){
            vf = g(vf, arr_entrada[i]);
        }
        return vf;
    };

    var forEach = function(f, arr_entrada) {
        for (var i = 0; i < arr_entrada.length; i++) {
            f(arr_entrada[i]);            
        }
    };

    return {
        "filter": filter,
        "map"   : map,
        "reduce": reduce,
        "forEach": forEach
    };
})();
