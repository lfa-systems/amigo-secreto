//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let listaAmigos = document.getElementById( 'listaAmigos' );


function adicionarAmigo() {
    let amigo = document.querySelector( 'input' ).value;
    if ( amigo == '' ) {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push( amigo );
    }
    mostrarListaDeAmiigos();
    limparCampo();
}

function limparCampo() {
    amigo = document.querySelector( 'input' );
    amigo.value = '';
}


function mostrarListaDeAmiigos() {
    listaAmigos.innerHTML = '';
    for ( let indice in amigos ){
       listaAmigos.innerHTML += '<li id=' + indice + '>' + amigos[indice] + '</li>';
    } 
    
    console.log(listaAmigos);
}