// Initializes the `regionals` service on path `/regionals`
const createService = require('feathers-sequelize');
const createModel = require('../../models/regionals.model');
const hooks = require('./regionals.hooks');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'regionals',
    id: 'id_region',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/regionals', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('regionals');

  service.hooks(hooks);
};
