var Biblioteca = (function(){

    var BD = {
        "autores": [
            {
                "id": 10,
                "nombre": "Antonio",
                "apellido": {
                    "paterno": "Hernández",
                    "materno": "Blas"
                },
                "libros": [100, 101]
            },
            {
                "id": 11,
                "nombre": "Gonzalo",
                "apellido": {
                    "paterno": "Mendoza",
                    "materno": "García"
                },
                "libros": []
            },
            {
                "id": 12,
                "nombre": "Agustin",
                "apellido": {
                "paterno": "Vasquez",
                "materno": "Martínez"
                },
                "libros": [103, 104, 105]
            },
            {
                "id": 13,
                "nombre": "Cristopher",
                "apellido": {
                "paterno": "Gómez",
                "materno": "Oseguera"
                },
                "libros": [106,108]
            },
            {
                "id": 14,
                "nombre": "Omar",
                "apellido": {
                "paterno": "Carrasco",
                "materno": "López"
                },
                "libros": [109,110,111]
            },
            {
                "id": 15,
                "nombre": "Erick",
                "apellido": {
                "paterno": "García",
                "materno": "Pérez"
                },
                "libros": [109,111]
            },
            {
                "id": 16,
                "nombre": "Jesús Alejandro",
                "apellido": {
                "paterno": "Pablo",
                "materno": "Ojeda"
                },
                "libros": [115,116,117]
            },
            {
                "id": 17,
                "nombre": "Arturo Vladimir",
                "apellido": {
                "paterno": "Vásquez",
                "materno": "Sierra"
                },
                "libros": [118,119,120]
            },
            {
                "id": 18,
                "nombre": "Adolfo Adan",
                "apellido": {
                "paterno": "Jarquín",
                "materno": "Lara"
                },
                "libros": [115,110]
            },
            {
                "id": 19,
                "nombre": "WIlfrido",
                "apellido": {
                    "paterno": "Santos",
                    "materno": "López"
                },
                "libros": [112,125]
            },
            {
                "id": 20,
                "nombre": "Diego",
                "apellido": {
                    "paterno": "Velasco",
                    "materno": "Cruz"
                },
                "libros": [112,125]
            },
            {
                "id": 21,
                "nombre": "Rogelio",
                "apellido": {
                    "paterno": "Daniel",
                    "materno": "Olivera"
                },
                "libros": [131,132]
            }          
        ],

        "libros": [
            {
                "id":100,
                "titulo":"Las batallas en el desierto",
                "isbn":"6074450552",
                "publicacion": "1998",
                "editorial":"ERA",
                "genero":"Novela contemporánea"
            },
            {
                "id":101,
                "titulo":"EL laberinto de la soledad",
                "isbn":"968161643X",
                "publicacion":"1950",
                "editorial":"Fondo de Cultura Económica",
                "genero":"Didactico"
            },
            {
                "id":102,
                "titulo":"La llama doble",
                "isbn":"9786070720451",
                "publicacion": "1993",
                "editorial":"SEIX BARRAL",
                "genero":"Didactico"
            },            
            {
                "id": 103,
                "titulo": "Moby-Dick",
                "isbn": "1289378239",
                "publicacion": "1851",
                "editorial": "Richard Bentley",
                "genero": "Novela",
            },
            {
                "id": 104,
                "titulo": "El Señor de los Anillos",
                "isbn": "1020398",
                "publicacion": "1954",
                "editorial": "George Allen & Unwim",
                "genero": "Novela",
            },
            {
                "id": 105,
                "titulo": "Choque de reyes",
                "isbn": "28129300",
                "publicacion": "1998",
                "editorial": "Bantam Spectra",
                "genero": "Novela",
            },
            {
                "id":106,
                "titulo":"Don quijote de la mancha",
                "isbn":"60744501423",
                "publicacion":"1980",
                "editorial":"",
                "genero":"Novela"
            },
            {
                "id":107,
                "titulo":"EL laberinto de la soledad",
                "isbn":"9681616431434",
                "publicacion":"2004",
                "editorial":"Trillas",
                "genero":"Historia"
            },
            {
                "id":108,
                "titulo":"La Tierra Gira",
                "isbn":"978-6070720376",
                "publicacion":"2013",
                "editorial":"Trillas",
                "genero":"Geografia"
            },        
            {
                "id": 109,
                "titulo": "EL ALQUIMISTA",
                "isbn": "9789707802971",
                "publicacion": "1988",
                "editorial": "GRIJALBO",
                "genero": "MISION"
            },
            {
                "id": 110,
                "titulo": "LOS HORNOS DE HITLER",
                "isbn": "9786070721786",
                "publicacion": "1961",
                "editorial": "BOOKET",
                "genero": "EPICO"
            },
            {
                "id": 111,
                "titulo": "CABALLO DE TROYA 1",
                "isbn": "9788408064626",
                "publicacion": "2005",
                "editorial": "PLANETA",
                "genero": "NOVELA"
            },
            {
                "id":112,
                "titulo":"Fundamentos de Administracion",
                "isbn":"9789682477850",
                "publicacion":"2009",
                "editorial":"Trillas",
                "genero":"Academico"
            },
            {
                "id":113,
                "titulo":"Sistemas Operativos Modernos",
                "isbn":"9688803235",
                "publicacion":"1992",
                "editorial":"Prentice-Hall Mexico",
                "genero":"Academico"
            },
            {
                "id":114,
                "titulo":"El viejo y el mar",
                "isbn":"9706660224",
                "publicacion":"2005",
                "editorial":"Tomo",
                "genero":"Literario"
            },
            {
                "id": 115,
                "titulo": "La naranja mecanica",
                "isbn": "9786070701566",
                "publicacion": "1962",
                "editorial": "Minotauro",
                "genero": "Ciencia Ficcion" 
            },
            {
                "id": 116,
                "titulo": "Cien años de soledad",
                "isbn": "9788420471839",
                "publicacion": "1967",
                "editorial": "Diana",
                "genero": "Realismo magico" 
            },
            {
                "id": 117,
                "titulo": "Alexandros",
                "isbn": "9789708103558",
                "publicacion": "1998",
                "editorial": "Montena",
                "genero": "Novela Historica" 
            },
            {
                "id": 118,
                "titulo": "Caida libre",
                "isbn": "9788430615902",
                "publicacion": "2010",
                "editorial": "Taurus",
                "genero": "Novela"
            },
            {
                "id": 119,
                "titulo": "Insurgente",
                "isbn": "9788427203181",
                "publicacion": "2012",
                "editorial": "Molino",
                "genero": "Novela"
            },
            {
                "id": 120,
                "titulo": "Juego de Tronos",
                "isbn": "9788496208964",
                "publicacion": "2012",
                "editorial": "Gigamesh",
                "genero": "Novela"
            },
            {
                "id": 121,
                "titulo": "independecia de mexico",
                "isbn": "1234567899877",
                "publicacion": "2000",
                "editorial": "independiente",
                "genero": "trama"
            },
                {
                "id": 122,
                "titulo": "Vida de Porfirio Diaz",
                "isbn": "9877894565461",
                "publicacion": "1995",
                "editorial": "Mexicano",
                "genero": "historia"
            },
            {
                "id": 123,
                "titulo": "los relatos de Andres",
                "isbn": "7412589637",
                "publicacion": "1996",
                "editorial": "Roger's",
                "genero": "cuento"
            },
            {
                "id":124,
                "titulo":"La revolucion mesmerica",
                "isbn":"1233425768752",
                "publicacion":"2004",
                "editorial":"oaxacar",
                "genero":"misterio"
            },
            {
                "id":125,
                "titulo":"IT",
                "isbn":"9994453572463",
                "publicacion":"2002",
                "editorial":"Eso",
                "genero":"terror"
            },
            {
                "id":126,
                "titulo":"Misericordiae Voltus",
                "isbn":"9786077141457",
                "publicacion":"2015",
                "editorial":"San Pablo",
                "genero":"Religion"
            },
            {
                "id":127,
                "titulo":"Tokyo Blues",
                "isbn":"C287364",
                "publicacion": "2003",
                "editorial":"Jisho",
                "genero":["Drama","Suspenso"]
            },
            {
                "id":128,
                "titulo":"El principito",
                "isbn":"X193485",
                "publicacion": "1980",
                "editorial":"Jcrox",
                "genero":["Drama"]
            },
            {
                "id":129,
                "titulo":"El código de Da Vinci",
                "isbn":"A192736",
                "publicacion": "1987",
                "editorial":"Socrax",
                "genero":["Drama"]
            },
            {
                "id": 130,
                "titulo":"Fudación",
                "isbn":"9788499083209",
                "publicacion":"1952",
                "editorial":"De Bolsillo",
                "genero":"ficcion"
            },            
            {
                "id": 131,
                "titulo":"El gran diseño",
                "isbn":"9788498921724",
                "publicacion":"2010",
                "editorial":"Bantam Books",
                "genero":"ciencia"
            },
            {
                "id": 132,
                "titulo":"Un pacto con el diablo",
                "isbn":"9789681660369",
                "publicacion":"1999",
                "editorial":"S.L. FONDO DE CULTURA ECONOMICA DE ESPAÑAs",
                "genero":"Suspenso"
            }   
        ]
    };
    
    return {
        "autores": BD.autores,
        "libros": BD.libros
    };
})();