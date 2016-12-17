var InkCSS = (function(){
    return {
        "Button": undefined,
        "Input": undefined,
        "Select": undefined
    };
})();

InkCSS.Button = (function(){
    var _basic = function(){
        return HTML.new_element("button", {
            "class": "ink-button"
        });
    };

    var _basic_red = function(){
        return HTML.new_element("button", {
            "class": "ink-button red"
        });
    };

    var _basic_green = function(){
        return HTML.new_element("button", {
            "class": "ink-button green"
        });
    };

    var _basic_blue = function(){
        return HTML.new_element("button", {
            "class": "ink-button blue"
        });
    };

    return {
        "basic": _basic,
        "basic_red": basic_red,
        "basic_green": basic_green,
        "basic_blue": _basic_blue
    };
})();

InkCSS.Input = (function(){
    var _text = function(placeholder){
        return HTML.new_element("input", {
            "name": "text",
            "id": "text-input",
            "type": "text",
            "placeholder": placeholder
        })
    };

    var _password = function(placeholder){
        return HTML.new_element("input", {
            "name": "password",
            "id": "required-password",
            "type": "password",
            "placeholder": placeholder
        })
    };   

    return {
        "text": _text,
        "password": _password
    }; 
})();

InckCSS.Select = (function(){
    var _select = function(_elements){
        var select = HTML.new_element("input", {});
        for(var i = 0; i < _elements.length; i++){
            var option = HTML.new_element("option", {});
            option.set_text(_elements[i]);            
            select.add_child(option);
        }
        return select;
    }

    return {
        "select": _select
    };
})();