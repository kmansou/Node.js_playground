var handleSignup = (email, password) => {
    db.init();
    var user = { email, password };
    db.saveUser(user);

    if (db.isUserExisted(user)) {
        console.log("user with email is already existed");
    } else {
        db.saveUser({email, password});
    }
};

module.exports.handleSignup = handleSignup;