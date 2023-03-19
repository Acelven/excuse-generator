/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let randomNumber = Math.random() * 10;
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let subject = ["The dog", "A horse", "A driver", "A homeless", "A clown"];
  let action = [
    "took my",
    "destroyed my",
    "sat on my",
    "blew up my",
    "stole my"
  ];
  let what = ["homework", "car", "computer", "cellphone"];
  let location = ["on the street", "in my room", "in my home", "in my garden"];

  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let locationIndex = Math.floor(Math.random() * location.length);

  return (
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    location[locationIndex]
  );
};
