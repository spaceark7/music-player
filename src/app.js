import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import $ from "jquery";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap";
import "../components/audioCardList.js";
import "../components/audioCard.js";
import "../components/search-bar.js";
import DataSource from "./data/data-source.js";

// Base Url & API KEY untuk inisiasi nilai di top track
const TOPTRACKSURL = "https://api.napster.com/v2.2/tracks/top?";
const API_KEY = "apikey=MDY0MDM2NmItY2MyMy00MjYyLTk5M2UtYjYzZWYyYWY4ZGU1";
const Error = "Oops! Seems like you forgot to enter value :(";
const audioCardListElement = document.querySelector("audio-card-list");
const searchELement = document.querySelector("search-bar");
const searchListElement = document.querySelector("#list-container");
const spinner = document.querySelector("#spinner");

// Inisiasi Kode untuk Search mulai dari sini
const onButtonSearchClicked = () => {
  spinner.removeAttribute("hidden");
  if (searchELement.value === "") {
    fallbackResult(Error);
  } else {
    DataSource.searchTracks(searchELement.value)
      .then(renderResult)
      .catch(fallbackResult);
  }
};

const renderResult = (results) => {
  console.log("Test Result", results);
  audioCardListElement.audioTracks = results;
  searchListElement.appendChild(audioCardListElement);
  spinner.setAttribute("hidden", "hidden");
};

const fallbackResult = (message) => {
  audioCardListElement.renderError(message);
  spinner.setAttribute("hidden", "hidden");
};

searchELement.clickEvent = onButtonSearchClicked;
// Akhir CKode Search
const showTopTracks = () => {
  // Inisiasi Kode untuk Top Tracks
  fetch(`${TOPTRACKSURL}${API_KEY}`)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      console.log(responseJson);

      audioCardListElement.audioTracks = responseJson.tracks;
      // const source = document.getElementById("audioSource");
      // const audio = document.querySelector(".audio-player");
      // console.log(source);
      // source.src = resposeJson.tracks[0].previewURL;
      //audio.load();
    });
};

showTopTracks();
//Eksekusi Klik Tab
$("pills-tab").on("click", function (e) {
  e.preventDefault();
  $(this).tab("show");
  //showTopTracks();
});
