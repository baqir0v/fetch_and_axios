let body = document.querySelector("body")

fetch("https://api.tvmaze.com/shows").then(function (response) {
    if (!response) {
        console.log("Sorgu qebul olunmadi");
    }
    return response.json()
}).then(function (data) {
    data.forEach(function (show) {
        let card = document.createElement("div")
        card.classList.add("card")
        let container = document.createElement("div");
        container.classList.add("container");

        card.innerHTML = `
            <img src="${show.image.medium}" style="max-width: 100%;">
            <h3 >${show.name}</h3>
            <p>Language: ${show.language}</p>
            <h4>Rating: ${show.rating.average}</h4>
        `
        card.appendChild(container); 
        body.append(card);
    });
}).catch(function () {
    console.log("Sorgu ugursuz")
})