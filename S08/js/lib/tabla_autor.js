var Tabla_Autor = (function(){
    var tabla_autores = function(arr_autores){
        var cabecera = ["id","nombre","paterno","materno"];
        var cuerpo = [];
        for(var i = 0; i < arr_autores.length; i++){
            cuerpo.push(
                [arr_autores[i].id,arr_autores[i].nombre,
                arr_autores[i].apellido.paterno,
                arr_autores[i].apellido.materno]
            );
        }
        return HTML.tabla(cabecera, cuerpo);
    }

var tabla_autores_con_nombre = function(nombre, arr_autores){
    return tabla_autores(Autor.con_nombre(arr_autores, nombre));    
};

var tabla_autores_con_apellido_paterno = function(ap_paterno, arr_autores){
    return tabla_autores(Autor.con_apellido_paterno(arr_autores, ap_paterno));    
};

var tabla_autores_con_apellido_materno = function(ap_materno, arr_autores){
    return tabla_autores(Autor.con_apellido_materno(arr_autores, ap_materno));    
};

return {
    "tabla_autores": tabla_autores,
    "tabla_autores_con_nombre": tabla_autores_con_nombre,
    "tabla_autores_con_apellido_materno": tabla_autores_con_apellido_materno,
    "tabla_autores_con_apellido_paterno": tabla_autores_con_apellido_paterno

};
})();
