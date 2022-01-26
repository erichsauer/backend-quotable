const pool = require('../utils/pool');

module.exports = class Profile {
  id;
  name;
  quote;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.quote = row.quote;
  }

  static async insert({ name, quote }) {
    const { rows } = await pool.query(
      'INSERT INTO profiles (name, quote) VALUES ($1, $2) RETURNING *',
      [name, quote]
    );
    return new Profile(rows[0]);
    ``;
  }
};
