/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let ext = [".com", ".net", ".us", ".io"];
let myList = "";

function domainGenerator() {
  for (let i = 0; i < pronoun.length; i++) {
    let p = pronoun[i];
    for (let j = 0; j < adj.length; j++) {
      let a = p + adj[j];
      for (let k = 0; k < noun.length; k++) {
        let n = a + noun[k];
        for (let l = 0; l < ext.length; l++) {
          let e = n + ext[l];
          let myTag = `<li class="list-group-item text-center">${e}</li>`;
          myList += myTag;
        }
      }
    }
  }
  document.querySelector(".card").innerHTML = myList;
}

domainGenerator();
