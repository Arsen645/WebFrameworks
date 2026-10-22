const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const mongoose = require('mongoose');

// Replace PASSWORD with your database user's password (no < > brackets).
// Do not upload this file to GitHub with the real password in it.
const dbURI = process.env.MONGODB_URI ||
  'mongodb+srv://arsen00311_db_user:@cluster0.qd9lojx.mongodb.net/ucl?retryWrites=true&w=majority';

try {
  mongoose.connect(dbURI).then(
    () => { console.log('Mongoose is connected'); },
    err => { console.log(err); }
  );
} catch (e) {
  console.log('could not connect');
}

require('./teams');