var Root13 = (function(){
    var cifrado = function(mensaje){
        if(typeof(mensaje) !== "string")
            return "";
        var arr_mensaje = mensaje.split("");
        var cifrar_caracter = function(letra){
            var caracteres = {
                "A": "N",   "a": "n",
                "B": "O",   "b": "o",
                "C": "P",   "c": "p",
                "D": "Q",   "d": "q",
                "E": "R",   "e": "r",
                "F": "S",   "f": "s",
                "G": "T",   "g": "t",
                "H": "U",   "h": "u",
                "I": "V",   "i": "v",
                "J": "W",   "j": "w",
                "K": "X",   "k": "x",
                "L": "Y",   "l": "y",
                "M": "Z",   "m": "z",
                "N": "A",   "n": "a",
                "O": "B",   "o": "b",
                "P": "C",   "p": "c",
                "Q": "D",   "q": "d",
                "R": "E",   "r": "e",
                "S": "F",   "s": "f",
                "T": "G",   "t": "g",
                "U": "H",   "u": "h",
                "V": "I",   "v": "i",
                "W": "J",   "w": "j",
                "X": "K",   "x": "k",
                "Y": "L",   "y": "l", 
                "Z": "M",   "z": "m",
                " ": " ",   "\n": "\n",
                "\t": "\t"
            }
            return caracteres[letra];          
        }        
        var mensaje_cifrado = Arreglo.map(cifrar_caracter, arr_mensaje).join("");
        if(mensaje.length === mensaje_cifrado.length)
            return mensaje_cifrado;
        return "";
    }
    return {
        "cifrado": cifrado
    }
})();