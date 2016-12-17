var Aplicacion = (function(){
    var _procesar_recursos_descargados = function(_recurso_descargado){
        console.log("procesando recurso descargado");     
        var lineas = _recurso_descargado.split("\n");  
        var campos = [];
        var bodoques = []; 
        for(var i = 0; i < lineas.length; i++){
            campos.push(lineas[i].split("|"));
            var nuevo_bodoque = {
                "nombre": campos[i][0],
                "apellido": {
                    "paterno": campos[i][1],
                    "materno": campos[i][2]
                }
            };
            bodoques.push(nuevo_bodoque);            
        }        
    };

    var _main = function(){
        console.log(new Date());
        console.log("iniciando aplicacion...");
        XHR.get({
            "url": "http://127.0.0.1:7070/txt/bodoques.txt",
            "en_caso_de_exito": _procesar_recursos_descargados,
            "en_caso_de_erro": _procesar_recursos_descargados
        });        
        console.log("Aplicacion Inicializada...");
    };

    return {
        "main": _main
    }
})();