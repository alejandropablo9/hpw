var UikitCSS = (function(){
	return {
		"Button": undefined,
		"Select": undefined,
		"Input": undefined
	};	
})();

UikitCSS.Button = (function(){
	var _basic = function(){
        return HTML.new_element("button", {
            "class": "uk-button"
        });
    };

	var _primary = function(){
        return HTML.new_element("button", {
            "class": "uk-button uk-button-primary"
        });
    };

	var _success = function(){
        return HTML.new_element("button", {
            "class": "uk-button uk-button-success"
        });
    };

	var _danger = function(){
        return HTML.new_element("button", {
            "class": "uk-button uk-button-danger"
        });
    };

	return {
		"basic": _basic,
		"primary": _primary,
		"success": _success,
		"danger": _danger
	};
})();

UikitCSS.Select = (function(){
	var _select = function(_elements){
        var select = HTML.new_element("input", {
			"class": "uk-form uk-margin-top uk-margin-bottom uk-container uk-container-center"
		});
        for(var i = 0; i < _elements.length; i++){
            var option = HTML.new_element("option", {});
            option.set_text(_elements[i]);            
            select.add_child(option);
        }
        return select;
    }

	return{
		"select": _select
	}
	
})();

UikitCSS.Input = (function(){
    var _text = function(placeholder){
        return HTML.new_element("input", {
            "class": "uk-width-1-1",            
            "type": "text",
            "placeholder": placeholder
        });
    };

    var _password = function(placeholder){
        return HTML.new_element("input", {
            "class": "uk-width-1-1",            
            "type": "password",
            "placeholder": placeholder
        });
    };

	var _success = function(placeholder){
        return HTML.new_element("input", {
            "class": "uk-width-1-1 uk-form-success",            
            "type": "text",
			"value": "form-success",
            "placeholder": placeholder
        });
    };  

	var _danger = function(placeholder){
        return HTML.new_element("input", {
            "class": "uk-width-1-1 uk-form-danger",            
            "type": "text",
			"value": "form-danger",
            "placeholder": placeholder
        });
    };   

    return {
        "text": _text,
        "password": _password,
		"success": _success,
		"danger": _danger
    }; 
})();