var GUI = (function(){
    var ejemplo = function(){
        var lista = Tachyons.select(["enero", "febrero", "marzo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]);
        document.body.appendChild(lista);

        var input = Tachyons.inputPassword();
        document.body.appendChild(input);

        var boton1 = Tachyons.basicButtonThinBorder("Cancelar", "bg-dark-red");
        document.body.appendChild(boton1);
    }

    return {
        "ejemplo": ejemplo
    }
})();