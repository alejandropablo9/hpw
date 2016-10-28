QUnit.test("Tests de Root13", function(assert) {
    
    assert.strictEqual(
        Root13.cifrado("HOLA"),
        "UBYN",
        "Cifrado de HOLA -> UBYN"
    );

    assert.strictEqual(
        Root13.cifrado("hOLA"),
        "uBYN",
        "Cifrado de hOLA -> uBYN"
    );

    assert.strictEqual(
        Root13.cifrado(" h o l A "),
        " u b y N ",
        "Cifrado de ' h o l A ' -> ' u b y N '"
    );

    assert.strictEqual(
        Root13.cifrado(""),
        "",
        "Cifrado de '' -> ''"
    );

    assert.strictEqual(
        Root13.cifrado("  "),
        "  ",
        "Cifrado de '  ' -> '  '"
    );
    
    assert.strictEqual(
        Root13.cifrado("HOLÑ"),
        "",
        "Cifrado de 'HOLÑ' ->  ''"
    );
    
    assert.strictEqual(
        Root13.cifrado("HO1A"),
        "",
        "Cifrado de 'HO1A' ->  ''"
    );

    assert.strictEqual(
        Root13.cifrado("HO@A"),
        "",
        "Cifrado de 'HO@A' ->  ''"
    );

    assert.strictEqual(
        Root13.cifrado("HO\nLA"),
        "UB\nYN",
        "Cifrado de 'HO\nLA' ->  'UB\nYN'"
    );
    assert.strictEqual(
        Root13.cifrado("\tHOLA"),
        "\tUBYN",
        "Cifrado de '\tHOLA' ->  '\tUBYN'"
    );

    assert.strictEqual(
        Root13.cifrado("   "),
        "",
        "Cifrado de '   ' ->  ''"
    );

});