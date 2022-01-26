const fetch = require('cross-fetch');
const Profile = require('../models/Profile');

module.exports = class ProfileService {
  static async create({ name }) {
    const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
    const [{ quote }] = await res.json();
    return Profile.insert({ name, quote });
  }
};
