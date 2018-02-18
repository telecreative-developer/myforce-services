const { authenticate } = require('@feathersjs/authentication').hooks;

const relationshipPipelineProducts = require('../../hooks/relationship-pipeline-products');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [relationshipPipelineProducts()],
    get: [relationshipPipelineProducts()],
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
