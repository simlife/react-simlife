"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var react_simlife_1 = require("../../../react-simlife");
var data = 'Hello Simlife';
console.log(react_simlife_1.size(data));
describe('Data utils', function () {
    describe('size', function () {
        it('should return the correct size', function () {
            var data = 'Hello Chipster';
            chai_1.expect(react_simlife_1.size(data)).to.equals(10.5);
            chai_1.expect(react_simlife_1.size('')).to.equals(0);
        });
    });
    describe('byteSize', function () {
        it('should return the correct value', function () {
            var data = 'Hello Chipster';
            //expect(byteSize(data)).to.equals('10.5 bytes');
            chai_1.expect(react_simlife_1.byteSize('')).to.equals('0 bytes');
        });
    });
});
