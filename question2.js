const gamesUrl = "https://api.rawg.io/api/games";

async function fetchGames() {
    try {
        const response = await fetch(gamesUrl);
        const games = await response.json();
        displayContent(games.results);
    } catch (error) {
        console.log(error);
    }
}
fetchGames();

function displayContent(games) {
    console.log(games);
    const gamesContainer = document.querySelector(".results");
    let html = "";
    for (let i = 0; i < games.length; i++) {
        console.log(games[i].name);
        if (games[i].name) {
            console.log(games[i].name);
        }
        html += `<div class="game">
                    <h2>${games[i].name}</h2>
                    <img src="${games[i].background_image}"></img>
                </div>`;
    }
    gamesContainer.innerHTML = html;
}