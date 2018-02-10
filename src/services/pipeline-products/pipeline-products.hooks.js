const { authenticate } = require('@feathersjs/authentication').hooks;

const relationshipPipelineProducts = require('../../hooks/relationship-pipeline-products');

module.exports = {
  before: {
    all: [authenticate('jwt'), relationshipPipelineProducts()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
