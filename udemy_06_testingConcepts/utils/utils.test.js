const expect = require('expect');

const utils = require('./utils.js');

describe('utils', () => {
    it('should add 2 numbers sync', () => {
        var res = utils.add(5, 6);
        expect(res).toBeA('number').toBe(11);
    });

    it('should add 2 numbers async', (done) => {
        utils.addAsync(5, 7, (res) => {
            expect(res).toBeA('number').toBe(12);
            done();
        });
    });

    it('should square a number sync', () => {
        var res = utils.square(3);
        expect(res).toBe(9);
    });

    it('should square a number async', (done) => {
        utils.squareAsync(5, (res) => {
            expect(res).toBeA('number').toBe(25);
            done();
        });
    });
});

var setNames = it('should set first and last names to user', () => {
    var user = {
        age: 26,
        location: 'Cairo, Eg'
    };

    utils.setName(user, 'Karim Mansour');

    expect(user).toInclude({
        firstName: 'Karim',
        lastName: 'Mansour'
    });

});