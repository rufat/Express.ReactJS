const chai = require('chai'),
    expect = chai.expect,
    app = require('../index');

chai.use(require('chai-http'));

describe('App', function() {
    it('responds with status 200', function(done) {
        chai.request(app)
            .get('/ping')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).has.property('users');
                done();
            });
    });
});