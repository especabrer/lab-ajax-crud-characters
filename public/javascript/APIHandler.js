const axios = require('axios');

class APIHandler {
  constructor (baseUrl) {
    this.api = axios.create({
      BASE_URL: baseUrl
    });
  }

  getFullList () {
    this.api.get('/characters');
  }

  getOneRegister (characterId) {
    this.api.get(`/characters/${characterId}`)
  }

  createOneRegister (characterInfo) {
    this.api.post(`/characters`, characterInfo);
  }

  updateOneRegister (characterId, characterInfo) {
    this.api.put(`/characters/${characterId}`, characterInfo);
  }

  deleteOneRegister (characterId) {
    this.api.delete(`/characters/${characterId}`);
  }
}

module.exports = APIHandler