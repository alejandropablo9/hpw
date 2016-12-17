var Ink = (function(){

    var inkButton = function(text, color){
        /**
         * blue, green, orange, red, black
         */
        if(typeof(color) !== "string")
            color = "";
        var boton = HTML.button(text);
        boton.setAttribute("class", "ink-button "+color);
        return boton;
    };

    var buttonGroup = function(_botones, clase){
        var div = HTML.div();
        if(typeof(clase) !== "string")
            clase = "";
        div.setAttribute("class", "button-group");
        if(_botones === undefined)
            return div;
        for(var i = 0; i < _botones.length; i++){
            var boton = inkButton(_botones[i]);
            div.appendChild(boton);
        }
        return div;
    };

    var inputText = function(msj){                
        var input = HTML.input();
        input.setAttribute("name", "text");
        input.setAttribute("id", "text-input");
        input.setAttribute("type", "text");
        
        if(typeof(msj) === "string")
            input.setAttribute("placeholder", msj);
        
        return input;
    };

    var inputPassword = function(msj){            
        var input = HTML.input();
        input.setAttribute("name", "password");
        input.setAttribute("id", "required-password");
        input.setAttribute("type", "password");
        
        if(typeof(msj) === "string")
            input.setAttribute("placeholder", msj);
            
        return input;
    };
    
    var inputCheck = function(id, valor){
        if(typeof(id) !== "string")
            id = "cb1";            
        var input = HTML.input();        
        input.setAttribute("type", "checkbox");
        input.setAttribute("id", id);
        input.setAttribute("name", id);
        input.setAttribute("value", valor);

        return input;
    };

    var checkboxes = function(_list){
        var ul = HTML.ul();
        var div = HTML.div();
        div.setAttribute("class", "control-group");
        ul.setAttribute("class", "control unstyed");
        var id;
        for(var i = 0; i < _list.length; i++){
            id = "cb"+(i+1);
            var li = HTML.li();
            var input = inputCheck(id, _list[i]);
            var label = HTML.label(_list[i]);
            label.setAttribute("for", id);                        
            li.appendChild(input);
            li.appendChild(label);
            ul.appendChild(li);
        }
        div.appendChild(ul)
        return div;
    };

    var inkTable = function(_ths, _tds){
        var tabla = HTML.tabla(_ths, _tds);
        tabla.setAttribute("class", "ink-table");
        return tabla; 
    };

    var inkTable_align_left = function(_ths, _tds){
        var tabla = inkTable(_ths, _tds);
        var ths = tabla.getElementsByTagName("th");
        for(var i = 0; i < ths.length; i++){
            ths[i].setAttribute("class","align-left");
        } 
        return tabla;
    };

    var inkTableBorders = function(_ths, _tds){
        var tabla = inkTable(_ths, _tds);
        tabla.setAttribute("class", "ink-table bordered");
        var ths = tabla.getElementsByTagName("th");
        for(var i = 0; i < ths.length; i++){
            ths[i].setAttribute("class","align-left");
        } 
        return tabla;
    };

    return {
        "inkButton": inkButton,
        "buttonGroup": buttonGroup,
        "inputText": inputText,
        "inputPassword": inputPassword,
        "checkboxes": checkboxes,
        "inkTable": inkTable,
        "inkTable_align_left": inkTable_align_left,
        "inkTableBorders": inkTableBorders
    };
})();