const req = require('supertest');
const app = require('../app');

describe('Get /', () => {
    it('should return 200 OK', (done) => {
        request(app)
        .get('/')
        .expect(200, done);
    });
});