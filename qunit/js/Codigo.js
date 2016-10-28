var Codigo = (function() {
    var _sumatoria_hasta_el = function(final) {
        var sumatoria = 0;
        //if(typeof(final) !== "number")
            //return 0;     
        if(final%1 === 0){
            for (var i = 1; i <= final; i++){
                sumatoria += i;
            }
        }
        return sumatoria;
    };
    /*
    var _sumatoria_hasta_el = function(final) {
        return 21;
    };*/

    return {
        "sumatoria_hasta_el": _sumatoria_hasta_el  
    };

})();
