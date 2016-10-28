var Arreglo = (function(){
    var reduce = function(g, vi, arr_entrada){
        var vf = vi;
        for(var i = 0; i<arr_entrada.length; i++){
            vf = g(vf, arr_entrada[i]);
        }
        return vf;
    }
    return {
        "reduce": reduce
    };
})();