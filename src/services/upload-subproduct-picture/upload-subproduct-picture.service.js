// Initializes the `upload-subproduct-picture` service on path `/upload-subproduct-picture`
const hooks = require('./upload-subproduct-picture.hooks');
const blobService = require('feathers-blob');
const fs = require('fs-blob-store');
const blobStorage = fs('./public/files/subproducts/pictures');

module.exports = function () {
  const app = this;

  // Initialize our service with any options it requires
  app.use('/upload-subproduct-picture', blobService({Model: blobStorage}));
  // Get our initialized service so that we can register hooks and filters
  const service = app.service('upload-subproduct-picture');

  service.hooks(hooks);
};
