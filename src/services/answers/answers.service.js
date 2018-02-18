// Initializes the `answers` service on path `/answers`
const createService = require('feathers-sequelize');
const createModel = require('../../models/answers.model');
const hooks = require('./answers.hooks');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'answers',
    id: 'id_answer',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/answers', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('answers');

  service.hooks(hooks);
};
