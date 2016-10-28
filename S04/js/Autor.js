var Autor = (function(){
            
    var con_nombre = function(arr_autores, nombre) {
        return Arreglo.filter(function(autor){	
            return ExpresionRegular.independiente_de_letras_acentuadas(nombre).test(autor.nombre);
        }, arr_autores)
    };
/*
    var con_apellido_paterno = function(arr_autores, apellido_pa){
        return Arreglo.filter(function(autor){
            var re = new RegExp(
                Arreglo.map(ExpresionRegular.vocales_independientes_de_acentos, 
                            apellido_pa.toLowerCase().split("")).join("")
            );
                return (re.test(autor.apellido.paterno.toLowerCase()) === re.test(apellido_pa.toLowerCase()));
        }, arr_autores);
    };

    var con_apellido_materno = function(arr_autores, apellido_ma){
        return Arreglo.filter(function(autor){
            var re = new RegExp(
                Arreglo.map(ExpresionRegular.vocales_independientes_de_acentos, 
                            apellido_ma.toLowerCase().split("")).join("")
            );
                return (re.test(autor.apellido.materno.toLowerCase()) === re.test(apellido_ma.toLowerCase()));
        }, arr_autores);
    };

    var con_apellido = function(arr_autores, apellido){
        var arr_pa = con_apellido_paterno(arr_autores, apellido);
        var arr_ma = con_apellido_materno(arr_autores, apellido);
        return arr_pa.concat(arr_ma);
    }
    */


    return {
        "con_nombre":           con_nombre
        //"con_apellido_paterno": con_apellido_paterno,
        //"con_apellido_materno": con_apellido_materno,
        //"con_apellido":         con_apellido
    };
})();