function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if(filmeFavorito.endsWith(".jpg")) {
        listaFilmesNaTela(filmeFavorito)
    } else{
        console.error("Endereço de filme invalido");
    }
    document.getElementById("filme").value = "";
   
}

function listaFilmesNaTela(filme){
    console.log(filme);
    var elementofilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
   
   elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementofilmeFavorito;
}

