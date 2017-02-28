'use strict';

// bcrypt docs: https://www.npmjs.com/package/bcrypt
const bcrypt = require('bcryptjs');
const Sequelize = require('sequelize');
const db = require('APP/db');

const User = db.define('users', {
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    validate: {
			isEmail: true,
			notEmpty: true,
		}
  },

  // We support oauth, so users may or may not have passwords.
  password_digest: Sequelize.STRING, // This column stores the hashed password in the DB, via the beforeCreate/beforeUpdate hooks
	password: Sequelize.VIRTUAL, // Note that this is a virtual, and not actually stored in DB
  dob: {
    type: Sequelize.DATEONLY,
    validate: {
      isDate: true,
      isBefore: "1996-03-01", //user must be over 21
    }
  },
  isAuthenticated: Sequelize.BOOLEAN,
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  }
}, {
	indexes: [{fields: ['email'], unique: true}],
  hooks: {
    beforeCreate: function(user) {setEmailAndPassword(user); setAuthentication(user)},
    beforeUpdate: setEmailAndPassword,
  },
  instanceMethods: {
    // This method is a Promisified bcrypt.compare
    authenticate(plaintext) {
      return new Promise((resolve, reject) =>
        bcrypt.compare(plaintext, this.password_digest,
          (err, result) =>
            err ? reject(err) : resolve(result))
        );
    }
  }
});

function setEmailAndPassword(user) {
  user.email = user.email && user.email.toLowerCase();
  if (!user.password) return Promise.resolve(user);

  return new Promise((resolve, reject) =>
	  bcrypt.hash(user.get('password'), 10, (err, hash) => {
		  if (err) reject(err);
		  user.set('password_digest', hash);
      resolve(user);
	  })
  );
}

function setAuthentication(user) {
  if (!user.password && !user.OAuthId) user.isAuthenticated = false;
  else user.isAuthenticated = true;
  return Promise.resolve(user);
}

module.exports = User;
