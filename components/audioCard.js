class AudioCard extends HTMLElement {
  set audioTrack(track) {
    this._audioTrack = track;
    this.render();
  }
  render() {
    this.innerHTML = `<div class="col"> <div class="card border-primary mb-3"  >
       
        <div class="card-body text-primary">
          <h5 class="card-title">${this._audioTrack.name}</h5>
          <audio class="audio-player" controls>
            <source id="audioSource" src=${this._audioTrack.previewURL} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
         
                  <p>${this._audioTrack.artistName}</p>
              
                <p>${this._audioTrack.albumName}</p>
        </div>
      </div>
      </div>`;
  }
}

customElements.define("audio-card", AudioCard);
