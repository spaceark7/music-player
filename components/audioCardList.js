import "./audioCard.js";

class audioCardList extends HTMLElement {
  set audioTracks(tracks) {
    this._tracks = tracks;
    this.render();
  }

  render() {
    this.innerHTML = "";
    this._tracks.forEach((track) => {
      const audioCardElement = document.createElement("audio-card");
      audioCardElement.audioTrack = track;
      //this.innerHTML += audioCardElement;
      //const row = document.getElementsByClassName("row");
      this.appendChild(audioCardElement);
    });
    // const audios = document.querySelectorAll(".audio-player");
    // console.log(Array.from(audios).filter);
  }

  renderError(message) {
    this.innerHTML = `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define("audio-card-list", audioCardList);
