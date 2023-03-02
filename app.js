const submitButton = document.getElementById("submitButton");
const searchBar = document.getElementById("searchBar");
const form = document.getElementById("GifForm");
const container = document.getElementById("gifContainer");

submitButton.addEventListener("click", function (e) {
  let searchQuery = searchBar.value;
  e.preventDefault();

  searchForGif(`${searchQuery}`);
});

async function searchForGif(searchQuery) {
  let randomNum = Math.floor(Math.random() * 50);

  const searchResult = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: { q: searchQuery, api_key: "tCKQNg7ddrgyVhz3fDvsijsZUAmEHlYW" },
  });

  let link = searchResult.data.data[randomNum].url;
  let newImg = document.createElement("img");
  newImg.src = link;
  container.append(newImg);

  searchBar.value = "";
}
removeButton = document.createElement("button");
removeButton.addEventListener("click", function (e) {
  removeButton.innerText = "x";
  newImg.append(removeButton);
  newImg.delete;
});
