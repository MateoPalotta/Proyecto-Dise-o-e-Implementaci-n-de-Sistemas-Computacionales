function idiomaP(palabras){
    let palabra = "";
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    for(i=0; i < palabras.length; i++){
        let letra = palabras.charAt(i);
        if (vocales.includes(letra.toLocaleLowerCase())){
            palabra += letra + "p" + letra;
        }else{
            palabra += letra;
        }
    }
    console.log(palabra);
    return palabra;
}

idiomaP("hola");
idiomaP("Mundo");
idiomaP("Ah Caray! Esto es mucho calculo!");
