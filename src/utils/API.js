import axios from "axios";

const API = {
  // Retrieves all  listed events from the db
  getEvent: function() {
    return axios.get("/api/game");
  },
  // Saves a new event to the db
  saveEvent: function(text) {
    return axios.post("/api/game", { text });
  },
  // Deletes an event from the db
  deleteEvent: function(id) {
    return axios.delete(`/api/game/${id}`);
  }
};

export default API;