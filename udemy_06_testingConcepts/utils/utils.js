module.exports.add = (a, b) => a + b;

module.exports.addAsync = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
};

module.exports.square = (x) => x ** 2;

module.exports.squareAsync = (x, callback) => {
    setTimeout(() => {
        callback(x ** 2);
    }, 1000);
};

module.exports.setName = (userObj, fullName) => {
    var names = fullName.split(' ');
    userObj.firstName = names[0];
    userObj.lastName = names[1];
}