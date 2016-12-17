var GUI = (function(){
    var ejemplo = function(){
        /*        
        var select = Uikit.select(["enero", "febrero", "marzo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]);
        document.body.appendChild(select);

        var input = Uikit.input_password();
        document.body.appendChild(input);


        var boton = Uikit.button_danger("cancelar");
        document.body.appendChild(boton);
        */

        document.body.appendChild(
            UikitCSS.Select.select(["enero", "febrero", "marzo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"])            
        );

        document.body.appendChild(
            UikitCSS.Button.danger().
            set_text("cancelar").
            element()
        );
    }

    return {
        "ejemplo": ejemplo
    }
})();