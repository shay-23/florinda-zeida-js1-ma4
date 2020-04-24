fetch("https://api.rawg.io/api/games/4200")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        createGameDetails(data);
    });

function createGameDetails(detail) {
    console.log("game", detail);

    const image = detail.background_image ?
        detail.background_image :
        detail.background_image_additional;

    document.querySelector(".image").style.backgroundImage = `url('${image}')`;
    document.querySelector(".description").innerHTML =
        detail.description;
    document.querySelector("h1").innerHTML = detail.name;
}