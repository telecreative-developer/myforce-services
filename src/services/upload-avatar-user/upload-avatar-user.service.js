// Initializes the `upload-avatar-user` service on path `/upload-avatar-user`
const hooks = require('./upload-avatar-user.hooks');
const blobService = require('feathers-blob');
const fs = require('fs-blob-store');
const blobStorage = fs('./public/files/users/avatars');

module.exports = function () {
  const app = this;

  // Initialize our service with any options it requires
  app.use('/upload-avatar-user', blobService({Model: blobStorage}));
  // Get our initialized service so that we can register hooks and filters
  const service = app.service('upload-avatar-user');

  service.hooks(hooks);
};
