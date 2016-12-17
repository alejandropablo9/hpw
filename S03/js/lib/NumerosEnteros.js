var NumerosEnteros = (function(){
    var desde_hasta_de = function(inicio, final, incremento){
            var arr = [];

        if(typeof inicio !== "number"){
            inicio = 0;
        }
        if(typeof final !== "number"){
            final = 0;
        }
        if(typeof incremento !== "number"){
            incremento = 0;
        }
        if(incremento <= 0){
            return [inicio];
        }
        if(inicio <= final){
            for(var i = inicio; i<= final; i+=incremento){
                arr.push(i);
            }
        }else{
            for(var i = inicio; i>= final; i-=incremento){
                arr.push(i);
            }    
        }
        return arr;
    }

    var desde_hasta = function(inicio, final){
        return desde_hasta_de(inicio, final, 1);  
    }; 

    var hasta = function (num_entrada){
        if (num_entrada > 0){
            return desde_hasta(0, num_entrada);
        }
        return desde_hasta(num_entrada, 0);
    }

    return {
        "desde_hasta_de":   desde_hasta_de,
        "desde_hasta":      desde_hasta,
        "hasta":            hasta
    };
})();

