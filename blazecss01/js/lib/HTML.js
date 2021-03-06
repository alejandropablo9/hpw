var HTML = (function(){
    var _envolver = function(obj){ 
        var _estado = obj;        
        var _envoltura = {
            "set_id": function(_id){
                _estado.setAttribute("id", _id);
                return _envoltura;
            },
            "set_text": function(_text){
                _estado.textContent = text;
                return _envoltura;
            },
            "set_attribute": function(_atribute, value){
                _estado.setAttribute(_atribute, value);
                return _envoltura;
            },
            "add_class": function(){
                _estado.classList.add(_class);
                return _envoltura;
            },
            "element": function(){
                return estado;
            }
        }
        return _envoltura;
    };

    var _new_element = function(_etiqueta, obj_atributos){
        var nuevo_elemento = document.createElement(_etiqueta);
        for(var atributo in obj_atributos){
            _etiqueta.setAttribute(atributo, obj_atributos[atributo]);
        }
        return _envolver(nuevo_elemento);
    };
    
    return {
        "new_element": _new_element,        
    }
})();