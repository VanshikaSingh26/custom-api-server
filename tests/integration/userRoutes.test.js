const request = require('supertest');
const app = require('../../app');
const pool = require('../../db');

afterAll(async () => {
  await pool.end();
});

describe('POST /api/users', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ name: 'Bob', email: `bob${Date.now()}@example.com`, age: 25 });

    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Bob');
    expect(res.body.email).toMatch(/bob.*@example\.com/);
  });
});