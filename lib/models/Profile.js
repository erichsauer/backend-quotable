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
  }

  static async selectAll() {
    const { rows } = await pool.query('SELECT * FROM profiles');
    return rows.map((row) => new Profile(row));
  }

  static async selectById(id) {
    const { rows } = await pool.query('SELECT * FROM profiles WHERE id=$1', [
      id,
    ]);

    if (!rows[0]) return null;
    return new Profile(rows[0]);
  }

  static async deleteById(id) {
    const { rows } = await pool.query('DELETE FROM profiles WHERE id=$1', [id]);

    if (!rows[0]) return null;
    return new Profile(rows[0]);
  }
};
