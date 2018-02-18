const { authenticate } = require('@feathersjs/authentication').hooks;

const relationshipCustomers = require('../../hooks/relationship-customers');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [relationshipCustomers()],
    get: [relationshipCustomers()],
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
