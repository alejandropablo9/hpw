var GUI = (function(){
    var ejemplo = function(){
        var lista = Tachyons.select(["enero", "febrero", "marzo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]);
        document.body.appendChild(lista);

        var input1 = Ink.inputPassword("contraseña");
        document.body.appendChild(input1);

        var boton1 = Ink.inkButton("Cancelar", "red");
        document.body.appendChild(boton1);
    }

    return {
        "ejemplo": ejemplo
    }
})();