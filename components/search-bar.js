class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  set clickEvent(event) {
    this._clickEvent = event;
    this.querySelector("#searchElement").value = "";
    this.render();
  }

  get value() {
    return this.querySelector("#searchElement").value;
  }

  render() {
    this.innerHTML = ` <nav class="navbar navbar-light bg-light sticky-top">
      <div id="brand" class="col-2">
        <a style="color: white;" class="navbar-brand">Explore Now</a>
      </div>
      <div id="searchInput" class="col-7">
        <form>
          <div class="col-12">
            <input
              class="form-control mr-lg-2"
              type="search"
              id="searchElement"
              placeholder="Find by Artist, Band, Genre or Songs"
              aria-label="Search"
            />
          </div>
        </form>
      </div>

      <div class="col">
        <button
          $enable-gradients="true"
          id="searchButton"
          class="btn btn-outline-light my-2 my-sm-0 bg-gradient-success"
          type="submit"
        >
          Search
        </button>
      </div>
    </nav>`;

    this.querySelector("#searchButton").addEventListener(
      "click",
      this._clickEvent
    );

    this.querySelector("#searchButton").addEventListener("keyup", function (
      event
    ) {
      if (event.keyCode === 13 || event.key === "enter") {
        this._clickEvent;
      }
    });
  }
}

customElements.define("search-bar", SearchBar);
