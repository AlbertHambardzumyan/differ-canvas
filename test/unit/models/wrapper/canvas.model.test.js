"use strict";

const chai = require('chai');

const expect = chai.expect;

const CanvasModel = require('../../../../app/models/canvas.model');


describe('Canvas Model', () => {


    describe('fetchCourses', () => {
        it('should Fetch Courses', (done) => {
            CanvasModel.fetchCourses(token, (err, result) => {
                expect(err).to.be.null;

                expect(result).to.be.instanceof(Array);
                expect(result[0]).to.have.deep.property('id');
                expect(result[0]).to.have.deep.property('name');
                expect(result[0]).to.have.deep.property('account_id');
                expect(result[0]).to.have.deep.property('start_at');
                expect(result[0]).to.have.deep.property('grading_standard_id');
                expect(result[0]).to.have.deep.property('is_public');
                expect(result[0]).to.have.deep.property('course_code');
                expect(result[0]).to.have.deep.property('default_view');
                expect(result[0]).to.have.deep.property('root_account_id');
                done();
            });
        });
    });
});