// Initializes the `upload-cover-user` service on path `/upload-cover-user`
const hooks = require('./upload-cover-user.hooks');
const blobService = require('feathers-blob');
const fs = require('fs-blob-store');
const blobStorage = fs('./public/files/users/covers');

module.exports = function () {
  const app = this;
  
  // Initialize our service with any options it requires
  app.use('/upload-cover-user', blobService({Model: blobStorage}));
  // Get our initialized service so that we can register hooks and filters
  const service = app.service('upload-cover-user');

  service.hooks(hooks);
};
