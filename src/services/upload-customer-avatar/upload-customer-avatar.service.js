// Initializes the `upload-customer-avatar` service on path `/upload-customer-avatar`
const hooks = require('./upload-customer-avatar.hooks');
const blobService = require('feathers-blob');
const fs = require('fs-blob-store');
const blobStorage = fs('./public/files/customers/avatars');

module.exports = function () {
  const app = this;

  // Initialize our service with any options it requires
  app.use('/upload-customer-avatar', blobService({Model: blobStorage}));
  // Get our initialized service so that we can register hooks and filters
  const service = app.service('upload-customer-avatar');

  service.hooks(hooks);
};
