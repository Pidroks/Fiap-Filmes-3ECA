let url = "https://api.themoviedb.org/3/trending/movie/week?api_key=bc0a9176151aa176a111cd5179f8e0cd"
let filmes = document.querySelector("#filmes")
fetch(url).then(
    resposta => resposta.json().then(json => json.results.forEach(filme => filmes.appendChild(CardFilme(filme)))  ))

url = "https://api.themoviedb.org/3/trending/tv/week?api_key=bc0a9176151aa176a111cd5179f8e0cd"

let series = document.querySelector("#series")
fetch(url).then(
    resposta => resposta.json().then(json => json.results.forEach(serie => series.appendChild(CardFilme(serie)))  ))
