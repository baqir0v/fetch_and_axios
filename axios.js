let body = document.querySelector("body")

axios.get("https://api.tvmaze.com/shows").then(function (response) {
    const shows = response.data


    shows.forEach(function (show) {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${show.image.medium}" style="max-width: 100%;">
            <h3>${show.name}</h3>
            <p>Language: ${show.language}</p>
            <h4>Rating: ${show.rating.average}</h4>
        `;

        body.append(card);
    });
}).catch(function () {
    console.log("Sorgu ugursuzdur");
})