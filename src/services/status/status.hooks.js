const { authenticate } = require('@feathersjs/authentication').hooks;

const relationshipStatus = require('../../hooks/relationship-status');

module.exports = {
  before: {
    all: [authenticate('jwt'), relationshipStatus()],
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
