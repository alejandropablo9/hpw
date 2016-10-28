var ExpresionRegular = (function(){

    var independiente_de_letras_acentuadas = function(cadena_de_caracteres){
	var arr_temporal = cadena_de_caracteres.toLowerCase().split("");
	
	var subexpresion = function(caracter){
		var cambia = {
		    "a": "[aá]",
		    "e": "[eé]",
		    "i": "[ií]",
		    "o": "[oó]",
		    "u": "[uú]",
		    "á": "[aá]",
		    "é": "[eé]",
		    "í": "[ií]",
		    "ó": "[oó]",
		    "ú": "[uú]"
		};
		if(cambia[caracter]){
		    return cambia[caracter];
		}else{
		    return caracter;
		}
	};
	
	var arr_sustituciones = Arreglo.map(subexpresion, arr_temporal);
	var expresion_regular = arr_sustituciones.join("");
	return new RegExp(expresion_regular, "i");
    };
    
    return{
        "independiente_de_letras_acentuadas": independiente_de_letras_acentuadas
    }
})();