"use strict";

const chai = require('chai');
const superTest = require('supertest');

const server = superTest.agent(API);
const expect = chai.expect;


describe('Accounts Api', () => {
    const INVALID_token = '45df';

    describe('/link-account', () => {
        const data = {
            userId: userId,
            token: token
        };
        it('should post Link Account', () => {
            return server.post('/link-account/').send(data).then((result) => {

                expect(result.status).to.equal(201);
                expect(result.body).to.be.instanceOf(Object);
                expect(result.body).to.have.deep.property('status', 201);
                expect(result.body).to.have.deep.property('message', 'Created');
            });
        });

        it('should return error with 400 errorCode: InvalidInput', () => {
            delete data.userId;
            return server.post('/link-account/').send(data).then((result) => {

                expect(result.status).to.equal(400);
                expect(result.body).to.be.instanceOf(Object);
                expect(result.body).to.have.deep.property('statusCode', 400);
                expect(result.body).to.have.deep.property('errorCode', 'InvalidInput');
                expect(result.body).to.have.deep.property('errorMessage', '"userId" is required');
            });
        });
    });

    describe('/import', () => {
        const data = {
            token: token
        };
        it('should post Import', () => {
            return server.post('/import/').send(data).then((result) => {

                expect(result.status).to.equal(201);
                expect(result.body).to.be.instanceOf(Object);
                expect(result.body).to.have.deep.property('status', 201);
                expect(result.body).to.have.deep.property('message', 'Created');
            });
        });
    });

    describe('/courses', () => {
        it('should get courses', () => {
            return server.get(`/courses?token=${token}`).then((result) => {

                expect(result.status).to.equal(200);
                expect(result.body).to.be.instanceOf(Object);
                expect(result.body).to.have.deep.property('courses');
            });
        });

        it('should return error with 404 errorCode: ResourceNotFound', () => {
            return server.get(`/courses?token=${INVALID_token}`).then((result) => {

                expect(result.status).to.equal(404);
                expect(result.body).to.be.instanceOf(Object);
                expect(result.body).to.have.deep.property('statusCode', 404);
                expect(result.body).to.have.deep.property('errorCode', 'ResourceNotFound');
                expect(result.body).to.have.deep.property('errorMessage', 'The specified resource does not exist.');
            });
        });
    });
});