var Examen = (function(){
    var es_minuscula = function(letra){
        return letra === letra.toLowerCase();
    };

    var arr_letras = function(){
        return ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
         "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", 
         "W", "X", "Z"];
    };

    var caracter_en = function(arr_entrada, c){
        var indice = -1;
        for(var i = 0; i < arr_entrada.length; i++){
             if(arr_entrada[i] === c)
                indice = i; 
         }
         return indice;
    };

    var recorrer_arreglo_infinito = function (arr_entrada, desde, hasta, sentido) {
        var contador = 0;
        var i;
        var pos;
        for (i = desde; contador < hasta; i += sentido) {
            if(i >= arr_entrada.length){
                i = 0;
            }
            if(i < 0){
                i = arr_entrada.length;
            }      
            contador++;
            pos = i;      
        }
        return i;
    }

    var fa = function(caracter, numero){
        if(caracter.length > 1)
            return caracter;
        if(numero< 0)
            return caracter;
    
        var letras = arr_letras();
         
         var minuscula = es_minuscula(caracter);
         if(minuscula){
             caracter = caracter.toLocaleUpperCase();
         }

         var indice_caracter = caracter_en(letras, caracter);
         if(indice_caracter === -1)
            return caracter;
        indice_caracter += numero;
         
         if(indice_caracter >= letras.length){
             indice_caracter = indice_caracter - letras.length;
         }

         if(minuscula)
            return letras[indice_caracter].toLowerCase();
         return letras[indice_caracter];
    };

    var fb = function(caracter, numero){
       if(caracter.length > 1)
            return caracter;
        if(numero > 0)
            return caracter;
    
        var letras = arr_letras();
         
         var minuscula = es_minuscula(caracter);
         if(minuscula){
             caracter = caracter.toLocaleUpperCase();
         }

         var indice_caracter = caracter_en(letras, caracter);
         if(indice_caracter === -1)
            return caracter;
         
         if((indice_caracter + numero) < 0){
             indice_caracter =+ - numero + letras.length;
         }         

         if(minuscula)
            return letras[indice_caracter].toLowerCase();
         return letras[indice_caracter];
    };

    return {
        "fa": fa,
        "fb": fb,
        "recorrer_arreglo_infinito": recorrer_arreglo_infinito
    };
})();