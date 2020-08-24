const baseUrl = "https://api.napster.com/v2.2/search?";
const API_KEY = "apikey=MDY0MDM2NmItY2MyMy00MjYyLTk5M2UtYjYzZWYyYWY4ZGU1";
const query = "&query=";

class DataSource {
  static searchTracks(keyword) {
    return fetch(`${baseUrl}${API_KEY}${query}${keyword}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson.search.data.tracks.length > 0) {
          return Promise.resolve(responseJson.search.data.tracks);
        } else {
          return Promise.reject(`Oops we can't found ${keyword}`);
        }
      });
  }
}

export default DataSource;
