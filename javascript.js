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

function createItem(postObj) {}
