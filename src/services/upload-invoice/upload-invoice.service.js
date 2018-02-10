// Initializes the `upload-invoice` service on path `/upload-invoice`
const hooks = require('./upload-invoice.hooks');
const blobService = require('feathers-blob');
const fs = require('fs-blob-store');
const blobStorage = fs('./public/files/invoice/files');

module.exports = function () {
  const app = this;

  // Initialize our service with any options it requires
  app.use('/upload-invoice', blobService({Model: blobStorage}));
  // Get our initialized service so that we can register hooks and filters
  const service = app.service('upload-invoice');

  service.hooks(hooks);
};
