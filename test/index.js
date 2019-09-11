//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Movie = require('../app/api/models/movies');
let Series = require('../app/api/models/series');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe('Movies', () => {
    beforeEach((done) => { //Before each test we empty the database
        Movie.remove({}, (err) => {
            done();
        });
    });

    /*
      * Test the /GET route
      */
    describe('/GET movies', () => {
        it('it should GET all the Movies', (done) => {
            chai.request(server)
                .get('/movies')
                .set('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzk3NTE1ZjYyZGEwMGRhMTVmNGM2OSIsImlhdCI6MTU2ODI0MDk1MCwiZXhwIjoxNTY4MjUxNzUwfQ.EBcObo6WDEakdHwfzy4rskL3Hegjj-nJBnqKzT7Dxw4')
                .end((err, res) => {
                    console.log(res.body)
                    res.body.should.have.status("success");
                    res.body.data.movies.should.be.a('array');
                    res.body.data.movies.length.should.be.eql(0);
                    done();
                });
        });
    });



});

describe('Series', () => {
    beforeEach((done) => { //Before each test we empty the database
        Series.remove({}, (err) => {
            done();
        });
    });

    describe('/GET series', () => {
        it('it should GET all the Series', (done) => {
            chai.request(server)
                .get('/series')
                .set('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzk3NTE1ZjYyZGEwMGRhMTVmNGM2OSIsImlhdCI6MTU2ODI0MDk1MCwiZXhwIjoxNTY4MjUxNzUwfQ.EBcObo6WDEakdHwfzy4rskL3Hegjj-nJBnqKzT7Dxw4')
                .end((err, res) => {
                    console.log(res.body)
                    res.body.should.have.status("success");
                    res.body.data.series.should.be.a('array');
                    res.body.data.series.length.should.be.eql(0);
                    done();
                });
        });
    });

})
