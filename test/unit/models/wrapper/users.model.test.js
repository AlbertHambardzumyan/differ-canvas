"use strict";

const chai = require('chai');

const expect = chai.expect;

const UsersModel = require('../../../../app/models/users.model');


describe('Users Model', () => {

    const userId = 34,
        courses = [{id: 5, name: 'Data Structures'}];

    const INVALID_token = '45fh38rtv0';

    describe('linkAccount', () => {
        it('should Link Account', (done) => {
            UsersModel.linkAccount(userId, token, (err, result) => {
                expect(err).to.be.null;

                expect(result).to.be.instanceof(Object);
                expect(result).to.have.deep.property('userId', userId);
                expect(result).to.have.deep.property('token', token);
                expect(result).to.have.deep.property('courses', []);
                expect(result).to.have.deep.property('_id');
                done();
            });
        });

        it('should get error. errorCode: ER_DUP_ENTRY.', (done) => {
            UsersModel.linkAccount(userId, token, (err) => {

                expect(err).to.be.instanceOf(Object);
                expect(err).to.have.deep.property('code', 11000);
                expect(err).to.have.deep.property('name', 'MongoError');
                done();
            });
        });
    });

    describe('getCourses', () => {
        it('should Get Courses', (done) => {
            UsersModel.getCourses(token, (err, result) => {
                expect(err).to.be.null;

                expect(result).to.be.instanceof(Array);
                expect(result[0]).to.have.deep.property('courses', []);
                done();
            });
        });

        it('should get empty array.', (done) => {
            UsersModel.getCourses(INVALID_token, (err, result) => {
                expect(err).to.be.null;

                expect(result).to.be.instanceOf(Array).length(0);
                done();
            });
        });
    });

    describe('saveCourses', () => {
        it('should Save Courses', (done) => {
            UsersModel.saveCourses(courses, token, (err, result) => {
                expect(err).to.be.null;

                expect(result).to.be.instanceof(Object);
                expect(result).to.have.deep.property('userId', userId);
                expect(result).to.have.deep.property('token', token);
                expect(result).to.have.deep.property('_id');
                expect(result).to.have.deep.property('courses', courses);
                done();
            });
        });
    });
});