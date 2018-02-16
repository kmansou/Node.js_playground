var request = require('supertest');
var expect = require('expect');

var app = require('./server.js').app;

describe('Server', () => {
    describe('GET /', () => {
        it('should get 404 on get / request', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: "Page not found."
                    });
                })
                .end(done);
        });
    });

    describe('GET /users', () => {
        it('should get 200 with users on get /users', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: "Karim Mansour",
                        age: 26
                    })
                })
                .end(done);
        });
    });
})


