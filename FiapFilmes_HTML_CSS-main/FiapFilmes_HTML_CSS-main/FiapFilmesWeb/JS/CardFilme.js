function CardFilme(dados) {
    let filme = document.createElement("div")
    filme.classList.add("filme")

    let poster = document.createElement("img")
    poster.classList.add("poster")
    poster.src = "https://image.tmdb.org/t/p/w200" + dados.poster_path
    poster.alt = "Poster do filme" + dados.title

    let titulo = document.createElement("p")
    titulo.classList.add("titulo")
    titulo.innerHTML = dados.title || dados.name

    let nota = document.createElement("p")
    nota.classList.add("nota")
    let icone = document.createElement("icone")
    icone.classList.add("material-icons")
    icone.classList.add("dourado")
    icone.innerHTML = "star"

    let valor_nota = document.createElement("span")
    valor_nota.classList.add("valor-nota")
    valor_nota.innerHTML = dados.vote_average

    let botao = document.createElement("a")
    botao.classList.add("botao")
    botao.innerHTML = "detalhes"

    nota.appendChild(icone)
    nota.appendChild(valor_nota)

    filme.appendChild(poster)
    filme.appendChild(titulo)
    filme.appendChild(nota)
    filme.appendChild(botao)

    return filme;
    return series;

}