< !DOCTYPE html >
    <
    html lang = "en" >

    <
    head >
    <
    meta charset = "UTF-8" / >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1.0" / >
    <
    title > objetos < /title> <
    style > < /style> <
    /head>

<
body >
    <
    script >
    var pessoa = {
        nome: "André",
        idade: 28,
    };
var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro(lado) {
        return this.lados * lado;
    },
};
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5)); <
/script> <
/body>

<
/html>