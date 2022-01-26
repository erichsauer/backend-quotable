const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('quotable routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('should create a new profile with a random quote', async () => {
    const res = await request(app)
      .post('/api/v1/profiles')
      .send({ name: 'Test User' });

    expect(res.body).toEqual({
      id: expect.any(String),
      name: 'Test User',
      quote: expect.any(String),
    });
  });
});
