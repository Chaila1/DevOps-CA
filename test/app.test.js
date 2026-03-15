const req = require('supertest');
const app = require('../app');

describe('Get /', () => {
    it('should return 200 OK', (done) => {
        req(app)
        .get('/')
        .expect(200, done);
    });
});