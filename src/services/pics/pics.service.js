// Initializes the `pics` service on path `/pics`
const createService = require('feathers-sequelize');
const createModel = require('../../models/pics.model');
const hooks = require('./pics.hooks');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'pics',
    id: 'id_pic',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/pics', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('pics');

  service.hooks(hooks);
};
