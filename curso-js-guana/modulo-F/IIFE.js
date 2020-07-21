/*//normal function
var hi = function(value) {
    console.log('hi', value)

}
hi(123)

//iife
//example 1
var hi = function(value) {
        console.log('hi', value)

    }(456)*/
//example 2
/*voce tambem pode adicionar (~, void, !) no começo da função pa declarar uma iife(Immediately Invoked Function Expression) porém o exemplo abaixo é o mais tradicional


IIFE (Immediately Invoked Function Expression) é uma função em JavaScript que é executada assim que definida.

É um Design Pattern também conhecido como Self-Executing Anonymous Function e contém duas partes principais. A primeira é a função anônima cujo escopo léxico é encapsulado entre parênteses. Isso previne o acesso externo às variáveis declaradas na IIFE, bem como evita que estas variáveis locais poluam o escopo global.

A segunda parte corresponde à criação da expressão (), por meio da qual o interpretador JavaScript avaliará e executará a função.*/

(function(value) {
    console.log('hi', value);

})(30)