"use strict";
console.log("javascript.js file was loaded");

const baseUrl = "https://robust-safe-crafter.glitch.me/";
const els = {
  cardContainer: document.getElementById("masterDiv"),
};
console.log("els ===", els);

function getAllCards(url) {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      data.forEach((postObj) => {
        createItem(postObj);
        return data;
      });
      console.log(data);
    })
    .catch((error) => {
      console.warn("ivyko klaida:", error);
    });
}
getAllCards(baseUrl);

function createItem(postObj) {
  const card = document.createElement("div");
  card.classList.add("col");
  card.innerHTML = `
  <div class="card h-100">
    <img src="${postObj.image}" class="card-img-top" alt="https://picsum.photos/200/300">
    <div class="card-body">
      <h5 class="card-title"> ${postObj.city} </h5>
      <p class="card-text">${postObj.description}</p>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary">${postObj.price} europietiškų</small>
    </div>
  </div>
`;
  els.cardContainer.append(card);
}
