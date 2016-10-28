var Objeto = (function(){
    var filter = function(g, obj_entrada){
        var obj_salida = {};
        for(var llave in obj_entrada){
            if(g(obj_entrada[llave])){
                obj_salida[llave] = g(obj_entrada[llave]);
            }
        }
        return obj_salida;
    };

    var map = function(g, obj_entrada){
        var obj_salida = {};
        for(var llave in obj_entrada){
            obj_salida[llave] = obj_entrada[llave];
        }
        return obj_salida;
    };

    var reduce = function(g, vi, obj_entrada){
        var vf = vi;
        for(var llave in obj_entrada){
            vf = g(vf, obj_entrada[llave]);
        }
        return vf;
    };

    var forEach = function(f, obj_entrada) {
        for(var llave in obj_entrada){
            f(obj_entrada[llave]);            
        }
    };

    return {
        "filter": filter,
        "map"   : map,
        "reduce": reduce,
        "forEach": forEach
    };
})();
