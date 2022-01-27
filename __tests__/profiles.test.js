const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const ProfileService = require('../lib/services/ProfileService');

describe('quotable routes', () => {
  let testUser;
  beforeEach(async () => {
    setup(pool);
    testUser = await ProfileService.create({ name: 'Test User' });
  });

  afterAll(() => {
    pool.end();
  });

  it('should create a new profile with a random quote', async () => {
    const res = await request(app)
      .post('/api/v1/profiles')
      .send({ name: 'Test User 2' });

    expect(res.body).toEqual({
      id: expect.any(String),
      name: 'Test User 2',
      quote: expect.any(String),
    });
  });

  it('should fetch a list of profiles', async () => {
    const res = await request(app).get('/api/v1/profiles');

    expect(res.body).toEqual([
      {
        id: expect.any(String),
        name: 'Test User',
        quote: expect.any(String),
      },
    ]);
  });

  it('should fetch one profile by id', async () => {
    const res = await request(app).get(`/api/v1/profiles/${testUser.id}`);

    expect(res.body).toEqual(testUser);
  });

  it('should delete one profile by id', async () => {
    const res = await request(app).get(`/api/v1/profiles/${testUser.id}`);

    expect(res.body).toEqual(testUser);
    expect(ProfileService.deleteById(testUser.id)).toBeNull;
  });
});
