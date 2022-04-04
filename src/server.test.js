const request = require('supertest');

const server = require('./server').server;

describe('server', () => {
  describe('/hello', () => {
    it('responds with You are awesome', (done) => {
      request(server).get('/hello').expect('You are awesome!').end(done);
    });
  });
});
