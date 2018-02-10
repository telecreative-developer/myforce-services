// Initializes the `upload-product-picture` service on path `/upload-product-picture`
const hooks = require('./upload-product-picture.hooks');
const blobService = require('feathers-blob');
const fs = require('fs-blob-store');
const blobStorage = fs('./public/files/products/pictures');

module.exports = function () {
  const app = this;

  // Initialize our service with any options it requires
  app.use('/upload-product-picture', blobService({Model: blobStorage}));
  // Get our initialized service so that we can register hooks and filters
  const service = app.service('upload-product-picture');

  service.hooks(hooks);
};
