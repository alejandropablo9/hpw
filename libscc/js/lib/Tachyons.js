var Tachyons = (function(){
    var buttonBasicTachyons = function(text, clase, color){
        var boton = HTML.button(text);
        if(typeof(clase) !== "string")
            clase = "";        
        var clases = "f6 link dim br2 "+clase+" ph3 pv2 mb2 dib";
        clases += " "+color;  
        boton.setAttribute("class", clases);
        return boton;
    };

    var basicButton = function(text, color){
        /*colores en tachyonscss 
        *bg-black, bg-near-black, bg-dark-gray, bg-mid-gray
        *bg-purple, bg-light-purple, bg-hot-pink, bg-dark-pink
        *bg-navy, bg-dark-blue, bg-dark-green
        */
        if(typeof(color) !== "string")
            color = "bg-black";
        color = "white "+color;
        var boton = buttonBasicTachyons(text, "", color);                        
        return boton;
    };
    
    var basicButtonThinBorder = function(text, color){
        /*colores en tachyonscss 
        * black near-black, dark-gray, mid-gray 
        * purple, light-purple, hot-pink dark-pink
        * navy, dark-blue dark-green
        */
        if(typeof(color) !== "string")
            color = "black"        
        var boton = buttonBasicTachyons(text, "ba", color);
        return boton;        
    };

    var basicButtonBorder = function(text, color){
        if(typeof(color) !== "string")
            color = "black"        
        var boton = buttonBasicTachyons(text, "ba bw1", color);
        return boton;  
    };

    var basicButtonThickBorder = function(text, color){
        if(typeof(color) !== "string")
            color = "black"        
        var boton = buttonBasicTachyons(text, "ba bw2", color);
        return boton; 
    };

    var buttonPillGrowTachyons = function(text, clase, color){
        var boton = HTML.button(text);
        if(typeof(clase) !== "string")
            clase = "";        
        var clases = "f6 grow no-underline br-pill "+clase+" ph3 pv2 mb2 dib";
        clases += " "+color;  
        boton.setAttribute("class", clases);
        return boton;
    };

    var pillGrowButton = function(text, color){
        /*colores en tachyonscss 
        *bg-black, bg-near-black, bg-dark-gray, bg-mid-gray
        *bg-purple, bg-light-purple, bg-hot-pink, bg-dark-pink
        *bg-navy, bg-dark-blue, bg-dark-green
        */
        if(typeof(color) !== "string")
            color = "bg-black";
        color = "white "+color;
        var boton = buttonPillGrowTachyons(text, "", color);                        
        return boton;
    };
    
    var pillGrowButtonThinBorder = function(text, color){
        /*colores en tachyonscss 
        * black near-black, dark-gray, mid-gray 
        * purple, light-purple, hot-pink dark-pink
        * navy, dark-blue dark-green
        */
        if(typeof(color) !== "string")
            color = "black"        
        var boton = buttonPillGrowTachyons(text, "ba", color);
        return boton;        
    };

    var pillGrowButtonBorder = function(text, color){
        if(typeof(color) !== "string")
            color = "black"        
        var boton = buttonPillGrowTachyons(text, "ba bw1", color);
        return boton;  
    };

    var pillGrowButtonThickBorder = function(text, color){
        if(typeof(color) !== "string")
            color = "black"        
        var boton = buttonPillGrowTachyons(text, "ba bw2", color);
        return boton; 
    };

    var buttonPillTachyons = function(text, clase, color){
        var boton = HTML.button(text);
        if(typeof(clase) !== "string")
            clase = "";        
        var clases = "f6 link dim br-pill "+clase+" ph3 pv2 mb2 dib";
        clases += " "+color;  
        boton.setAttribute("class", clases);
        return boton;
    };

    var pillButton = function(text, color){
        /*colores en tachyonscss 
        *bg-black, bg-near-black, bg-dark-gray, bg-mid-gray
        *bg-purple, bg-light-purple, bg-hot-pink, bg-dark-pink
        *bg-navy, bg-dark-blue, bg-dark-green
        */
        if(typeof(color) !== "string")
            color = "bg-black";
        color = "white "+color;
        var boton = buttonPillTachyons(text, "", color);                        
        return boton;
    };
    
    var pillButtonThinBorder = function(text, color){
        /*colores en tachyonscss 
        * black near-black, dark-gray, mid-gray 
        * purple, light-purple, hot-pink dark-pink
        * navy, dark-blue dark-green
        */
        if(typeof(color) !== "string")
            color = "black"        
        var boton = buttonPillTachyons(text, "ba", color);
        return boton;        
    };

    var pillButtonBorder = function(text, color){
        if(typeof(color) !== "string")
            color = "black"        
        var boton = buttonPillTachyons(text, "ba bw1", color);
        return boton;  
    };

    var pillButtonThickBorder = function(text, color){
        if(typeof(color) !== "string")
            color = "black"        
        var boton = buttonPillTachyons(text, "ba bw2", color);
        return boton; 
    };

    /**
     * Avatars
     **/

    var avatarCircleTachyons = function(src, clase){
        if(typeof(clase) != "string")
            clase = "";
        var clases = "br-100 "+clase+" h3 w3 dib";
        var alt = "avatar";
        var avatar = HTML.img(src);
        avatar.setAttribute("class", clases);
        avatar.setAttribute("alt", alt);
        return avatar;
    };

    var avatarCircleBorder = function (src) {
        return avatarCircleTachyons(src, "ba")
    };

    var avatarCircle = function(src){
        return avatarCircleTachyons(src, "");
    };
    /**
     * Listas
     **/

    var listTachyons = function(_list){
        var ul = HTML.ul();
        for(var i = 0; i < _list.length; i++){
            var li = HTML.li(_list[i]);
            li.setAttribute("class", "ph3 pv3 bb b--light-silver");            
            ul.appendChild(li);
        } 
        return ul;
    };

    var listBorderSpaced = function(_list){
        var ul = listTachyons(_list);
        ul.setAttribute("class", "list pl0 ml0 center mw6 ba b--light-silver br2");
        return ul;
    }

    var listBorderTight = function(_list){
        var ul = listTachyons(_list);
        ul.setAttribute("class", "list pl0 ml0 center mw5 ba b--light-silver br3");
        return ul;
    }

    var inputPassword = function(){
        var input = HTML.input();        
        input.setAttribute("class", "b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100");
        input.setAttribute("name", "password");  
        input.setAttribute("id", "password");
        return input;
    }

    var select = function(_list){
        return HTML.select(_list);
    };

    return{
        "basicButton":                  basicButton,
        "basicButtonThinBorder":        basicButtonThinBorder,
        "basicButtonBorder":            basicButtonBorder,
        "basicButtonThickBorder":       basicButtonThickBorder,
        "pillButton":                   pillButton,
        "pillButtonThinBorder":         pillButtonThinBorder,
        "pillButtonBorder":             pillButtonBorder,
        "pillButtonThickBorder":        pillButtonThickBorder,
        "pillGrowButton":               pillGrowButton,
        "pillGrowButtonThinBorder":     pillGrowButtonThinBorder,
        "pillGrowButtonBorder":         pillGrowButtonBorder,
        "pillGrowButtonThickBorder":    pillGrowButtonThickBorder,
        
        "avatarCircleBorder":           avatarCircleBorder,
        "avatarCircle":                 avatarCircle,

        "listBorderSpaced":             listBorderSpaced,
        "listBorderTight":              listBorderTight,
        "inputPassword":                inputPassword,
        "select":                       select 
    };
})();