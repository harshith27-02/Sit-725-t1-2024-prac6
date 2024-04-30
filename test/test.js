const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);

before(function (done) {
    this.timeout(20000);
    const client = require('../dbConnection');
    client.connect(err => {
        if (err) done(err);
        else done();
    });
});


describe('/GET cats', () => {
    it('it GET all the cats', (done) => {
        chai.request(server)
            .get('/api/cats')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.data.should.be.a('array');
                done();
            });
    });
});

describe('/POST cat', () => {
    it('new cat is posted', (done) => {
        let cat = {
            title: "Testing kitten 3",
            image: "images/kitten-3.jpg",
            link: "link for cat3",
            description: "This is a test case for kitten 3"
        };

        chai.request(server)
            .post('/api/cat')
            .send(cat)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('success');
                done();
            });
    });
});

describe('/DELETE/:id cat', () => {
    it('it will delete cat with of given Id', (done) => {
        let id = "66307bae6e31fc6dea1b0f98";

        chai.request(server)
            .delete('/api/cat/' + id)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('success');
                done();
            });
    });
});