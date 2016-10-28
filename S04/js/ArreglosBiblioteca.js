    var con_titulo = function(arr_libros, titulo){
    return Arreglo.filter(function(libro){
      return (libro.titulo.toLowerCase() === titulo.toLowerCase());
    }, arr_libros)
  }

  var con_titulo = function(arr_libros, titulo){
    return Arreglo.filter(function(libro){
      return (libro.titulo.toLowerCase() === titulo.toLowerCase());
    }, arr_libros)
  }

  var con_titulo = function(arr_libros, isbn){
    return Arreglo.filter(function(libro){
      return (libro.isbn === isbn);
    }, arr_libros)
  }

  var con_titulo = function(arr_libros, publicacion){
    return Arreglo.filter(function(libro){
      return (libro.publicacion === publicacion);
    }, arr_libros)
  }

  var con_titulo = function(arr_libros, editorial){
    return Arreglo.filter(function(libro){
      return (libro.editorial.toLowerCase() === editorial.toLowerCase());
    }, arr_libros)
  }

  var con_titulo = function(arr_libros, genero){
    return Arreglo.filter(function(libro){
      return (libro.genero.toLowerCase() === genero.toLowerCase());
    }, arr_libros)
  }





Arreglo.map(creaExp, "programacion".split(""))