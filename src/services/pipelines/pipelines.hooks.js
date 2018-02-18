const { authenticate } = require('@feathersjs/authentication').hooks;

const relationshipPipeline = require('../../hooks/relationship-pipeline');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [relationshipPipeline()],
    get: [relationshipPipeline()],
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
