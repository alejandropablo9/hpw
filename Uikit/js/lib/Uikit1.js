var Uikit = (function(){
    
    var select = function(_list){
        var select = HTML.select(_list);
        select.setAttribute("class", "uk-form uk-margin-top uk-margin-bottom uk-container uk-container-center");
        return select;
    }; 
    
    var button = function(titulo, clase){
        var clases = "uk-button";
        if(typeof(clase) === "string")
            clases += " "+clase;        
        var boton = HTML.button(titulo);
        boton.setAttribute("class", clases);
        return boton;
    };

    var button_primary = function(titulo){
        return button(titulo, "uk-button-primary");
    };
    
    var button_success = function(titulo){
        return button(titulo, "uk-button-success");
    };

    var button_danger = function(titulo){
        return button(titulo, "uk-button-danger");
    };

    var input = function(msj, clase){
        var clases = "uk-width-1-1";
        if(typeof(clase) === "string")
            clases += " "+clase;    
        var input = HTML.input();
        input.setAttribute("type", "text");
        input.setAttribute("class", clases);         
          
        if(typeof(msj) === "string")
            input.setAttribute("placeholder", msj);
        return input;
    };

    var input_password = function(msj){
        var pass = input(msj);
        pass.setAttribute("type", "password");
        return pass;
    };

    var input_succes = function(msj){
        var inp = input(msj, "uk-form-success");
        inp.setAttribute("value", "form-success");
        return inp;        
    };
    
    var input_danger = function(msj){
        var inp = input(msj, "uk-form-danger");
        inp.setAttribute("value", "form-danger");
        return inp;        
    };    

    var table = function(_ths, _tds){
        var tabla = HTML.tabla(_ths, _tds);
        tabla.setAttribute("class", "uk-table uk-table-striped uk-table-condensed uk-table-hover");
        return tabla; 
    };

    var list_striped = function(_list){
        var ul = HTML.ul();
        ul.setAttribute("class", "uk-list uk-list-striped");
        for(var i = 0; i < _list.length; i++){
            var li = HTML.li(_list[i]);            
            ul.appendChild(li);
        } 
        return ul;
    };

    var list_line = function(_list){
        var lista = list_striped(_list);
        lista.setAttribute("class", "uk-list uk-list-line");
        return lista;
    };
    

    return{
        "select": select,
        "button": button,
        "button_primary": button_primary,
        "button_success": button_success,
        "button_danger": button_danger,
        "input": input,
        "input_password": input_password,
        "input_succes": input_succes,
        "input_danger": input_danger,
        "table": table,
        "list_striped": list_striped,
        "list_line": list_line
    };
})();