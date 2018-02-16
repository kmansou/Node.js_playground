const fs = require('fs');
const usersFile = './users.json';
var users = [];

var init = () => {
    if (fs.existsSync(usersFile)) {
        var data = fs.readFileSync(usersFile);
        users = JSON.parse(data);
    }
    listAllUsers();
};

var saveUsers = () => {
    var usersAsString = JSON.stringify(users);
    fs.writeFileSync(usersFile, usersAsString);
};

var saveUser = (user) => {
    users[users.length] = user;
    saveUsers();
};

var isUserExistedByEmail = (email) => {
    var filteredUsers = users.filter(u => u.email === email);

    return filteredUsers && filteredUsers.length > 0;
};

var isUserExisted = (user) => {
    return isUserExistedByEmail(user.email);
};

var listAllUsers = () => {
    console.log(JSON.stringify(users, undefined, 2));
};

module.exports.saveUser = saveUser;
module.exports.isUserExistedByEmail = isUserExistedByEmail;
module.exports.isUserExisted = isUserExisted;
module.exports.listAllUsers = listAllUsers;
module.exports.init = init;